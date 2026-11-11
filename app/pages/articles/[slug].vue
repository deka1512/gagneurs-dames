<script setup lang="ts">
import { articles } from '~/data/articles'

const route = useRoute()
const article = articles.find(item => item.slug === String(route.params.slug))

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Publication introuvable' })
}

const dateLabel = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.publishedAt))

useSeoMeta({
  title: article.title + ' | Gagneurs d’Âmes',
  description: article.excerpt,
  ogTitle: article.title,
  ogDescription: article.excerpt,
  ogImage: article.image
})
</script>

<template>
  <article class="section article-detail-section">
    <div class="container article-detail-container">
      <NuxtLink to="/articles" class="text-link article-back"><i class="pi pi-arrow-left" /> Toutes les actualités</NuxtLink>
      <div class="article-detail-heading">
        <span class="eyebrow">{{ article.category }}</span>
        <h1>{{ article.title }}</h1>
        <p class="article-date">{{ dateLabel }} · {{ article.readingTime }} · Rédaction</p>
      </div>
      <img class="article-detail-cover" :src="article.image" :alt="article.imageAlt" fetchpriority="high">
      <div class="article-body article-detail-body">
        <p class="article-lead">{{ article.excerpt }}</p>
        <section v-for="section in article.sections" :key="section.heading">
          <h2>{{ section.heading }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </section>
      </div>
      <div class="article-detail-footer">
        <NuxtLink to="/articles" class="button button-outline"><i class="pi pi-arrow-left" /> Retour aux actualités</NuxtLink>
        <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer" class="button button-primary">
          Découvrir les prédications <i class="pi pi-youtube" />
        </a>
      </div>
    </div>
  </article>
</template>
