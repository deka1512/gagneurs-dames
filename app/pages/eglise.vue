<script setup lang="ts">
import { pastoralCollege, pastoralTeam, collaborators } from '~/data/leadership'
useSeoMeta({
  title: 'Notre église | Communauté les Gagneurs d’Âmes',
  description: 'Découvrez la communauté, les convictions et les engagements qui inspirent la Communauté les Gagneurs d’Âmes.',
})

const values = [
  { icon: 'pi pi-book', title: 'La Parole au centre', text: 'Nous voulons apprendre à connaître les Écritures, les comprendre et les mettre en pratique dans notre vie quotidienne.' },
  { icon: 'pi pi-heart', title: 'Une famille spirituelle', text: 'Nous cultivons l’accueil, l’écoute, la compassion et des relations fraternelles où chacun peut trouver sa place.' },
  { icon: 'pi pi-sun', title: 'Une foi vivante', text: 'Nous encourageons une relation personnelle avec Dieu, nourrie par la prière, la louange et une marche fidèle.' },
  { icon: 'pi pi-globe', title: 'Une mission partagée', text: 'Nous souhaitons témoigner de l’amour du Christ et servir concrètement les personnes autour de nous.' },
]

const commitments = [
  'Accueillir chaque personne avec respect et bienveillance.',
  'Grandir ensemble par l’enseignement et la mise en pratique de la Parole.',
  'Encourager la prière, la communion et le service.',
  'Faire rayonner l’espérance chrétienne dans notre environnement.',
]
</script>

<template>
  <div>
    <section class="page-hero page-hero-church">
      <div class="container hero-content ">
        <span class="eyebrow eyebrow-light">QUI SOMMES-NOUS ?</span>
        <h1>Une communauté.<br><em>Une foi, une mission.</em></h1>
        <p>Unis par la foi en Jésus-Christ, nous voulons être une communauté qui accueille, qui édifie et qui sert.</p>
        <div class="page-hero-links">
          <NuxtLink to="/rendez-vous" class="button button-accent">Faire connaissance <i class="pi pi-arrow-up-right" /></NuxtLink>
          <NuxtLink to="/contact" class="button button-glass">Nous trouver</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container story-grid">
        <div class="story-visual">
          <img src="/section%20eglise.jpg" class="story-visual-image" alt="Lumière traversant les fenêtres d'un lieu de rassemblement">
          <div class="story-quote"><i class="pi pi-quote-left" /><p>« Que tout ce que vous faites se fasse avec amour. »</p><span>1 Corinthiens 16:14</span></div>
        </div>
        <div class="story-copy">
          <span class="eyebrow">NOTRE IDENTITÉ</span>
          <h2>Une maison où la foi prend vie.</h2>
          <p>La Communauté les Gagneurs d’Âmes souhaite offrir un cadre où chacun peut découvrir le message de l’Évangile, approfondir sa relation avec Dieu et avancer avec d’autres dans la foi.</p>
          <p>Nous croyons qu’une communauté chrétienne se construit dans la fidélité à la Parole, la prière, l’amour fraternel et le service. Notre désir est de faire de ces convictions une réalité dans la vie de tous les jours.</p>
          <div class="editorial-note"><i class="pi pi-info-circle" /> Présentation éditoriale de démonstration : l’histoire officielle et les informations institutionnelles restent à valider.</div>
        </div>
      </div>
    </section>

    <section class="church-photo-section" aria-label="La vie de la communauté">
      <div class="church-photo-image">
        <img src="/section%20eglise.jpg" alt="Photographie illustrant la vie et les rassemblements de la communauté" loading="lazy">
        <div class="church-photo-overlay">
          <span class="eyebrow eyebrow-light">UNE COMMUNAUTÉ ENSEMBLE</span>
          <h2>Grandir dans la foi.<br><em>Avancer ensemble.</em></h2>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <SectionHeading eyebrow="CE QUI NOUS ANIME" title="Nos convictions au quotidien" description="Des repères simples qui inspirent notre manière de vivre la foi et de prendre soin les uns des autres." />
        <div class="values-grid values-grid-refined">
          <article v-for="(value, index) in values" :key="value.title" class="value-card">
            <span class="value-number">0{{ index + 1 }}</span>
            <span class="value-icon"><i :class="value.icon" /></span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="leadership" class="section leadership-section section-soft">
      <div class="container">
        <SectionHeading
          eyebrow="LEADERSHIP & SERVICE"
          title="Des équipes au service de la vision"
          description="Une organisation présentée autour du collège pastoral, de l’équipe pastorale et des collaborateurs qui participent à la mission."
        />

        <div class="leadership-group">
          <div class="leadership-group-heading">
            <span class="eyebrow">ORIENTATION & ACCOMPAGNEMENT</span>
            <h3>Le collège pastoral</h3>
          </div>
          <div class="leadership-grid">
            <LeadershipCard v-for="member in pastoralCollege" :key="member.id" :member="member" />
          </div>
        </div>

        <div class="leadership-group">
          <div class="leadership-group-heading">
            <span class="eyebrow">SUIVI SPIRITUEL & VIE COMMUNAUTAIRE</span>
            <h3>L’équipe pastorale</h3>
          </div>
          <div class="leadership-grid">
            <LeadershipCard v-for="member in pastoralTeam" :key="member.id" :member="member" />
          </div>
        </div>

        <div class="leadership-group">
          <div class="leadership-group-heading">
            <span class="eyebrow">ENGAGEMENT & SERVICE</span>
            <h3>Les collaborateurs</h3>
          </div>
          <div class="leadership-grid">
            <LeadershipCard v-for="member in collaborators" :key="member.id" :member="member" />
          </div>
        </div>

        <p class="leadership-note"><i class="pi pi-info-circle" /> À l’exception du Révérend Beni H. Kalala, les noms, fonctions et portraits affichés sont des exemples fictifs destinés à illustrer la présentation de l’équipe. Ils devront être remplacés ou validés par l’église.</p>
      </div>
    </section>

    <section class="section mission-section church-mission">
      <div class="container church-mission-grid">
        <div>
          <span class="eyebrow eyebrow-light">NOTRE VISION</span>
          <h2>Des vies touchées.<br><em>Une espérance partagée.</em></h2>
          <p>Notre ambition est de contribuer à former des femmes et des hommes enracinés dans la foi, attachés à la Parole et attentifs aux besoins de leur prochain.</p>
        </div>
        <div class="commitment-panel">
          <span class="eyebrow eyebrow-light">NOS ENGAGEMENTS</span>
          <ul>
            <li v-for="item in commitments" :key="item"><i class="pi pi-check-circle" />{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container church-next-step">
        <div><span class="eyebrow">VOTRE PLACE EST ICI</span><h2>Et si nous faisions connaissance ?</h2><p>Vous pouvez nous écrire ou demander un premier échange. Nous serons heureux de vous accueillir.</p></div>
        <NuxtLink to="/rendez-vous" class="button button-primary">Prendre contact <i class="pi pi-arrow-up-right" /></NuxtLink>
      </div>
    </section>
  </div>
</template>
