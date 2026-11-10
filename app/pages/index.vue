<script setup lang="ts">
const { getPosts } = useWordPress()
const { data: posts } = await useAsyncData('home-posts', () => getPosts({ per_page: 3 }))

const demoNews = [
  {
    slug: 'grandir-ensemble-dans-la-foi',
    date: '2026-10-25T09:00:00',
    title: 'Grandir ensemble dans la foi',
    excerpt: 'Un temps de partage, de prière et d’encouragement pour avancer ensemble et fortifier notre marche avec Dieu.',
    category: 'Vie communautaire',
  },
  {
    slug: 'la-parole-au-coeur-de-nos-vies',
    date: '2026-10-18T09:00:00',
    title: 'La Parole au cœur de nos vies',
    excerpt: 'Retour sur notre rencontre autour des Écritures et sur les enseignements qui nous accompagnent au quotidien.',
    category: 'Enseignement',
  },
  {
    slug: 'un-dimanche-de-communion',
    date: '2026-10-11T09:00:00',
    title: 'Un dimanche de communion',
    excerpt: 'Une célébration placée sous le signe de la reconnaissance, de la fraternité et de l’espérance.',
    category: 'Événement',
  },
]

const dateLabel = (date: string) =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))

useSeoMeta({
  title: 'Accueil | Communauté les Gagneurs d’Âmes',
  description: 'Bienvenue à la Communauté les Gagneurs d’Âmes à Kinshasa. Une foi vivante, une communion fraternelle et une mission partagée.',
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-image" />
      <div class="container hero-content">
        <span class="hero-kicker"><i class="pi pi-sparkles" /> BIENVENUE DANS NOTRE COMMUNAUTÉ</span>
        <h1>Une foi vivante.<br><em>Des vies transformées.</em></h1>
        <p>
          Un lieu pour rencontrer Dieu, découvrir la Parole, grandir ensemble
          et faire rayonner l’amour du Christ autour de nous.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/eglise" class="button button-accent">Découvrir notre église <i class="pi pi-arrow-up-right" /></NuxtLink>
          <NuxtLink to="/predications" class="button button-glass"><i class="pi pi-play-circle" /> Écouter les prédications</NuxtLink>
        </div>
        <div class="hero-welcome"><i class="pi pi-heart-fill" /> Vous êtes les bienvenus, tels que vous êtes.</div>
      </div>
      <div class="container hero-bottom">
        <span>FOI <b>·</b> COMMUNION <b>·</b> MISSION</span>
        <span>Kinshasa · RDC <i class="pi pi-arrow-down" /></span>
      </div>
    </section>

    <section class="welcome-band">
      <div class="container welcome-band-inner">
        <div><span class="eyebrow">VOTRE MAISON SPIRITUELLE</span><h2>Il y a une place pour vous.</h2></div>
        <p>Que vous découvriez la foi ou que vous souhaitiez approfondir votre relation avec Dieu, nous serions heureux de cheminer avec vous.</p>
        <NuxtLink to="/rendez-vous" class="text-link">Faisons connaissance <i class="pi pi-arrow-up-right" /></NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="container intro-grid">
        <div>
          <span class="eyebrow">QUI SOMMES-NOUS ?</span>
          <h2>Une communauté tournée vers <span>Christ.</span></h2>
        </div>
        <div>
          <p class="intro-copy">
            La Communauté les Gagneurs d’Âmes est présentée ici comme un espace de foi,
            d’accueil et de croissance. Nous voulons annoncer l’Évangile, encourager
            chacun à découvrir sa vocation et servir notre prochain avec amour.
          </p>
          <NuxtLink to="/eglise" class="text-link">Découvrir notre vision <i class="pi pi-arrow-up-right" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <SectionHeading eyebrow="LA VIE DE LA COMMUNAUTÉ" title="Grandir, apprendre et partager" description="Retrouvez les nouvelles, les rencontres et les enseignements qui rythment la vie de notre communauté." />
        <div v-if="posts?.length" class="card-grid">
          <article v-for="post in posts" :key="post.id" class="content-card">
            <div class="card-content">
              <span class="card-meta">Actualité · {{ dateLabel(post.date) }}</span>
              <h3>{{ post.title.rendered.replace(/<[^>]*>/g, '') }}</h3>
              <p>{{ post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 150) }}</p>
              <NuxtLink :to="'/actualites/' + post.slug" class="text-link">Lire la suite <i class="pi pi-arrow-up-right" /></NuxtLink>
            </div>
          </article>
        </div>
        <div v-else class="card-grid">
          <article v-for="item in demoNews" :key="item.slug" class="content-card editorial-card">
            <div class="editorial-card-top"><span>{{ item.category }}</span><i class="pi pi-book-open" /></div>
            <div class="card-content">
              <span class="card-meta">{{ dateLabel(item.date) }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <NuxtLink to="/actualites" class="text-link">Explorer les actualités <i class="pi pi-arrow-up-right" /></NuxtLink>
            </div>
          </article>
        </div>
        <div class="section-action"><NuxtLink to="/actualites" class="button button-outline">Toutes les actualités <i class="pi pi-arrow-right" /></NuxtLink></div>
      </div>
    </section>

    <section class="section gatherings-section">
      <div class="container">
        <div class="gatherings-heading">
          <div><span class="eyebrow eyebrow-light">SE RETROUVER</span><h2>Des temps pour se connecter.</h2></div>
          <p>La foi se nourrit aussi de la rencontre, de l’écoute et de la prière partagée.</p>
        </div>
        <div class="gatherings-grid">
          <article><span class="gathering-day">DIMANCHE</span><i class="pi pi-sun" /><h3>Culte de célébration</h3><p>Un temps de louange, de prière et d’enseignement biblique ouvert à tous.</p><strong>09h00 – 11h00</strong></article>
          <article><span class="gathering-day">MERCREDI</span><i class="pi pi-book" /><h3>Étude biblique</h3><p>Approfondir les Écritures et poser des fondations solides pour sa foi.</p><strong>17h30 – 19h00</strong></article>
          <article><span class="gathering-day">VENDREDI</span><i class="pi pi-heart" /><h3>Réunion de prière</h3><p>Un moment de communion et d’intercession pour les familles et la ville.</p><strong>17h30 – 19h00</strong></article>
        </div>
        <p class="schedule-disclaimer">Horaires proposés à titre de démonstration, à confirmer par les responsables.</p>
      </div>
    </section>

    <section class="section mission-section">
      <div class="container mission-grid">
        <div>
          <span class="eyebrow eyebrow-light">NOTRE ENGAGEMENT</span>
          <h2>Grandir dans la foi.<br><em>Servir avec amour.</em></h2>
          <p>Nous croyons qu’une foi vivante se partage : dans nos familles, nos quartiers et notre ville.</p>
          <NuxtLink to="/eglise" class="button button-light">Notre vision et nos valeurs <i class="pi pi-arrow-up-right" /></NuxtLink>
        </div>
        <i class="pi pi-sun mission-symbol" />
      </div>
    </section>

    <section class="section">
      <div class="container contact-strip-inner">
        <div><span class="eyebrow">FAISONS CONNAISSANCE</span><h2>Nous serions heureux de vous accueillir.</h2><p>Une question, un besoin de prière ou envie de nous rendre visite ? Parlons-en.</p></div>
        <NuxtLink to="/contact" class="button button-accent">Nous contacter <i class="pi pi-arrow-up-right" /></NuxtLink>
      </div>
    </section>
  </div>
</template>
