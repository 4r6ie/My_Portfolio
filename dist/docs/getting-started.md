# Getting Started

Welcome to the **Portfolio Documentation** — an Obsidian-style knowledge base built into this portfolio.

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

### Docker Deployment

```bash
docker-compose up --build
# Opens at http://localhost:8080
```

## Project Structure

```
├── public/
│   ├── docs/           # Documentation markdown files
│   └── images/         # Static images
├── src/
│   ├── features/       # React components by feature
│   ├── core/           # Data (Profile, Skills, Projects)
│   └── shared/         # Hooks, UI components
├── Dockerfile
├── nginx.conf
└── docker-compose.yml
```

## Documentation Features

- **Wiki-style links**: Use `[[page-slug]]` or `[[page-slug|Custom Label]]` to link between pages
- **Markdown support**: Full CommonMark + GitHub Flavored Markdown
- **Category filtering**: Filter by Guide, Technical, Reference
- **Search**: Real-time search across all pages
- **Obsidian integration**: Open vault directly with `obsidian://` protocol

## Writing Documentation

Create `.md` files in `public/docs/`:

```markdown
# Page Title

Content with **bold**, *italic*, `code`, and [[wiki-links]].

## Section

- List item 1
- List item 2

> Blockquote for notes
```

## Linking Between Pages

```markdown
See [[architecture]] for system design.
See [[deployment|Deploy Guide]] for deployment steps.
```

## Next Steps

- Read [[architecture]] to understand the system design
- Check [[api-reference]] for API documentation
- See [[deployment]] for production deployment