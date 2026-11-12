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

    <section class="section church-history-section">
      <div class="container church-history-grid">
        <div class="church-history-copy">
          <span class="eyebrow">NOTRE HISTOIRE</span>
          <h2>Une histoire de foi, de rencontres et de service.</h2>
          <p>La Communauté les Gagneurs d’Âmes porte une conviction : l’Évangile transforme les vies et rassemble des personnes différentes autour d’une même espérance.</p>
          <p>Au fil des rencontres, des temps de prière, de l’enseignement biblique et du service, la communauté souhaite être une maison spirituelle où chacun peut grandir, trouver sa place et contribuer à une mission qui le dépasse.</p>
          <p>Cette histoire continue de s’écrire avec les familles, les jeunes, les responsables et tous ceux qui choisissent de cheminer ensemble.</p>
        </div>
        <div class="church-history-aside">
          <span class="church-history-mark">Foi<br>Communion<br>Mission</span>
          <p>Un héritage vivant, porté par des femmes et des hommes engagés au service de Dieu et de leur prochain.</p>
        </div>
      </div>
    </section>

    <section class="section pastor-nestor-section">
      <div class="container pastor-nestor-grid">
        <div class="pastor-nestor-monogram" aria-hidden="true"><span>PN</span><small>PASTORAT & TRANSMISSION</small></div>
        <div class="pastor-nestor-copy">
          <span class="eyebrow eyebrow-light">UNE FIGURE DE NOTRE COMMUNAUTÉ</span>
          <h2>Révérend Pasteur <em>Nestor</em></h2>
          <p>Nous consacrons cet espace au Révérend Pasteur Nestor, dont le parcours, l’engagement et le ministère méritent d’être présentés et transmis aux générations qui poursuivent la mission.</p>
          <p>Son portrait, son témoignage et les étapes marquantes de son ministère pourront être intégrés ici afin de raconter son histoire avec justesse et de mettre en lumière sa contribution à la vie de la communauté.</p>
          <NuxtLink to="/contact" class="text-link pastor-nestor-link">Échanger avec la communauté <i class="pi pi-arrow-up-right" /></NuxtLink>
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

    <section class="section church-giving-cta">
      <div class="container church-giving-inner">
        <div>
          <span class="eyebrow eyebrow-light">PARTICIPER À LA MISSION</span>
          <h2>Votre générosité peut faire grandir l’œuvre.</h2>
          <p>Par vos offrandes et vos dons, vous pouvez soutenir les actions de la communauté, l’annonce de l’Évangile et les initiatives de solidarité.</p>
        </div>
        <NuxtLink to="/dons" class="button button-accent">Offrandes & dons <i class="pi pi-arrow-up-right" /></NuxtLink>
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

<style scoped>
.church-history-section{background:#f4f7f9}
.church-history-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:clamp(38px,7vw,90px);align-items:center}
.church-history-copy h2{max-width:690px;margin:14px 0 20px;color:#183b56;font-family:Urbanist,sans-serif;font-size:clamp(34px,4.5vw,52px);line-height:1.08}
.church-history-copy p,.church-history-aside p{color:#647786;line-height:1.9}
.church-history-aside{min-height:310px;display:flex;flex-direction:column;justify-content:space-between;padding:34px;border-radius:14px;color:#fff;background:linear-gradient(145deg,#183b56,#3976a8)}
.church-history-mark{font-family:Urbanist,sans-serif;font-size:clamp(38px,5vw,58px);font-weight:800;line-height:1.05;letter-spacing:-.04em}
.church-history-aside p{max-width:340px;margin:30px 0 0;color:#e1edf4}
.pastor-nestor-section{color:#fff;background:#102b40}
.pastor-nestor-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:clamp(38px,7vw,90px);align-items:center}
.pastor-nestor-monogram{min-height:360px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;border:1px solid #ffffff30;border-radius:14px;background:radial-gradient(circle at 50% 35%,#3976a8 0,#204b6b 42%,#102b40 100%)}
.pastor-nestor-monogram span{color:#fff;font-family:Urbanist,sans-serif;font-size:clamp(100px,14vw,170px);font-weight:800;line-height:1;letter-spacing:-.08em}
.pastor-nestor-monogram small{color:#c5d9e7;font-size:10px;font-weight:800;letter-spacing:.16em}
.pastor-nestor-copy h2{margin:14px 0 20px;color:#fff;font-family:Urbanist,sans-serif;font-size:clamp(38px,5vw,58px);line-height:1.06}
.pastor-nestor-copy h2 em{color:#f28b83;font-style:normal}
.pastor-nestor-copy p{max-width:690px;color:#d4e0e8;line-height:1.9}
.pastor-nestor-link{color:#f6a19b!important}
.church-giving-cta{color:#fff;background:linear-gradient(120deg,#183b56,#245b80)}
.church-giving-inner{display:flex;align-items:center;justify-content:space-between;gap:40px}
.church-giving-inner>div{max-width:700px}
.church-giving-inner h2{margin:13px 0;color:#fff;font-family:Urbanist,sans-serif;font-size:clamp(32px,4.4vw,48px);line-height:1.1}
.church-giving-inner p{margin:0;color:#dce8f0;line-height:1.8}
@media(max-width:760px){.church-history-grid,.pastor-nestor-grid{grid-template-columns:1fr}.church-history-aside{min-height:250px}.pastor-nestor-monogram{min-height:250px}.church-giving-inner{align-items:flex-start;flex-direction:column}}
</style>
