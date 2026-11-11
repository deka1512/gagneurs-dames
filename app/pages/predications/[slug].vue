<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { getPost } = useWordPress()

const { data: post } = await useAsyncData('sermon-' + slug, () => getPost(slug))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Prédication introuvable',
  })
}

useSeoMeta({
  title: () => {
    const title = post.value?.title.rendered.replace(/<[^>]*>/g, '') || 'Prédication'
    return title + ' | Gagneurs d’Âmes'
  },
  description: () => post.value?.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160) || 'Enseignements de la Communauté les Gagneurs d’Âmes.',
})
</script>

<template>
  <article v-if="post" class="section">
    <div class="container article-container">
      <NuxtLink to="/predications" class="text-link">
        <i class="pi pi-arrow-left" /> Toutes les prédications
      </NuxtLink>
      <span class="eyebrow article-eyebrow">ENSEIGNEMENT BIBLIQUE</span>
      <h1>{{ post.title.rendered.replace(/<[^>]*>/g, '') }}</h1>
      <p class="article-date">{{ new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</p>
      <div class="article-body" v-html="post.content.rendered" />
    </div>
  </article>
</template>
