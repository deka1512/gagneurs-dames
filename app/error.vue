<script setup lang="ts">
interface AppError {
  statusCode?: number
  statusMessage?: string
  message?: string
}

defineProps<{ error: AppError }>()
</script>

<template>
  <main class="error-page">
    <span class="eyebrow">OUPS, UNE ERREUR EST SURVENUE</span>
    <h1>{{ error.statusCode || 500 }}</h1>
    <h2>{{ error.statusMessage || 'Une erreur est survenue.' }}</h2>
    <p>La page demandée n’est peut-être plus disponible. Vous pouvez revenir à l’accueil.</p>
    <NuxtLink to="/" class="button button-primary">Retour à l’accueil</NuxtLink>
  </main>
</template>
