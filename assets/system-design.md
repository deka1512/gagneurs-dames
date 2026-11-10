# System Design — Communauté les Gagneurs d’Âmes

> Document de référence du frontend. Il décrit l'architecture réellement présente et les décisions de conception à respecter. Il ne prétend pas décrire un backend ou des intégrations qui ne sont pas encore implémentés.

- **Produit :** site institutionnel de la Communauté les Gagneurs d’Âmes
- **Langue de lancement :** français
- **Framework :** Nuxt 4 / Vue 3 / TypeScript
- **Rendu :** SSR activé
- **CMS cible :** WordPress Headless REST API
- **Statut :** socle frontend, contenus et coordonnées de démonstration

## 1. Objectifs du produit

1. Accueillir clairement les visiteurs et leur permettre de découvrir la communauté.
2. Expliquer la vision, les valeurs et la mission sans inventer de faits institutionnels.
3. Donner accès aux actualités, prédications et informations pratiques.
4. Faciliter une prise de contact ou une demande de rendez-vous.
5. Permettre à une équipe non technique de gérer les publications à travers WordPress à terme.

### Hors périmètre actuel

- Authentification ou espace membre.
- Dons et paiements en ligne.
- Réservation de places ou gestion d'événements.
- Envoi effectif du formulaire de rendez-vous.
- Gestion de contenus WordPress distincts par type.
- Multilingue.

## 2. Architecture applicative

```text
Navigateur
   |
   v
Nuxt 4 (SSR)
   |-- app/layouts/default.vue
   |     |-- AppHeader
   |     |-- NuxtPage
   |     |-- AppFooter
   |
   |-- app/pages/
   |     |-- index.vue
   |     |-- eglise.vue
   |     |-- actualites/
   |     |-- predications/
   |     |-- contact.vue
   |     |-- rendez-vous.vue
   |
   |-- app/components/
   |-- app/composables/useWordPress.ts
   |-- app/assets/css/main.css
   |
   v
WordPress REST API (optionnel, serveur)
   `-- /wp-json/wp/v2/posts
```

### Principes

- Nuxt est responsable du rendu, des routes, du SEO et de l'expérience utilisateur.
- Les appels WordPress sont centralisés dans `useWordPress`, pas dispersés dans les composants.
- L'URL du CMS est une configuration privée serveur : `runtimeConfig.wordpressUrl`.
- L'URL publique du site est exposée via `runtimeConfig.public.siteUrl`.
- Les pages doivent rester lisibles en l'absence de WordPress, grâce aux contenus de démonstration des listes.
- Aucun secret, jeton privé ou identifiant sensible ne doit être placé dans le bundle client.

## 3. Structure du dépôt

| Chemin | Responsabilité |
| --- | --- |
| `nuxt.config.ts` | Modules, thème PrimeVue, polices, SEO global et runtime config |
| `app/app.vue` | Point d'entrée Nuxt |
| `app/layouts/default.vue` | Structure commune header / contenu / footer |
| `app/components/AppHeader.vue` | Navigation desktop et mobile |
| `app/components/AppFooter.vue` | Coordonnées, liens et horaires |
| `app/components/SectionHeading.vue` | Titre éditorial réutilisable |
| `app/composables/useWordPress.ts` | Client REST WordPress |
| `app/pages/` | Pages et routes dynamiques |
| `app/assets/css/main.css` | Design tokens, styles globaux et responsive |
| `assets/system-design.md` | Ce document |

## 4. Design system

### 4.1 Direction artistique

Une identité chaleureuse, éditoriale, contemporaine et institutionnelle. Le site doit évoquer l'accueil, la confiance, la foi et la communauté, sans tomber dans une esthétique d'application SaaS ni dans une accumulation d'effets décoratifs.

### 4.2 Palette

| Token | Valeur | Usage |
| --- | --- | --- |
| Navy | `#183B56` | Couleur principale, titres et fonds institutionnels |
| Navy deep | `#102B40` | Footer, sections foncées |
| Blue | `#3976A8` | Liens, icônes, accents secondaires |
| Coral | `#D7443E` | CTA, détails et accent chaleureux |
| Coral soft | `#F28B83` | Accent sur fonds foncés |
| Canvas | `#FFFFFF` | Fond principal |
| Surface | `#F4F7F9` | Sections alternées et panneaux |
| Text | `#243746` | Texte principal |
| Muted | `#647786` | Texte secondaire et métadonnées |
| Border | `#E1E8ED` | Séparateurs et bordures |

### 4.3 Typographie

- **Urbanist :** titres, grands messages, chiffres et identité de marque.
- **Nunito Sans :** paragraphes, navigation, formulaires et informations fonctionnelles.
- Titres responsives avec `clamp()`, interlignage serré pour les titres et confortable pour les paragraphes.
- Les paragraphes doivent rester dans une largeur de lecture d'environ 65 à 75 caractères.

