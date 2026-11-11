import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const Gagneurs = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#edf4f8', 100: '#d9e7f0', 200: '#b7d0e1', 300: '#8db2cd',
      400: '#6394b8', 500: '#3976A8', 600: '#2d638f', 700: '#244f73',
      800: '#1b405e', 900: '#183B56', 950: '#10283a',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#183B56',
          inverseColor: '#ffffff',
          hoverColor: '#244f73',
          activeColor: '#10283a',
        },
        highlight: {
          background: '#fcebea',
          focusBackground: '#f8d8d5',
          color: '#a52e2a',
          focusColor: '#7f2421',
        },
      },
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ['primeicons/primeicons.css', '~/assets/css/main.css'],
  modules: ['@primevue/nuxt-module', '@nuxtjs/google-fonts'],
  primevue: {
    options: {
      theme: {
        preset: Gagneurs,
        options: { darkModeSelector: '.app-dark' },
      },
      ripple: true,
    },
  },
  googleFonts: {
    families: {
      Urbanist: [400, 500, 600, 700, 800],
      'Nunito Sans': [400, 500, 600, 700, 800],
    },
    display: 'swap',
    download: false,
  },
  runtimeConfig: {
    wordpressUrl: '',
    public: {
      siteUrl: 'http://localhost:3000',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Communauté les Gagneurs d’Âmes',
      meta: [
        { name: 'description', content: 'Communauté les Gagneurs d’Âmes : foi, communion, croissance et service.' },
        { name: 'theme-color', content: '#183B56' },
        { property: 'og:site_name', content: 'Communauté les Gagneurs d’Âmes' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
