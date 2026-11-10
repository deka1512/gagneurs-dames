<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Gagneurs d’Âmes',
  description: 'Contactez la Communauté les Gagneurs d’Âmes à Kinshasa ou planifiez une rencontre.',
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow eyebrow-light">RESTONS EN CONTACT</span>
        <h1>Nous serions heureux<br><em>de vous rencontrer.</em></h1>
        <p>Une question, une prière ou simplement envie de découvrir notre communauté ? Notre équipe sera heureuse de vous écouter.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div>
          <span class="eyebrow">PRENONS CONTACT</span>
          <h2>Nous sommes à votre écoute.</h2>
          <p>Vous pouvez nous écrire, nous appeler ou organiser une première visite. Les coordonnées ci-dessous sont des exemples de démonstration.</p>

          <div class="contact-detail">
            <i class="pi pi-map-marker" />
            <div><strong>Adresse</strong><span>Commune de Limete, Kinshasa<br>République démocratique du Congo</span></div>
          </div>
          <div class="contact-detail">
            <i class="pi pi-phone" />
            <div><strong>Téléphone</strong><a href="tel:+243000000000">+243 000 000 000</a></div>
          </div>
          <div class="contact-detail">
            <i class="pi pi-envelope" />
            <div><strong>E-mail</strong><a href="mailto:contact@gagneursdames.example">contact@gagneursdames.example</a></div>
          </div>
          <div class="editorial-note"><i class="pi pi-info-circle" /> Adresse, numéro et e-mail fictifs : à remplacer par les coordonnées officielles.</div>
        </div>

        <aside class="contact-panel">
          <span class="eyebrow">HORAIRES INDICATIFS</span>
          <h3>Nos rencontres</h3>
          <div class="contact-hours"><span>Dimanche · Culte</span><strong>09h00 – 11h00</strong></div>
          <div class="contact-hours"><span>Mercredi · Étude biblique</span><strong>17h30 – 19h00</strong></div>
          <div class="contact-hours"><span>Vendredi · Prière</span><strong>17h30 – 19h00</strong></div>
          <p>Pour une première visite ou un entretien, contactez-nous afin que nous puissions vous orienter.</p>
          <NuxtLink to="/rendez-vous" class="button button-primary">Demander un rendez-vous <i class="pi pi-arrow-up-right" /></NuxtLink>
        </aside>
      </div>
    </section>
  </div>
</template>
