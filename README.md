# Efren S. Cabudbud Jr. - Portfolio

Modern, animated portfolio with search and Obsidian-like documentation.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── animations/      # Framer Motion animation wrappers
│   ├── layout/          # Navbar, Footer
│   ├── search/          # command palette
│   ├── sections/        # Page sections (Hero, About, Skills, etc)
│   └── ui/              # Reusable UI components (Button, Card, Badge, etc)
├── context/             # React Context (Theme)
├── data/                # Static data (profile, skills, projects)
├── hooks/               # Custom hooks (scroll, media query, etc)
├── lib/                 # Utility functions (cn, debounce, etc)
├── styles/              # Global CSS
├── App.jsx              # Main app
└── main.jsx             # Entry point
```

## Features

- **Modern Design** - Clean, minimal UI with CSS custom properties
- **Framer Motion Animations** - Scroll reveals, stagger effects, floating elements
- **Command Palette** - `Ctrl+K` to search skills, projects, sections 
- **Dark/Light Theme** - Auto-detects system preference, toggleable
- **Obsidian-style Docs** - Wiki-style `[[links]]` between documentation pages
- **Responsive** - Mobile-first, works on all devices
- **Reduced Motion** - Respects `prefers-reduced-motion`

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `↑↓` | Navigate results |
| `Enter` | Select |
| `Esc` | Close |

## Tech Stack

- React 18 + Vite
- Framer Motion (animations)
- Geist + Space Grotesk fonts
- Custom CSS design system

## Documentation

See `public/docs/` for markdown-based documentation with wiki-style links.