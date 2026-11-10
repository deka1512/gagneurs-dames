<script setup lang="ts">
const { getPosts, available } = useWordPress()
const { data: posts } = await useAsyncData('sermons', () => getPosts({ per_page: 12 }))

const demoSermons = [
  { slug: 'foi-qui-transforme', date: '2026-10-25', title: 'Une foi qui transforme le quotidien', speaker: 'Équipe pastorale · exemple', reference: 'Jacques 2:17', excerpt: 'La foi ne se limite pas à ce que nous déclarons : elle se manifeste aussi dans nos choix, notre attitude et notre manière d’aimer.' },
  { slug: 'demeurer-dans-la-parole', date: '2026-10-18', title: 'Demeurer dans la Parole', speaker: 'Équipe pastorale · exemple', reference: 'Jean 15:7', excerpt: 'Prendre le temps d’écouter, de méditer et de mettre en pratique la Parole pour construire une vie enracinée en Christ.' },
  { slug: 'aimer-son-prochain', date: '2026-10-11', title: 'Aimer son prochain concrètement', speaker: 'Équipe pastorale · exemple', reference: 'Luc 10:27', excerpt: 'Le commandement de l’amour nous invite à dépasser les intentions pour poser des gestes concrets de compassion et de service.' },
  { slug: 'esperance-dans-lepreuve', date: '2026-10-04', title: 'Garder l’espérance dans l’épreuve', speaker: 'Équipe pastorale · exemple', reference: 'Romains 12:12', excerpt: 'Comment garder les yeux tournés vers Dieu et demeurer dans l’espérance lorsque le chemin devient difficile.' },
]
const dateLabel = (date: string) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))
const clean = (value: string) => value.replace(/<[^>]*>/g, '').trim()
const sermons = computed(() => posts.value?.length
  ? posts.value.map(post => ({ slug: post.slug, date: post.date, title: clean(post.title.rendered), excerpt: clean(post.excerpt.rendered).slice(0, 180), speaker: '', reference: '', demo: false }))
  : demoSermons.map(item => ({ ...item, demo: true })))
useSeoMeta({ title: 'Prédications | Gagneurs d’Âmes', description: 'Messages bibliques et enseignements pour nourrir votre foi et approfondir la Parole.' })
</script>

<template>
  <div>
    <section class="page-hero page-hero-sermons">
      <div class="container page-hero-content">
        <span class="eyebrow eyebrow-light">ENSEIGNEMENTS & MÉDITATIONS</span>
        <h1>Nourrir sa foi.<br><em>Vivre la Parole.</em></h1>
        <p>Des enseignements pour réfléchir, grandir spirituellement et mettre la Parole en pratique chaque jour.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="listing-intro">
          <div><span class="eyebrow">RESSOURCES SPIRITUELLES</span><h2>Écouter et méditer</h2></div>
          <p>Prenez un moment pour vous arrêter, écouter et laisser la Parole éclairer votre quotidien.</p>
        </div>

        <div class="sermon-list">
          <article v-for="(item, index) in sermons" :key="item.slug" class="sermon-row">
            <div class="sermon-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="sermon-main">
              <span class="card-meta">{{ dateLabel(item.date) }} <template v-if="item.demo"> · {{ item.reference }}</template></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <span v-if="item.demo" class="sermon-speaker">{{ item.speaker }}</span>
              <NuxtLink v-else :to="'/predications/' + item.slug" class="text-link">Lire l'enseignement <i class="pi pi-arrow-up-right" /></NuxtLink>
            </div>
            <div class="sermon-action"><i class="pi pi-book-open" /></div>
          </article>
        </div>
        <p class="content-source-note"><i class="pi pi-info-circle" /> {{ available ? 'Publications chargées depuis WordPress. Un type de contenu ou une catégorie dédiée aux prédications reste à configurer.' : 'Enseignements fictifs de démonstration : les noms des orateurs et références sont à valider avant publication.' }}</p>
      </div>
    </section>
  </div>
</template>
