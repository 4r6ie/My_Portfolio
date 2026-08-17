# Deployment Guide

## Docker Deployment (Recommended)

### Prerequisites

- Docker Desktop / Docker Engine
- Docker Compose

### Build & Run

```bash
# Build and start
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Production Checklist

- [ ] Set proper domain in `nginx.conf`
- [ ] Configure SSL/TLS certificates
- [ ] Set up reverse proxy (Traefik, Nginx Proxy Manager)
- [ ] Configure health checks
- [ ] Set resource limits

## Manual Deployment

### Build Static Files

```bash
npm run build
# Outputs to dist/
```

### Serve with Nginx

```nginx
server {
    listen 80;
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Serve with Apache

```apache
<VirtualHost *:80>
    DocumentRoot /var/www/portfolio
    
    <Directory /var/www/portfolio>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA fallback
        FallbackResource /index.html
    </Directory>
</VirtualHost>
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `PORT` | Server port | `80` |

## CI/CD Example (GitHub Actions)

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/user/portfolio:latest
      - name: Deploy to server
        run: |
          ssh user@server "docker pull ghcr.io/user/portfolio:latest && docker-compose up -d"
```

## Related Pages

- [[getting-started]] - Quick start
- [[architecture]] - System overview
- [[changelog]] - Version history