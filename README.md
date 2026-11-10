# Gagneurs d’Âmes

Site de la Communauté les Gagneurs d’Âmes.

## Stack
- Nuxt 4, Vue 3, TypeScript
- PrimeVue 4, thème Aura personnalisé
- WordPress Headless via REST API
- Urbanist (titres), Nunito Sans (textes)
- Palette : #183B56, #3976A8, #D7443E, #F1F4F6
- Icônes PrimeIcons

## Démarrage
```bash
npm install
cp .env.example .env
npm run dev
```
Définir `NUXT_WORDPRESS_URL` avec l’URL du WordPress headless. Les actualités et prédications utilisent l’API `/wp-json/wp/v2/posts`.

## Pages
Accueil, Église, Prédications, Actualités, Contact et Rendez-vous. Les pages détail des prédications et actualités utilisent des routes dynamiques.

## À finaliser avant mise en production
- Confirmer adresse, téléphones, e-mail, horaires, vision et présentation institutionnelle.
- Remplacer les visuels de démonstration par des photographies autorisées.
- Configurer l’envoi réel du formulaire de rendez-vous.
- Définir les catégories WordPress pour distinguer prédications et actualités.
- Vérifier CORS, SEO et domaine WordPress de production.

Les textes et coordonnées non confirmés sont volontairement provisoires.
