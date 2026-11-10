<script setup lang="ts">
const year = new Date().getFullYear()

const exploreLinks = [
  { label: 'Notre histoire', to: '/eglise' },
  { label: 'Prédications', to: '/predications' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Prendre rendez-vous', to: '/rendez-vous' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <div class="footer-about">
          <NuxtLink to="/" class="brand brand-light">
            <span class="brand-mark"><i class="pi pi-sun" /></span>
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
            <span class="social-label">RESTONS CONNECTÉS</span>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i class="pi pi-facebook" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><i class="pi pi-youtube" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i class="pi pi-instagram" /></a>
          </div>
        </div>

        <div class="footer-column">
          <h2>Découvrir</h2>
          <NuxtLink v-for="link in exploreLinks" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
          <NuxtLink to="/contact">Nous contacter</NuxtLink>
        </div>

        <div class="footer-column footer-contact">
          <h2>Nous rencontrer</h2>
          <p><i class="pi pi-map-marker" /><span>Commune de Limete, Kinshasa<br>République démocratique du Congo</span></p>
          <a href="tel:+243000000000"><i class="pi pi-phone" /><span>+243 000 000 000</span></a>
          <a href="mailto:contact@gagneursdames.example"><i class="pi pi-envelope" /><span>contact@gagneursdames.example</span></a>
        </div>

        <div class="footer-column footer-schedule">
          <h2>Nos rencontres</h2>
          <div class="schedule-row"><span>Culte dominical</span><strong>09h00 – 11h00</strong></div>
          <div class="schedule-row"><span>Étude biblique</span><strong>Mer. · 17h30</strong></div>
          <div class="schedule-row"><span>Réunion de prière</span><strong>Ven. · 17h30</strong></div>
          <NuxtLink to="/rendez-vous" class="footer-appointment">Planifier une rencontre <i class="pi pi-arrow-up-right" /></NuxtLink>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} Communauté les Gagneurs d’Âmes. Tous droits réservés.</p>
      <p class="footer-disclaimer">Coordonnées et horaires de démonstration · À confirmer avant publication.</p>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </footer>
</template>
