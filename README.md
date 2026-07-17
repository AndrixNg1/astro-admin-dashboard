# Tableau de bord e-commerce avec Astro

Un back-office e-commerce moderne, responsive et réutilisable, construit avec Astro et TypeScript. Il offre aux équipes commerciales une vue claire de l'activité de leur boutique : chiffre d'affaires, conversions, sources de trafic, clients, commandes et catalogue.

> [!NOTE]
> Le projet est en cours de développement. Le socle e-commerce, les composants d'interface et les principales vues métier sont disponibles. Les actions d'administration et la connexion à un backend seront intégrées progressivement.

## Objectif du projet

Ce tableau de bord a vocation à centraliser le pilotage quotidien d'une boutique en ligne. À terme, un administrateur pourra notamment :

- suivre le chiffre d'affaires et son évolution ;
- analyser le trafic et le taux de conversion ;
- consulter et traiter les commandes ;
- gérer les produits, les catégories et les stocks ;
- retrouver les clients et leur historique d'achat ;
- surveiller les alertes importantes de la boutique.

Les données sont actuellement simulées avec des fichiers TypeScript locaux. Cette organisation permet de développer l'interface indépendamment avant de la connecter à une API, un CMS ou une plateforme e-commerce.

## Fonctionnalités actuelles

- vue d'ensemble avec indicateurs clés ;
- graphiques interactifs des revenus, du trafic et des conversions ;
- navigation latérale responsive ;
- thème clair et sombre ;
- tableaux de données réutilisables ;
- vues pour les produits, les commandes, les clients, les notifications et les paramètres ;
- composants d'interface typés et réutilisables ;
- rendu rapide grâce à Astro et aux îlots React ciblés.

## Feuille de route e-commerce

- ajouter la création et la modification des produits, variantes et catégories ;
- rendre interactif le traitement des commandes, paiements et expéditions ;
- enrichir les fiches clients avec leur historique d'achat détaillé ;
- ajouter les produits les plus vendus, le panier moyen et les abandons de panier ;
- proposer des filtres par période, canal de vente et statut ;
- connecter le tableau de bord à une véritable source de données ;
- gérer les états de chargement, d'erreur et d'absence de données.

## Pages

| Route | État | Description |
| --- | --- | --- |
| `/` | Disponible | Vue d'ensemble des performances de la boutique |
| `/analytics` | Disponible | Ventes, acquisition et taux de conversion |
| `/notifications` | Disponible | Alertes et événements importants |
| `/products` | Disponible | Catalogue, prix et niveaux de stock |
| `/orders` | Disponible | Commandes, paiements et statuts de livraison |
| `/customers` | Disponible | Clients, commandes et montants dépensés |
| `/settings` | Disponible | Préférences générales du tableau de bord |

## Technologies

- [Astro](https://astro.build/) — structure, routage et rendu de l'application ;
- [TypeScript](https://www.typescriptlang.org/) — typage des données et du code applicatif ;
- [Tailwind CSS](https://tailwindcss.com/) — styles et mise en page responsive ;
- SVG et CSS natifs — graphiques légers pour les ventes et les conversions ;
- [Apache ECharts](https://echarts.apache.org/) — graphique interactif des canaux d'acquisition, chargé à la demande ;
- [Lucide](https://lucide.dev/) — icônes SVG cohérentes.

## Prérequis

- Node.js 22.12 ou une version plus récente ;
- npm.

## Installation

```bash
git clone https://github.com/AndrixNg1/astro-admin-dashboard.git
cd astro-admin-dashboard
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:4321](http://localhost:4321) dans votre navigateur.

## Commandes disponibles

Les commandes doivent être exécutées depuis la racine du projet.

| Commande | Description |
| --- | --- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise la version de production |
| `npm run astro -- --help` | Affiche l'aide de la CLI Astro |

## Structure du projet

```text
src/
├── assets/              # Styles globaux, images et scripts côté client
├── components/
│   ├── charts/          # Composants de visualisation
│   ├── dashboard/       # Éléments propres au tableau de bord
│   └── ui/              # Composants d'interface génériques
├── data/                # Données simulées locales
├── layouts/             # Mises en page partagées
├── pages/               # Routes générées par Astro
└── types/               # Types TypeScript partagés
```

## Personnalisation et connexion à un backend

- Modifiez les styles globaux dans `src/assets/styles/app.css`.
- Ajoutez ou adaptez les routes dans `src/pages/`.
- Configurez les graphiques dans `src/components/charts/` et `src/charts/`.
- Remplacez progressivement les données de `src/data/` par des appels à votre API.
- Configurez les intégrations Astro dans `astro.config.mjs`.

Le tableau de bord peut être relié à une API personnalisée ou adapté à une solution comme Shopify, WooCommerce, Medusa ou Saleor. Aucun connecteur e-commerce n'est inclus pour le moment.

## Contribution

Les contributions, rapports de bugs et propositions d'amélioration sont les bienvenus. Consultez [CONTRIBUTING.md](CONTRIBUTING.md) et le [Code de conduite](CODE_OF_CONDUCT.md) avant d'ouvrir une pull request.

## Licence

Ce projet est distribué sous [licence MIT](LICENSE).
