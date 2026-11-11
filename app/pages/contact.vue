<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Gagneurs d’Âmes',
  description: 'Retrouvez la Communauté les Gagneurs d’Âmes à Bandalungwa, Kinshasa, et suivez ses prédications en ligne.'
})

const address = 'Avenue Kisangani, n° 31 Bis, quartier Makelele, commune de Bandalungwa, référence Virage Assolongo, Kinshasa, République démocratique du Congo'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Avenue%20Kisangani%20n%C2%B031%20Bis%2C%20Makelele%2C%20Bandalungwa%2C%20Kinshasa%2C%20RDC'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow eyebrow-light">RESTONS EN CONTACT</span>
        <h1>Nous serions heureux<br><em>de vous rencontrer.</em></h1>
        <p>Vous souhaitez nous rendre visite, découvrir notre communauté ou suivre nos enseignements ? Retrouvez ici nos coordonnées et nos espaces en ligne.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div>
          <span class="eyebrow">NOTRE ADRESSE</span>
          <h2>Retrouvons-nous à Bandalungwa.</h2>
          <p>La Communauté les Gagneurs d’Âmes vous accueille à Kinshasa. Utilisez l’itinéraire pour retrouver notre lieu de rassemblement.</p>

          <div class="contact-detail">
            <i class="pi pi-map-marker" />
            <div><strong>Adresse</strong><span>{{ address }}</span></div>
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
          <span class="eyebrow">EN LIGNE</span>
          <h3>Restons connectés.</h3>
          <p>Les enseignements et les publications permettent de garder le lien avec la communauté, même à distance.</p>
          <div class="contact-hours"><span>Prédications</span><strong>Chaîne YouTube</strong></div>
          <div class="contact-hours"><span>Informations</span><strong>Page Facebook</strong></div>
          <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer" class="button button-primary">
            Voir les prédications <i class="pi pi-youtube" />
          </a>
        </aside>
      </div>
    </section>
  </div>
</template>
