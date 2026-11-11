<script setup lang="ts">
const route = useRoute()
const opened = ref(false)

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Notre église', to: '/eglise' },
  { label: 'Prédications', to: '/predications' },
  { label: 'Articles', to: '/articles' },
  { label: 'Contact', to: '/contact' },
]

const isActive = (path: string) =>
  path === '/' ? route.path === '/' : route.path.startsWith(path)

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') opened.value = false
}

watch(() => route.fullPath, () => {
  opened.value = false
})

onMounted(() => window.addEventListener('keydown', closeOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <header class="site-header">
    <div class="header-topbar">
      <div class="container topbar-inner">
        <span><i class="pi pi-map-marker" /> Avenue Kisangani n°31 Bis · Bandalungwa, Kinshasa</span>
        <div class="topbar-details">
          <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer"><i class="pi pi-youtube" /> Prédications</a>
          <a href="https://web.facebook.com/benihkalala?locale=fr_FR" target="_blank" rel="noopener noreferrer"><i class="pi pi-facebook" /> Facebook</a>
        </div>
      </div>
    </div>

    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="Gagneurs d’Âmes, accueil">
        <img class="brand-logo" src="/logo.jpg" alt="Logo Gagneurs d’Âmes">
        <span class="brand-copy">
          <strong>GAGNEURS D’ÂMES</strong>
          <small>COMMUNAUTÉ · FOI · MISSION</small>
        </span>
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Navigation principale">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: isActive(link.to) }">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/rendez-vous" class="button button-primary header-cta">
        Parlons ensemble <i class="pi pi-arrow-up-right" />
      </NuxtLink>

      <button
        class="mobile-toggle"
        type="button"
        :aria-label="opened ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="opened"
        aria-controls="mobile-navigation"
        @click="opened = !opened"
      >
        <i :class="opened ? 'pi pi-times' : 'pi pi-bars'" />
      </button>
    </div>

    <Transition name="menu">
      <nav v-if="opened" id="mobile-navigation" class="mobile-nav container" aria-label="Navigation mobile">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: isActive(link.to) }">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/rendez-vous" class="button button-primary">
          Prendre rendez-vous <i class="pi pi-arrow-up-right" />
        </NuxtLink>
        <div class="mobile-nav-info">
          <span><i class="pi pi-map-marker" /> Kinshasa · Bandalungwa</span>
          <a href="https://www.youtube.com/@BeniHamuli" target="_blank" rel="noopener noreferrer"><i class="pi pi-youtube" /> Chaîne YouTube</a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