### 4.4 Espacement et formes

- Conteneur principal centré, largeur maximale cible : 1 180 px.
- Sections : environ 88 à 112 px verticalement sur desktop ; 58 à 72 px sur mobile.
- Cartes : rayon modéré (12 à 18 px), bordures discrètes, ombres très légères.
- Boutons : hauteur confortable, libellés explicites, focus clavier visible.
- Éviter les dégradés et ombres décoratifs systématiques.

### 4.5 Responsive

- Desktop : navigation horizontale, grilles 2–3 colonnes.
- Tablette : grilles réduites, navigation adaptée à l'espace disponible.
- Mobile : navigation repliée, colonnes empilées, boutons pleine largeur lorsque nécessaire.
- Les informations importantes ne doivent jamais être accessibles uniquement au survol.

## 5. Composants et conventions

- Préférer les composants Vue partagés pour les éléments répétés.
- Utiliser `NuxtLink` pour la navigation interne et des liens HTML pour les ressources externes.
- Chaque page définit son titre et sa description avec `useSeoMeta`.
- Les boutons doivent avoir un libellé compréhensible et un état focus visible.
- Les icônes PrimeIcons sont décoratives si le texte voisin porte déjà le sens ; sinon, ajouter un libellé accessible.
- Les formulaires utilisent des labels explicites, des champs requis correctement marqués et des retours d'état annoncés.
- Éviter les composants monolithiques et les templates compressés sur une seule ligne.

## 6. Pages et parcours

| Route | Intention visiteur | Contenu principal |
| --- | --- | --- |
| `/` | Comprendre et être accueilli | Hero, présentation, actualités, rencontres, invitation |
| `/eglise` | Découvrir l'identité | Présentation, vision, valeurs, mission |
| `/predications` | Écouter / lire | Liste d'enseignements |
| `/predications/:slug` | Consulter un message | Article WordPress |
| `/actualites` | Suivre la communauté | Liste d'actualités |
| `/actualites/:slug` | Lire une actualité | Article WordPress |
| `/contact` | Trouver les coordonnées | Adresse, canaux, horaires |
| `/rendez-vous` | Faire une demande | Formulaire de démonstration |

## 7. Modèle éditorial et WordPress

### État actuel

Le composable lit le type WordPress standard `posts` via `/wp-json/wp/v2/posts`, avec `_embed=1`. Les pages de liste affichent des textes de démonstration si le CMS n'est pas configuré ou ne renvoie aucun article.

### Évolution recommandée

Créer dans WordPress deux types éditoriaux distincts, ou au minimum deux catégories identifiables :

- **Actualité :** titre, slug, date, résumé, contenu, image mise en avant, catégorie.
- **Prédication :** titre, orateur, date, référence biblique, résumé, contenu, audio/vidéo, image.

Le frontend devra filtrer les résultats de façon explicite. Ne pas afficher le même flux de publications comme actualités et prédications dans la version de production.

### Règles éditoriales

- Ne jamais inventer le nom d'un pasteur, une date de fondation, un témoignage ou une adresse officielle.
- Les contenus fictifs doivent être clairement identifiés en interne et remplacés avant publication.
- Les citations bibliques doivent mentionner leur traduction lorsque le texte est reproduit.
- Les images de personnes et de rassemblements nécessitent une autorisation de publication appropriée.

## 8. Configuration et sécurité

Variables attendues :

```env
NUXT_WORDPRESS_URL=https://cms.votre-domaine.cd
NUXT_PUBLIC_SITE_URL=https://www.votre-domaine.cd
```

- `NUXT_WORDPRESS_URL` reste côté serveur.
- `NUXT_PUBLIC_SITE_URL` peut être exposée au client.
- Ne pas committer le fichier `.env`.
- Ne pas utiliser `process.env` dans la configuration Nuxt ; utiliser les valeurs par défaut de `runtimeConfig` et les variables préfixées `NUXT_`.
- Le formulaire actuel est une démonstration : aucune donnée n'est transmise. Avant activation, ajouter validation serveur, limitation de débit, protection anti-spam, consentement et politique de conservation.

## 9. Qualité et livraison

Avant une livraison :

```bash
npm install
npm run typecheck
npm run build
```

Contrôles manuels :
- navigation desktop et mobile ;
- liens internes et pages 404 ;
- affichage sans WordPress et avec WordPress ;
- formulaires et messages d'état ;
- lisibilité sur mobile ;
- métadonnées SEO ;
- absence de coordonnées fictives dans la version publique.

## 10. Décisions ouvertes

1. Coordonnées, horaires et localisation exacts de la communauté.
2. Texte officiel de vision, mission, histoire et valeurs.
3. Identité des responsables et validation des textes.
4. Organisation des contenus et médias dans WordPress.
5. Canal de réception des demandes de rendez-vous.
6. Domaine final, hébergement et politique de confidentialité.
