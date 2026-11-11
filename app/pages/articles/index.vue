<script setup lang="ts">
import { articles } from '~/data/articles'

const featuredArticle = articles[0]!
const otherArticles = articles.slice(1)
const dateLabel = (date: string) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))

useSeoMeta({
  title: 'Actualités | Communauté les Gagneurs d’Âmes',
  description: 'Articles, réflexions bibliques et ressources pour nourrir la foi et découvrir la mission de la Communauté les Gagneurs d’Âmes.'
})
</script>

<template>
  <div>
    <section class="page-hero page-hero-articles">
      <img class="page-hero-photo" src="/responsable%20louange.jpg" alt="" aria-hidden="true" fetchpriority="high">
      <div class="container hero-content">
        <span class="eyebrow eyebrow-light">ACTUALITÉS & RÉFLEXIONS</span>
        <h1>Des paroles pour<br><em>nourrir la foi.</em></h1>
        <p>Des réflexions, des repères bibliques et des ressources pour avancer dans la foi et vivre l’Évangile au quotidien.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="listing-intro">
          <div><span class="eyebrow">LES NOUVELLES DE LA COMMUNAUTÉ</span><h2>À lire et à partager</h2></div>
          <p>Retrouvez les nouvelles, les réflexions et les temps forts de la vie communautaire.</p>
        </div>

        <NuxtLink :to="'/articles/' + featuredArticle.slug" class="article-featured">
          <div class="article-featured-image">
            <img :src="featuredArticle.image" :alt="featuredArticle.imageAlt" fetchpriority="high">
            <span>{{ featuredArticle.category }}</span>
          </div>
          <div class="article-featured-copy">
            <span class="card-meta">{{ dateLabel(featuredArticle.publishedAt) }} · {{ featuredArticle.readingTime }}</span>
            <h2>{{ featuredArticle.title }}</h2>
            <p>{{ featuredArticle.excerpt }}</p>
            <span class="text-link">Lire la publication <i class="pi pi-arrow-up-right" /></span>
          </div>
        </NuxtLink>

        <div class="articles-grid">
          <article v-for="article in otherArticles" :key="article.slug" class="article-card">
            <NuxtLink :to="'/articles/' + article.slug" class="article-card-image">
              <img :src="article.image" :alt="article.imageAlt" loading="lazy" decoding="async">
              <span>{{ article.category }}</span>
            </NuxtLink>
            <div class="article-card-copy">
              <span class="card-meta">{{ dateLabel(article.publishedAt) }} · {{ article.readingTime }}</span>
              <h3><NuxtLink :to="'/articles/' + article.slug">{{ article.title }}</NuxtLink></h3>
              <p>{{ article.excerpt }}</p>
              <NuxtLink :to="'/articles/' + article.slug" class="text-link">Lire la publication <i class="pi pi-arrow-up-right" /></NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container articles-invitation">
        <div>
          <span class="eyebrow">RESTONS CONNECTÉS</span>
          <h2>Prolongez la réflexion avec les prédications.</h2>
          <p>Retrouvez les messages et enseignements publiés sur notre chaîne YouTube.</p>
        </div>
        <a class="button button-primary" href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer">
          Voir la chaîne YouTube <i class="pi pi-youtube" />
        </a>
      </div>
    </section>
  </div>
</template>
