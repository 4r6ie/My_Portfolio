export const docPages = [
  { slug: 'getting-started', title: 'Getting Started', category: 'Guide', description: 'Quick start guide for development and deployment' },
  { slug: 'architecture', title: 'System Architecture', category: 'Technical', description: 'System design and component architecture overview' },
  { slug: 'api-reference', title: 'API Reference', category: 'Technical', description: 'Component APIs, hooks, and data structures' },
  { slug: 'deployment', title: 'Deployment Guide', category: 'Guide', description: 'Production deployment with Docker and Nginx' },
  { slug: 'contributing', title: 'Contributing', category: 'Guide', description: 'Development guidelines and contribution workflow' },
  { slug: 'changelog', title: 'Changelog', category: 'Reference', description: 'Version history and release notes' },
];

export const categories = ['All', ...new Set(docPages.map(p => p.category))];

export const DOCS_PATH = '/docs/';