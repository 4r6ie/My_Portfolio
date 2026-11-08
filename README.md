# Efren S. Cabudbud Jr. — Portfolio

Personal portfolio of **Efren S. Cabudbud Jr.**, a web and mobile developer and virtual assistant based in Bohol, Philippines. Built with React, Vite, and Framer Motion.

**Live site:** https://efren-cabudbud-portfolio.vercel.app
**Mirror:** https://4r6ie.github.io/My_Portfolio/

## Features

- Responsive single-page layout with dark/light theme
- Framer Motion scroll reveals and reduced-motion support
- Command palette (`Ctrl+K` / `Cmd+K`) for searching skills, services, and projects
- Project filtering, expandable details, and a project lightbox
- Contact form with real email delivery via Web3Forms
- Resume available as a PDF download
- Accessible assets paths that work on both Vercel and GitHub Pages

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- Custom CSS design system (Geist + Space Grotesk)

## Project Structure

```
src/
├── components/
│   ├── animations/      # Framer Motion wrappers
│   ├── layout/          # Navbar, Footer
│   ├── search/          # Command palette
│   ├── sections/        # Hero, About, Skills, Projects, Contact, etc.
│   └── ui/              # Button, Card, Badge, Input, Icon, etc.
├── context/             # Theme context
├── data/                # Profile, skills, projects, services
├── hooks/               # Scroll and media-query hooks
├── lib/                 # Shared utilities
├── App.jsx              # Page composition
└── main.jsx             # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `↑` / `↓` | Navigate results |
| `Enter` | Select |
| `Esc` | Close |

## Deployment

- **Vercel:** builds with `npm run build` and serves `dist/`.
- **GitHub Pages:** `.github/workflows/deploy.yml` builds with `BASE_PATH=/My_Portfolio/` and deploys the artifact.

## Contact

- Email: 4r6iee@gmail.com
- GitHub: https://github.com/4r6ie
- LinkedIn: https://linkedin.com/in/efren-cabudbud
