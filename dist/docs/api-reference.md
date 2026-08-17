# API Reference

## Core Data (`@core/Profile`)

### Profile Object

```javascript
{
  name: "Efren S. Cabudbud Jr.",
  title: "BSIT Graduate | Virtual Assistant | Web & Mobile Developer",
  location: "Bohol, Philippines",
  email: "efrencabudbudjr2002@gmail.com",
  phone: "09949311632",
  summary: "...",
  avatar: "/images/profile.png",
  resume: "/Efren-Cabudbud-Resume.txt",
  social: { github, linkedin, facebook },
  education: { degree, school, status },
  workExperience: { role, company, description }
}
```

### Skills Object

```javascript
{
  frontend: [...],
  backend: [...],
  database: [...],
  tools: [...],
  mobile: [...],
  productivity: [...],
  design: [...],
  technicalSupport: [...]
}
```

### Projects Array

```javascript
[
  {
    id: 1,
    title: "Project Name",
    type: "web|mobile|ai",
    tags: [...],
    tech: [...],
    desc: "Description",
    visual: "slug",
    features: [...]
  }
]
```

## Hooks

### `useTheme()` → `{ dark, toggleTheme }`

Theme context hook for dark/light mode.

### `useScrollReveal()` → `void`

Initializes IntersectionObserver for scroll animations.

## Components

### `<Button />`

| Prop | Type | Default |
|------|------|---------|
| `href` | string | - |
| `ghost` | boolean | false |
| `download` | boolean | false |
| `children` | ReactNode | - |

### `<Icon />`

| Prop | Type | Default |
|------|------|---------|
| `name` | string | required |
| `size` | number | 20 |

## Related Pages

- [[architecture]] - Component architecture
- [[contributing]] - Development guidelines