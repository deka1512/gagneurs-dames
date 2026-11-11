<script setup lang="ts">
import { articles } from '~/data/articles'
import { leadershipPreview } from '~/data/leadership'

const featuredArticles = articles.slice(0, 3)
const pastorPortraitFailed = ref(false)
const pastorPortraitSrc = '/beni%20h.jpg'
const dateLabel = (date: string) =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))

useSeoMeta({
  title: 'Accueil | Communauté les Gagneurs d’Âmes',
  description: 'Bienvenue à la Communauté les Gagneurs d’Âmes à Kinshasa. Une foi vivante, une communion fraternelle et une mission partagée.'
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-image" />
      <div class="container hero-content">
        <span class="hero-kicker"><i class="pi pi-sun" /> BIENVENUE DANS NOTRE COMMUNAUTÉ</span>
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

    <section class="pastor-section">
      <div class="container pastor-layout">
        <div class="pastor-portrait" aria-label="Présentation du Révérend Beni H. Kalala">
          <img
            v-if="!pastorPortraitFailed"
            class="pastor-portrait-image"
             :src="pastorPortraitSrc"
            alt="Portrait du Révérend Beni H. Kalala"
            loading="lazy"
            @error="pastorPortraitFailed = true"
          >
          <div v-else class="pastor-portrait-fallback"><span class="pastor-initials">BK</span></div>
          <span class="pastor-portrait-caption">FOI · SERVICE · MISSION</span>
        </div>
        <div class="pastor-content">
          <span class="eyebrow">UN MOT SUR NOTRE RESPONSABLE SPIRITUEL</span>
          <p class="pastor-overline">REPRÉSENTANT LÉGAL DE LA COMMUNAUTÉ</p>
          <h2>Révérend <span>Beni H. Kalala</span></h2>
          <p>
            À la tête de la Communauté les Gagneurs d’Âmes en qualité de représentant légal,
            le Révérend Beni H. Kalala est associé à une vision qui place l’Évangile,
            la croissance spirituelle et le service au cœur de la vie communautaire.
          </p>
          <p>
            Découvrez l’identité, les convictions et la mission de notre communauté,
            et prenez part à cette dynamique de foi.
          </p>
          <NuxtLink to="/eglise" class="text-link">Découvrir notre communauté <i class="pi pi-arrow-up-right" /></NuxtLink>
        </div>
      </div>
    </section>

    <section id="leadership-home" class="section leadership-preview-section">
      <div class="container">
        <SectionHeading
          eyebrow="DES FEMMES ET DES HOMMES AU SERVICE"
          title="Une équipe engagée pour la mission"
          description="Le collège pastoral, l’équipe pastorale et les collaborateurs contribuent ensemble à la vie et au rayonnement de la communauté."
        />
        <div class="leadership-grid leadership-grid-preview">
          <LeadershipCard v-for="member in leadershipPreview" :key="member.id" :member="member" />
        </div>
        <div class="section-action">
          <NuxtLink to="/eglise#leadership" class="button button-outline">Découvrir les équipes <i class="pi pi-arrow-right" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="vision-home-section">
      <div class="container vision-home-inner">
        <div class="vision-home-heading">
          <span class="eyebrow eyebrow-light">NOTRE VISION</span>
          <h2>Changer le monde <em>pour Christ.</em></h2>
          <p>Une vision qui nous invite à vivre l’Évangile, à le partager avec conviction et à servir notre prochain avec amour.</p>
          <NuxtLink to="/eglise" class="button button-light">Comprendre notre vision <i class="pi pi-arrow-up-right" /></NuxtLink>
        </div>
        <div class="vision-pillars">
          <article>
            <span>01</span>
            <i class="pi pi-book" />
            <h3>Annoncer la Parole</h3>
            <p>Faire connaître le message de Jésus-Christ et encourager chacun à découvrir les Écritures.</p>
          </article>
          <article>
            <span>02</span>
            <i class="pi pi-heart" />
            <h3>Former des disciples</h3>
            <p>Grandir dans la foi, développer une vie de prière et mettre la Parole en pratique.</p>
          </article>
          <article>
            <span>03</span>
            <i class="pi pi-globe" />
            <h3>Servir notre prochain</h3>
            <p>Être une présence de compassion, d’espérance et de solidarité dans notre environnement.</p>
          </article>
        </div>
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
        <SectionHeading eyebrow="LA VIE DE LA COMMUNAUTÉ" title="Grandir, apprendre et partager" description="Retrouvez les actualités, les rencontres et les enseignements qui rythment la vie de notre communauté." />
        <div class="card-grid">
          <article v-for="item in featuredArticles" :key="item.slug" class="content-card editorial-card">
            <div class="editorial-card-image">
              <img :src="item.image" :alt="item.imageAlt" loading="lazy" decoding="async">
              <span>{{ item.category }}</span>
            </div>
            <div class="card-content">
              <span class="card-meta">{{ dateLabel(item.publishedAt) }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <NuxtLink :to="'/articles/' + item.slug" class="text-link">Lire la publication <i class="pi pi-arrow-up-right" /></NuxtLink>
            </div>
          </article>
        </div>
        <div class="section-action"><NuxtLink to="/articles" class="button button-outline">Toutes les actualités <i class="pi pi-arrow-right" /></NuxtLink></div>
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
