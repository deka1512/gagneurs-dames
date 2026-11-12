<script setup lang="ts">
useSeoMeta({
  title: 'Offrandes & dons | Communauté les Gagneurs d’Âmes',
  description: 'Soutenez la mission et les actions de la Communauté les Gagneurs d’Âmes par votre générosité.'
})

const givingAreas = [
  { icon: 'pi pi-book', title: 'Annoncer l’Évangile', text: 'Contribuer aux enseignements, aux rencontres et aux actions qui font connaître le message du Christ.' },
  { icon: 'pi pi-users', title: 'Édifier la communauté', text: 'Soutenir les activités spirituelles, la formation et l’accompagnement des membres.' },
  { icon: 'pi pi-heart', title: 'Servir avec compassion', text: 'Participer aux initiatives d’entraide et aux actions de solidarité envers les personnes dans le besoin.' },
]
</script>

<template>
  <div class="giving-page">
    <section class="page-hero page-hero-church giving-hero">
      <img class="page-hero-photo" src="/section%20eglise.jpg" alt="" aria-hidden="true" fetchpriority="high">
      <div class="container page-hero-content">
        <span class="eyebrow eyebrow-light">OFFRANDES & GÉNÉROSITÉ</span>
        <h1>Ensemble, faisons grandir<br><em>une œuvre qui bénit.</em></h1>
        <p>Votre générosité est une manière de prendre part à la mission, de soutenir la vie de la communauté et de servir notre prochain.</p>
        <div class="page-hero-links">
          <a href="#comment-donner" class="button button-accent">Comment contribuer <i class="pi pi-arrow-down" /></a>
          <NuxtLink to="/contact" class="button button-glass">Nous contacter</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section giving-intro">
      <div class="container giving-intro-grid">
        <div>
          <span class="eyebrow">UN GESTE QUI A DU SENS</span>
          <h2>Donner avec foi, liberté et transparence.</h2>
        </div>
        <div>
          <p>Les offrandes et les dons sont des gestes volontaires. Chacun est libre de contribuer selon ses possibilités, sans pression ni obligation.</p>
          <p>Chaque contribution est destinée à soutenir la mission et les activités de la communauté. Pour connaître les modalités de remise et obtenir les coordonnées officielles, prenez contact directement avec les responsables.</p>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <SectionHeading eyebrow="VOTRE SOUTIEN" title="Au service de la mission" description="Votre générosité peut contribuer à plusieurs dimensions de la vie de l’église." />
        <div class="giving-areas">
          <article v-for="area in givingAreas" :key="area.title" class="giving-area-card">
            <span><i :class="area.icon" /></span>
            <h3>{{ area.title }}</h3>
            <p>{{ area.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="comment-donner" class="section giving-contact-section">
      <div class="container giving-contact-grid">
        <div>
          <span class="eyebrow eyebrow-light">COMMENT CONTRIBUER ?</span>
          <h2>Recevez les informations officielles.</h2>
          <p>Pour effectuer une offrande ou un don, contactez la communauté afin de recevoir les modalités et les coordonnées confirmées par les responsables.</p>
          <p class="giving-reassurance"><i class="pi pi-shield" /> Nous ne publions pas de numéro de compte ni de portefeuille mobile non vérifié sur cette page.</p>
        </div>
        <div class="giving-contact-actions">
          <NuxtLink to="/contact" class="button button-accent">Contacter l’église <i class="pi pi-arrow-up-right" /></NuxtLink>
          <a href="tel:0812356892" class="giving-contact-link"><i class="pi pi-phone" /><span><small>Appeler la communauté</small><strong>081 235 68 92</strong></span></a>
          <a href="mailto:contact@cga.com" class="giving-contact-link"><i class="pi pi-envelope" /><span><small>Écrire un message</small><strong>contact@cga.com</strong></span></a>
        </div>
      </div>
    </section>

    <section class="section giving-final">
      <div class="container giving-final-inner">
        <div><span class="eyebrow">MERCI POUR VOTRE CŒUR</span><h2>Votre présence est déjà précieuse.</h2><p>La générosité prend plusieurs formes : un don, du temps, une compétence, une prière ou un service rendu avec amour.</p></div>
        <NuxtLink to="/eglise" class="button button-outline">Découvrir notre église <i class="pi pi-arrow-up-right" /></NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.giving-hero{min-height:470px}
.giving-intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(35px,7vw,90px);align-items:start}
.giving-intro h2,.giving-final h2{margin:13px 0;color:#183b56;font-family:Urbanist,sans-serif;font-size:clamp(34px,4.5vw,52px);line-height:1.1}
.giving-intro-grid>div:last-child p,.giving-final p{color:#647786;line-height:1.9}
.giving-areas{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.giving-area-card{padding:30px;border:1px solid #e1e8ed;border-radius:14px;background:#fff}
.giving-area-card>span{width:48px;height:48px;display:grid;place-items:center;border-radius:12px;color:#3976a8;background:#edf4f8;font-size:20px}
.giving-area-card h3{margin:20px 0 10px;color:#183b56;font-family:Urbanist,sans-serif;font-size:22px}
.giving-area-card p{margin:0;color:#647786;line-height:1.8}
.giving-contact-section{color:#fff;background:linear-gradient(120deg,#102b40,#204e70)}
.giving-contact-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:center}
.giving-contact-grid h2{max-width:650px;margin:14px 0;color:#fff;font-family:Urbanist,sans-serif;font-size:clamp(36px,4.5vw,52px);line-height:1.1}
.giving-contact-grid>div:first-child>p{max-width:650px;color:#d4e0e8;line-height:1.9}
.giving-reassurance{display:flex;gap:10px;align-items:flex-start;margin-top:24px;padding:14px;border:1px solid #ffffff30;border-radius:8px;font-size:12px}
.giving-reassurance i{margin-top:3px;color:#f28b83}
.giving-contact-actions{display:grid;gap:18px;padding:28px;border:1px solid #ffffff30;border-radius:14px;background:#ffffff0b}
.giving-contact-actions>.button{justify-self:start}
.giving-contact-link{display:flex;align-items:center;gap:14px;color:#fff!important}
.giving-contact-link>i{width:42px;height:42px;display:grid;place-items:center;border-radius:10px;color:#183b56;background:#fff}
.giving-contact-link span{display:grid;gap:2px}
.giving-contact-link small{color:#c5d9e7}
.giving-final-inner{display:flex;align-items:center;justify-content:space-between;gap:35px}
.giving-final-inner>div{max-width:690px}
.giving-final h2{font-size:clamp(30px,4vw,42px)}
@media(max-width:760px){.giving-intro-grid,.giving-contact-grid{grid-template-columns:1fr}.giving-areas{grid-template-columns:1fr}.giving-final-inner{align-items:flex-start;flex-direction:column}}
</style>
