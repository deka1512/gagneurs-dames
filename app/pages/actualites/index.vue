<script setup lang="ts">
const { getPosts, available } = useWordPress()
const { data: posts } = await useAsyncData('news', () => getPosts({ per_page: 12 }))

const demoNews = [
  { slug: 'grandir-ensemble', date: '2026-10-25', category: 'Vie communautaire', title: 'Grandir ensemble dans la foi', excerpt: 'Un temps de partage, de prière et d’encouragement pour fortifier notre marche avec Dieu et apprendre à nous soutenir les uns les autres.' },
  { slug: 'parole-et-vie', date: '2026-10-18', category: 'Enseignement', title: 'La Parole au cœur de nos vies', excerpt: 'Retour sur un moment consacré à la découverte des Écritures et à leur mise en pratique dans les choix de chaque jour.' },
  { slug: 'dimanche-de-communion', date: '2026-10-11', category: 'Célébration', title: 'Un dimanche de communion', excerpt: 'Une célébration autour de la reconnaissance, de la fraternité et de l’espérance qui nous rassemble.' },
  { slug: 'servir-avec-amour', date: '2026-10-04', category: 'Engagement', title: 'Servir avec amour, simplement', excerpt: 'Parce que la foi se traduit aussi par des gestes concrets, nous voulons encourager chacun à être attentif à son prochain.' },
  { slug: 'un-temps-pour-prier', date: '2026-09-27', category: 'Vie spirituelle', title: 'Un temps pour prier ensemble', excerpt: 'La prière nous rassemble, nous fortifie et nous aide à porter ensemble les joies comme les préoccupations.' },
  { slug: 'accueillir-et-accompagner', date: '2026-09-20', category: 'Communauté', title: 'Accueillir et accompagner', excerpt: 'Une communauté grandit lorsque chacun peut être écouté, encouragé et accompagné avec bienveillance.' },
]
const clean = (value: string) => value.replace(/<[^>]*>/g, '').trim()
const dateLabel = (date: string) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))
const featuredPost = computed(() => posts.value?.[0] ?? null)
const articles = computed(() => posts.value?.length
  ? posts.value.slice(1).map(post => ({ slug: post.slug, date: post.date, title: clean(post.title.rendered), excerpt: clean(post.excerpt.rendered).slice(0, 155), category: 'Actualité', demo: false }))
  : demoNews.slice(1).map(item => ({ ...item, demo: true })))
useSeoMeta({ title: 'Actualités | Gagneurs d’Âmes', description: 'Les nouvelles, rencontres et temps forts de la Communauté les Gagneurs d’Âmes.' })
</script>

<template>
  <div>
    <section class="page-hero page-hero-news">
      <img class="page-hero-photo" src="/bg%201.jpg" alt="" aria-hidden="true" fetchpriority="high">
      <div class="container page-hero-content">
        <span class="eyebrow eyebrow-light">LA VIE DE LA COMMUNAUTÉ</span>
        <h1>Des nouvelles qui<br><em>nous rapprochent.</em></h1>
        <p>Rencontres, enseignements, initiatives et moments de partage : suivez la vie de notre communauté.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="listing-intro">
          <div><span class="eyebrow">LE JOURNAL DE LA COMMUNAUTÉ</span><h2>À la une</h2></div>
          <p>Des nouvelles pour rester connectés à ce qui se vit et se construit ensemble.</p>
        </div>

        <article v-if="featuredPost" class="featured-article">
          <div class="featured-article-art"><span><i class="pi pi-megaphone" /> ACTUALITÉ</span></div>
          <div class="featured-article-copy">
            <span class="card-meta">{{ dateLabel(featuredPost.date) }}</span>
            <h3>{{ clean(featuredPost.title.rendered) }}</h3>
            <p>{{ clean(featuredPost.excerpt.rendered).slice(0, 220) }}</p>
            <NuxtLink :to="'/actualites/' + featuredPost.slug" class="text-link">Lire l'article <i class="pi pi-arrow-up-right" /></NuxtLink>
          </div>
        </article>
        <article v-else class="featured-article">
          <div class="featured-article-art"><span><i class="pi pi-heart" /> VIE COMMUNAUTAIRE</span></div>
          <div class="featured-article-copy">
            <span class="card-meta">Édition de démonstration · 25 octobre 2026</span>
            <h3>Grandir ensemble dans la foi</h3>
            <p>La vie de la communauté se construit dans les rencontres, l’écoute et l’encouragement mutuel. Découvrez les thèmes qui nous rassemblent et les engagements qui nous inspirent.</p>
            <span class="card-demo-label">Exemple de publication éditoriale</span>
          </div>
        </article>

        <div class="editorial-grid">
          <article v-for="(item, index) in articles" :key="item.slug" class="news-card">
            <div class="news-card-art" :class="'news-art-' + (index % 4)"><span>{{ item.category }}</span><i :class="['pi pi-book-open', 'pi pi-users', 'pi pi-sun', 'pi pi-heart'][index % 4]" /></div>
            <div class="news-card-copy">
              <span class="card-meta">{{ dateLabel(item.date) }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <NuxtLink v-if="!item.demo" :to="'/actualites/' + item.slug" class="text-link">Lire la suite <i class="pi pi-arrow-up-right" /></NuxtLink>
              <span v-else class="card-demo-label">Contenu fictif</span>
            </div>
          </article>
        </div>
        <p class="content-source-note"><i class="pi pi-info-circle" /> {{ available ? 'Publications chargées depuis WordPress. La séparation par catégorie éditoriale reste à configurer.' : 'Publications fictives destinées à présenter la mise en page. Elles seront remplacées par les contenus officiels.' }}</p>
      </div>
    </section>
  </div>
</template>
