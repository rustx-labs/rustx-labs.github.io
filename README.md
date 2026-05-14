# RustX Labs

<p>
  <a href="https://github.com/rustx-labs/rustx-labs.github.io/actions/workflows/gh-pages.yml"><img src="https://github.com/rustx-labs/rustx-labs.github.io/actions/workflows/gh-pages.yml/badge.svg" alt="GitHub Pages"></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss" alt="Tailwind CSS">
  <a href="https://rustx-labs.github.io"><img src="https://img.shields.io/badge/site-live-brightgreen" alt="Site Live"></a>
  <a href="./README.zh.md"><img src="https://img.shields.io/badge/lang-中文-blue" alt="中文"></a>
</p>

> An engineering team focused on Rust tooling, delivery pipelines, and developer experience.

This repository contains the source code for [rustx-labs.github.io](https://rustx-labs.github.io), the official website and software update proxy for RustX Labs.

## Overview

RustX Labs is a team dedicated to building production-grade Rust engineering infrastructure. The website serves two purposes:

1. **Team Homepage** — Showcase our focus areas, engineering programs, and community collaboration model.
2. **Update Proxy** — Provide a stable, GitHub Pages-hosted endpoint that proxies software update manifests and redirects download URLs through our domain.

### Softwares

The update proxy currently serves manifests for:

| Software | Description |
|----------|-------------|
| **NovaDB** | Fast, modern database client for developers |
| **Sky Monitor** | Lightweight macOS menu-bar system monitor |
| **Eye Sentry** | Cross-platform eye-care & focus assistant with screen temperature control and break reminders |

Each software has an update endpoint at `/api/updates/<slug>` that fetches the upstream manifest, rewrites download URLs to point through this site, and returns the result.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router and static export
- **Language:** [TypeScript 6](https://www.typescriptlang.org/)
- **UI:** [React 19](https://react.dev/) + [Tailwind CSS 4](https://tailwindcss.com/)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** GitHub Pages (static export)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.x or later)

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.

### Build

```bash
bun run build
```

This produces a static export in the `out/` directory, ready for deployment to GitHub Pages or any static hosting service.

### Lint

```bash
bun run lint
```

## Project Structure

```
.
├── app/
│   ├── api/updates/[slug]/   # Update proxy API route
│   ├── components/            # Shared React components
│   │   ├── ScrollCard.tsx     # Animated scroll-triggered card
│   │   └── ThemeToggle.tsx    # Dark/light theme switcher
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── config.json                # Software registry & site config
├── public/
│   ├── logo.svg               # RustX Labs logo
│   └── og.svg                 # Open Graph image
├── scripts/
│   └── download-assets.sh     # Asset download helper
├── next.config.js             # Next.js config (static export)
└── package.json
```

## Configuration

Software entries are defined in `config.json`:

```json
{
  "site_url": "https://rustx-labs.github.io",
  "softwares": {
    "novadb": {
      "name": "NovaDB",
      "download_url": "https://.../stable.json",
      "description": "Fast, modern database client for developers."
    }
  }
}
```

To add a new software, add an entry to the `softwares` object. The API route at `/api/updates/<slug>` is automatically generated from this config.

## Contributing

We welcome contributions. The workflow:

1. **Propose** — Open an issue or discussion to align on scope and direction.
2. **Implement** — Fork, branch, and submit a pull request.
3. **Ship** — After review and approval, changes are merged and deployed.

### Collaboration Guidelines

- Propose first, then design-review to clarify scope
- Prefer async collaboration with written documentation
- Keep delivery traceable with post-ship retrospectives

## License

See [LICENSE](./LICENSE) for details.

---

<p align="center">
  <strong>RustX Labs</strong> — Engineering. Delivery. Collaboration.
</p>
