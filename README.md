# G'educ

Site vitrine de **G'educ**, projet d'éducation canine bienveillante par Gaëlle Genly à Cambrai.

Direction visuelle : **Violet Nature** (violet poudré + vert sauge + beige chaud).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Police : Nunito (Google Fonts via `next/font`)

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvre [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Accueil (hero, méthode, prestations, programme ambassadeur, témoignages, à propos, contact)
- `/prestations` — Détail des trois formules
- `/a-propos` — Histoire longue + timeline + valeurs
- `/temoignages` — 6 avis détaillés
- `/blog` — Article à la une + 5 articles + newsletter
- `/faq` — 4 catégories de questions, accordéon

Le site est responsive (mobile / tablette / desktop).

## Déploiement Vercel

Le repo est conçu pour un déploiement Vercel zéro-config :

1. Importer le repo sur [vercel.com/new](https://vercel.com/new)
2. Vercel détecte Next.js automatiquement, aucun réglage à changer
3. Build command : `next build` (par défaut), output : `.next`

## Structure

```
app/
  layout.tsx          # Police Nunito + métadonnées
  page.tsx            # Accueil
  globals.css         # Tailwind + variables couleurs
  prestations/page.tsx
  a-propos/page.tsx
  temoignages/page.tsx
  blog/page.tsx
  faq/page.tsx
components/
  Nav.tsx             # Header + menu mobile
  Footer.tsx
  Btn.tsx             # Bouton pill primary/secondary
  Blob.tsx            # Forme organique SVG
  PlaceholderImg.tsx  # Visuel placeholder en attendant les vraies photos
  sections/           # Sections de l'accueil
```

## Charte couleurs (Tailwind)

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| `ink`        | `#2a2438` | Texte principal                    |
| `plum`       | `#6b4a7a` | Couleur d'accent principale        |
| `lavender`   | `#d4c2dc` | Highlights, fonds doux             |
| `sage`       | `#7a8f6c` | Accents secondaires                |
| `sage-soft`  | `#c2cfb5` | Fonds organiques                   |
| `sand`       | `#e8dcc8` | Fonds chaleureux                   |
| `sand-light` | `#f5ede0` | Sections alternées                 |
| `bone`       | `#fbf6ec` | Fond principal                     |
| `peach`      | `#e8b89a` | Accent doux                        |
| `terra`      | `#b86e52` | Accent foncé pour le bilan         |

## TODO côté Gaëlle

- [ ] Remplacer les `PlaceholderImg` par de vraies photos
- [ ] Compléter le numéro de téléphone (`06 XX XX XX XX` est un placeholder)
- [ ] Ajouter le SIRET dès qu'il est disponible
- [ ] Brancher le formulaire de contact à un service d'envoi (Resend, Formspree, etc.)
- [ ] Ajouter un favicon
