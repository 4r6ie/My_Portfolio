export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date, options = {}) {
  const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, { ...defaultOptions, ...options });
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function debounce(fn, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function throttle(fn, limit = 300) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getInitials(name) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function classNames(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === 'string') classes.push(arg);
    else if (Array.isArray(arg)) classes.push(...arg.filter(Boolean));
    else if (typeof arg === 'object') {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(' ');
}

export function parseWikiLinks(text) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const [slug, label] = link.split('|').map(s => s.trim());
    const targetSlug = slug.toLowerCase().replace(/\s+/g, '-');
    return { slug: targetSlug, label: label || slug, original: match };
  });
}

export function replaceWikiLinks(text, onLinkClick) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const [slug, label] = link.split('|').map(s => s.trim());
    const targetSlug = slug.toLowerCase().replace(/\s+/g, '-');
    return `<a href="#doc/${targetSlug}" class="wiki-link" data-slug="${targetSlug}">${label || slug}</a>`;
  });
}