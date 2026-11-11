# Communauté les Gagneurs d’Âmes

Site web institutionnel de la Communauté les Gagneurs d’Âmes, construit avec **Nuxt 4**, **Vue 3** et **TypeScript**. Le projet présente la communauté, ses activités, ses enseignements et ses moyens de contact. WordPress est prévu comme CMS headless pour administrer les publications.

> **État du projet :** socle frontend et contenus de démonstration. Les coordonnées, horaires, récits institutionnels et publications d'exemple ne sont pas des informations officielles. Ils doivent être confirmés ou remplacés avant la mise en ligne publique.

## Stack technique

| Couche | Technologie |
| --- | --- |
| Framework | Nuxt 4 (SSR) |
| Interface | Vue 3 + TypeScript strict |
| UI | PrimeVue 4, thème Aura personnalisé |
| Icônes | PrimeIcons |
| Typographies | Urbanist (titres), Nunito Sans (interface et lecture) |
| CMS prévu | WordPress Headless REST API |
| Styles | CSS centralisé dans `app/assets/css/main.css` |
| Qualité | `nuxt typecheck`, build Nuxt |

## Démarrage local

Prérequis : Node.js 20.19+ (Node.js 22 LTS recommandé) et npm.

```bash
git clone https://github.com/deka1512/gagneurs-dames.git
cd gagneurs-dames
npm install
cp .env.example .env
npm run dev
```

Sous Windows PowerShell, si `cp` n'est pas disponible :

```powershell
Copy-Item .env.example .env
```

Le site est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

| Variable | Portée | Description |
| --- | --- | --- |
| `NUXT_WORDPRESS_URL` | Serveur uniquement | URL racine du WordPress headless, sans chemin REST |
| `NUXT_PUBLIC_SITE_URL` | Publique | URL canonique du site Nuxt |

Exemple :

```env
NUXT_WORDPRESS_URL=https://cms.votre-domaine.cd
NUXT_PUBLIC_SITE_URL=https://www.votre-domaine.cd
```

Nuxt mappe automatiquement ces variables vers `runtimeConfig.wordpressUrl` et `runtimeConfig.public.siteUrl`. Ne placez jamais de secret dans une variable préfixée par `NUXT_PUBLIC_`.

## Commandes utiles

```bash
npm run dev        # serveur de développement
npm run typecheck  # vérification TypeScript / Vue
npm run build      # compilation de production
npm run preview    # aperçu du build (si le script est ajouté)
```

## Pages disponibles

| URL | Rôle |
| --- | --- |
| `/` | Accueil, présentation, actualités et horaires |
| `/eglise` | Présentation, vision, valeurs et mission |
| `/predications` | Liste des enseignements |
| `/predications/:slug` | Détail d'un enseignement WordPress |
| `/actualites` | Actualités de la communauté |
| `/actualites/:slug` | Détail d'une actualité WordPress |
| `/contact` | Coordonnées et horaires indicatifs |
| `/rendez-vous` | Formulaire de demande de rendez-vous (démo) |

## Organisation du code

```text
.
├── app/
│   ├── assets/css/main.css       # tokens, styles globaux et responsive
│   ├── components/               # header, footer, titres de section
│   ├── composables/useWordPress.ts
│   ├── layouts/default.vue       # shell commun du site
│   └── pages/                    # routes Nuxt
├── assets/
│   └── system-design.md          # architecture et règles UI
├── public/
│   └── favicon.svg
├── .env.example
├── nuxt.config.ts
└── package.json
```

## WordPress Headless

Le composable `app/composables/useWordPress.ts` centralise actuellement la lecture des articles via `/wp-json/wp/v2/posts` :

- `getPosts(params)` récupère une collection paginée ;
- `getPost(slug)` récupère un article par slug ;
- `available` indique si une URL CMS est configurée.

Sans URL WordPress, les pages de liste affichent des contenus éditoriaux de démonstration. Avec WordPress configuré, les articles REST prennent le relais. **La séparation éditoriale entre actualités et prédications reste à finaliser** : prévoir des catégories dédiées ou des types de contenus WordPress distincts avant la production. Les routes de détail attendent un article existant dans WordPress.

## Principes de conception

- Présentation claire, chaleureuse et digne d'un site institutionnel.
- Navigation courte et identique sur toutes les pages.
- Hiérarchie typographique forte, espaces généreux et lecture confortable.
- Bleu profond pour la confiance, bleu moyen pour les liens et corail pour les actions.
- Responsive desktop, tablette et mobile ; navigation mobile accessible.
- Les contenus non confirmés sont explicitement identifiés comme exemples.
- Les composants partagés sont préférés à la duplication de styles et de navigation.

Voir [assets/system-design.md](assets/system-design.md) pour les décisions d'architecture, les tokens, les composants et les règles de contribution.

## Avant la mise en production

- [ ] Confirmer le nom institutionnel, la vision, l'histoire et les responsables.
- [ ] Remplacer l'adresse, le téléphone, l'e-mail et les horaires fictifs.
- [ ] Remplacer les liens sociaux génériques par les comptes officiels.
- [ ] Ajouter des photographies autorisées et optimisées.
- [ ] Connecter le formulaire à un endpoint sécurisé (validation serveur, anti-spam et consentement).
- [ ] Structurer les contenus WordPress (actualités, prédications, médias, catégories).
- [ ] Définir les domaines, CORS si nécessaire, sauvegardes et stratégie de publication.
- [ ] Vérifier les métadonnées SEO, favicon, partage social et pages d'erreur.
- [ ] Exécuter `npm run typecheck` et `npm run build` avant chaque livraison.

## Licence et contenus

Le code de ce dépôt est un socle de projet. Les textes de démonstration, horaires et coordonnées sont provisoires ; les images externes éventuelles restent soumises à leurs licences et conditions d'utilisation.
