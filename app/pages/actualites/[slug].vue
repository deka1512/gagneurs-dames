<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
const { getPost } = useWordPress()

const { data: post } = await useAsyncData('news-' + slug, () => getPost(slug))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Actualité introuvable',
  })
}

useSeoMeta({
  title: () => {
    const title = post.value?.title.rendered.replace(/<[^>]*>/g, '') || 'Actualité'
    return title + ' | Gagneurs d’Âmes'
  },
  description: () => post.value?.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160) || 'Actualités de la Communauté les Gagneurs d’Âmes.',
})
</script>

<template>
  <article v-if="post" class="section">
    <div class="container article-container">
      <NuxtLink to="/actualites" class="text-link">
        <i class="pi pi-arrow-left" /> Toutes les actualités
      </NuxtLink>
      <span class="eyebrow article-eyebrow">LA VIE DE LA COMMUNAUTÉ</span>
      <h1>{{ post.title.rendered.replace(/<[^>]*>/g, '') }}</h1>
      <p class="article-date">{{ new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</p>
      <div class="article-body" v-html="post.content.rendered" />
    </div>
  </article>
</template>
