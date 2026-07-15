# Astro Admin Dashboard

A modern, responsive, and reusable admin dashboard built with Astro and TypeScript. The project is designed as an open-source foundation for developer tools, startup back offices, and small-business applications.

> [!NOTE]
> The dashboard is currently under active development. The initial Astro setup and core dependencies are ready; dashboard pages and reusable components are being implemented progressively.

## Preview

A public demo and screenshots will be added with the first stable release.

## Planned features

- Responsive sidebar and mobile navigation
- Light and dark themes
- Overview with key metrics, recent activity, projects, and tasks
- Interactive analytics powered by Apache ECharts
- Searchable and filterable project management
- Task table and Kanban views with local persistence
- Sortable, paginated user table
- Profile, appearance, notification, and security settings
- Reusable UI components and accessible keyboard interactions
- Loading, empty, error, and skeleton states

## Planned pages

| Route | Purpose |
| --- | --- |
| `/` | Dashboard overview and key metrics |
| `/analytics` | Traffic, revenue, device, region, and conversion analytics |
| `/projects` | Project tracking, filters, budgets, and progress |
| `/tasks` | Table and Kanban task management |
| `/users` | User directory with search, sorting, and pagination |
| `/settings` | Profile, theme, notifications, and preferences |

## Tech stack

- [Astro](https://astro.build/) — application structure and rendering
- [TypeScript](https://www.typescriptlang.org/) — typed application code
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [React](https://react.dev/) — interactive islands when needed
- [Apache ECharts](https://echarts.apache.org/) — data visualization
- [Lucide](https://lucide.dev/) — consistent SVG icons

## Getting started

### Requirements

- Node.js 22.12 or newer
- npm

### Installation

```bash
git clone https://github.com/AndrixNg1/astro-admin-dashboard.git
cd astro-admin-dashboard
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available commands

Run commands from the project root:

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Display Astro CLI help |

## Project structure

The repository currently follows this structure and will grow as the roadmap is implemented:

```text
.
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and global styles
│   ├── components/         # Astro and framework components
│   ├── layouts/            # Shared page layouts
│   └── pages/              # File-based routes
├── astro.config.mjs        # Astro, React, and Tailwind configuration
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

The target architecture separates reusable UI, dashboard components, charts, typed mock data, and shared types:

```text
src/
├── components/
│   ├── ui/
│   ├── dashboard/
│   └── charts/
├── data/
├── layouts/
├── pages/
└── types/
```

## Customization

- Update global styles in `src/assets/styles/app.css`.
- Add or modify routes in `src/pages/`.
- Configure integrations in `astro.config.mjs`.
- Replace the local TypeScript mock data with API calls when connecting a backend.

Keep interactive JavaScript focused on components that need it so the dashboard remains fast and lightweight.

## Contributing

Contributions, bug reports, and feature ideas are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is available under the [MIT License](LICENSE).
