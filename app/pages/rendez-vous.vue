<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Button from 'primevue/button'

const sent = ref(false)
const form = reactive({
  name: '',
  phone: '',
  email: '',
  reason: 'Entretien pastoral',
  date: '',
  message: ''
})

const reasons = [
  'Entretien pastoral',
  'Accompagnement spirituel',
  'Demande de prière',
  'Demande d’information',
  'Autre'
].map(label => ({ label, value: label }))

useSeoMeta({
  title: 'Parlons ensemble | Communauté les Gagneurs d’Âmes',
  description: 'Prenez contact avec la Communauté les Gagneurs d’Âmes pour un temps de prière, un entretien pastoral ou une demande d’information.'
})
</script>

<template>
  <div class="appointment-page">
    <section class="page-hero page-hero-appointment appointment-hero">
      <img class="page-hero-photo" src="/couple%20pastoral.jpg" alt="" aria-hidden="true" fetchpriority="high">
      <div class="container appointment-hero-content">
        <span class="eyebrow eyebrow-light">NOUS SOMMES À VOTRE ÉCOUTE</span>
        <h1>Parlons ensemble.<br><em>Vous n’êtes pas seul.</em></h1>
        <p>Un besoin de prière, une question sur la foi ou simplement l’envie de faire connaissance ? Prenons le temps d’échanger.</p>
        <a class="button button-light" href="#appointment-form">Préparer ma demande <i class="pi pi-arrow-down" /></a>
      </div>
    </section>

    <section class="section appointment-intro-section">
      <div class="container appointment-intro-grid">
        <div class="appointment-intro-copy">
          <span class="eyebrow">UN PREMIER PAS, EN TOUTE SIMPLICITÉ</span>
          <h2>Nous prendrons le temps de vous écouter.</h2>
          <p>La vie apporte parfois des questions, des joies, des épreuves ou des décisions importantes. Notre communauté souhaite être un lieu d’écoute, de prière et d’encouragement, dans le respect de votre histoire.</p>
          <p>Présentez-nous brièvement votre besoin. Vous pourrez préciser le motif de votre demande et le moment qui vous conviendrait.</p>
          <div class="appointment-assurances">
            <div><i class="pi pi-heart" /><span><strong>Une écoute bienveillante</strong><small>Votre démarche est accueillie avec respect.</small></span></div>
            <div><i class="pi pi-heart" /><span><strong>Un temps de prière</strong><small>Partagez une intention ou un sujet de prière.</small></span></div>
            <div><i class="pi pi-calendar" /><span><strong>Une rencontre à organiser</strong><small>La date sera confirmée avec vous.</small></span></div>
          </div>
        </div>

        <aside class="appointment-help-card">
          <span class="eyebrow">VOUS PRÉFÉREZ UN CONTACT DIRECT ?</span>
          <h3>Nous sommes également joignables par téléphone et par e-mail.</h3>
          <p>Vous pouvez nous appeler ou nous écrire si vous souhaitez d’abord poser une question.</p>
          <a href="tel:0812356892"><i class="pi pi-phone" /><span><small>Téléphone</small><strong>081 235 68 92</strong></span></a>
          <a href="mailto:contact@cga.com"><i class="pi pi-envelope" /><span><small>E-mail</small><strong>contact@cga.com</strong></span></a>
          <NuxtLink to="/contact" class="text-link">Voir toutes nos coordonnées <i class="pi pi-arrow-up-right" /></NuxtLink>
        </aside>
      </div>
    </section>

    <section id="appointment-form" class="section appointment-form-section">
      <div class="container appointment-layout">
        <div class="appointment-form-heading">
          <span class="eyebrow">VOTRE DEMANDE</span>
          <h2>Comment pouvons-nous vous accompagner ?</h2>
          <p>Remplissez les champs ci-dessous. Les informations indiquées nous aideront à comprendre votre demande et à préparer un échange adapté.</p>
          <div class="appointment-privacy"><i class="pi pi-lock" /><span>Ne partagez que les informations nécessaires à votre prise de contact.</span></div>
        </div>

        <form class="appointment-form" @submit.prevent="sent = true">
          <div v-if="sent" class="form-success" role="status">
            <i class="pi pi-check-circle" />
            <span>Votre formulaire a été validé dans cette démonstration. Pour le moment, aucun message n’est transmis automatiquement. Vous pouvez nous écrire directement à <a href="mailto:contact@cga.com">contact@cga.com</a>.</span>
          </div>
          <div class="field">
            <label for="name">Nom complet *</label>
            <InputText id="name" v-model="form.name" required autocomplete="name" placeholder="Votre nom et prénom" />
          </div>
          <div class="field-row">
            <div class="field">
              <label for="phone">Téléphone *</label>
              <InputText id="phone" v-model="form.phone" required autocomplete="tel" placeholder="+243..." />
            </div>
            <div class="field">
              <label for="email">Adresse e-mail</label>
              <InputText id="email" v-model="form.email" type="email" autocomplete="email" placeholder="vous@exemple.com" />
            </div>
          </div>
          <div class="field">
            <label for="reason">Quel est le motif de votre demande ?</label>
            <Select id="reason" v-model="form.reason" :options="reasons" option-label="label" option-value="value" class="w-full" />
          </div>
          <div class="field">
            <label for="date">Quand seriez-vous disponible ?</label>
            <InputText id="date" v-model="form.date" type="date" />
          </div>
          <div class="field">
            <label for="message">Votre message</label>
            <Textarea id="message" v-model="form.message" rows="5" auto-resize placeholder="Quelques mots pour nous expliquer votre besoin..." />
          </div>
          <Button type="submit" label="Valider ma demande" icon="pi pi-arrow-right" icon-pos="right" class="submit-button" :disabled="sent" />
          <small class="form-hint">* Champs obligatoires. La date souhaitée reste à confirmer avec notre équipe.</small>
        </form>
      </div>
    </section>
  </div>
</template>
