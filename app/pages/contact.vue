<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Communauté les Gagneurs d’Âmes',
  description: 'Retrouvez la Communauté les Gagneurs d’Âmes à Bandalungwa, Kinshasa, et contactez-nous.'
})

const address = 'Avenue Kisangani, n° 31 Bis, quartier Makelele, commune de Bandalungwa, référence Virage Assolongo, Kinshasa, République démocratique du Congo'
const phone = '0812356892'
const email = 'contact@cga.com'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Avenue%20Kisangani%20n%C2%B031%20Bis%2C%20Makelele%2C%20Bandalungwa%2C%20Kinshasa%2C%20RDC'
</script>

<template>
  <div class="contact-page">
    <section class="page-hero contact-hero">
      <div class="contact-hero-visual" aria-hidden="true"><img src="/chuch.jpg" alt="" fetchpriority="high"></div>
      <div class="container contact-hero-content">
        <span class="eyebrow eyebrow-light">RESTONS EN CONTACT</span>
        <h1>Nous serions heureux<br><em>de vous rencontrer.</em></h1>
        <p>Une question, un besoin de prière ou l’envie de nous rendre visite ? Nous sommes heureux de pouvoir échanger avec vous.</p>
      </div>
    </section>

    <section class="section contact-main-section">
      <div class="container contact-grid">
        <div class="contact-main-copy">
          <span class="eyebrow">NOS COORDONNÉES</span>
          <h2>Retrouvons-nous à Bandalungwa.</h2>
          <p class="contact-intro">La Communauté les Gagneurs d’Âmes vous accueille à Kinshasa. Retrouvez ci-dessous notre adresse et nos moyens de contact.</p>

          <div class="contact-detail">
            <i class="pi pi-map-marker" />
            <div><strong>Notre adresse</strong><span>{{ address }}</span></div>
          </div>
          <div class="contact-detail">
            <i class="pi pi-phone" />
            <div><strong>Téléphone</strong><a :href="`tel:${phone}`">{{ phone }}</a></div>
          </div>
          <div class="contact-detail">
            <i class="pi pi-envelope" />
            <div><strong>Adresse e-mail</strong><a :href="`mailto:${email}`">{{ email }}</a></div>
          </div>
          <a :href="mapUrl" target="_blank" rel="noopener noreferrer" class="button button-primary contact-map-button">
            Voir l’itinéraire <i class="pi pi-directions" />
          </a>

          <div class="contact-social-list">
            <a href="https://web.facebook.com/benihkalala?locale=fr_FR" target="_blank" rel="noopener noreferrer" class="contact-social-link">
              <i class="pi pi-facebook" />
              <span><strong>Facebook</strong><small>Suivre les nouvelles de la communauté</small></span>
              <i class="pi pi-arrow-up-right" />
            </a>
            <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer" class="contact-social-link">
              <i class="pi pi-youtube" />
              <span><strong>YouTube</strong><small>Retrouver les prédications et enseignements</small></span>
              <i class="pi pi-arrow-up-right" />
            </a>
          </div>
        </div>

        <aside class="contact-panel">
          <span class="eyebrow">NOUS VOUS ÉCOUTONS</span>
          <h3>Votre message compte.</h3>
          <p>Vous souhaitez demander une prière, poser une question ou organiser une rencontre ? Appelez-nous ou écrivez-nous.</p>
          <div class="contact-panel-item"><span>Appel téléphonique</span><a href="tel:0812356892">081 235 68 92</a></div>
          <div class="contact-panel-item"><span>Courrier électronique</span><a :href="`mailto:${email}`">{{ email }}</a></div>
          <div class="contact-panel-item"><span>Prédications</span><strong>Chaîne YouTube</strong></div>
          <div class="contact-panel-item"><span>Informations</span><strong>Page Facebook</strong></div>
          <a href="tel:0812356892" class="button button-primary"><i class="pi pi-phone" /> Nous appeler</a>
          <a :href="`mailto:${email}`" class="button button-outline"><i class="pi pi-envelope" /> Nous écrire</a>
          <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer" class="button button-outline">
            Voir les prédications <i class="pi pi-youtube" />
          </a>
        </aside>
      </div>
    </section>
  </div>
</template>
