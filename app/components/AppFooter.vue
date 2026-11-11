<script setup lang="ts">
const year = new Date().getFullYear()

const exploreLinks = [
  { label: 'Notre église', to: '/eglise' },
  { label: 'Prédications', to: '/predications' },
  { label: 'Articles', to: '/articles' },
  { label: 'Prendre rendez-vous', to: '/rendez-vous' },
]

const address = 'Avenue Kisangani, n° 31 Bis, quartier Makelele, commune de Bandalungwa, référence Virage Assolongo, Kinshasa, République démocratique du Congo'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Avenue%20Kisangani%20n%C2%B031%20Bis%2C%20Makelele%2C%20Bandalungwa%2C%20Kinshasa%2C%20RDC'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <div class="footer-about">
          <NuxtLink to="/" class="brand brand-light">
            <img class="brand-logo" src="/logo.jpg" alt="">
            <span class="brand-copy">
              <strong>GAGNEURS D’ÂMES</strong>
              <small>COMMUNAUTÉ · FOI · MISSION</small>
            </span>
          </NuxtLink>
          <p>
            Une communauté où chacun peut découvrir l’amour de Dieu, grandir dans la foi,
            tisser des liens fraternels et trouver sa place dans le service.
          </p>
          <div class="footer-socials" aria-label="Réseaux sociaux">
            <span class="social-label">SUIVEZ LA COMMUNAUTÉ</span>
            <a href="https://web.facebook.com/benihkalala?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="pi pi-facebook" /></a>
            <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="pi pi-youtube" /></a>
          </div>
        </div>

        <div class="footer-column">
          <h2>Explorer</h2>
          <NuxtLink v-for="link in exploreLinks" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
          <NuxtLink to="/contact">Nous contacter</NuxtLink>
        </div>

        <div class="footer-column footer-contact">
          <h2>Nous trouver</h2>
          <p><i class="pi pi-map-marker" /><span>{{ address }}</span></p>
          <a :href="mapUrl" target="_blank" rel="noopener noreferrer"><i class="pi pi-directions" /><span>Ouvrir l’itinéraire</span></a>
          <a href="https://web.facebook.com/benihkalala?locale=fr_FR" target="_blank" rel="noopener noreferrer"><i class="pi pi-facebook" /><span>Notre page Facebook</span></a>
          <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer"><i class="pi pi-youtube" /><span>Nos prédications sur YouTube</span></a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} Communauté les Gagneurs d’Âmes. Tous droits réservés.</p>
      <a href="https://bydeka.net" target="_blank" rel="noopener noreferrer" class="footer-credit">Made by <strong>Bydeka</strong></a>
    </div>
  </footer>
</template>
