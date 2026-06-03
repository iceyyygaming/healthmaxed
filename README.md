# HealthMaxed

HealthMaxxed.com — clean, inclusive, hype-checked wellness product intelligence.

## Stack

- Astro
- Tailwind CSS
- GitHub Pages deployment
- Custom domain: `healthmaxxed.com`

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers GitHub Pages via `.github/workflows/deploy.yml`.

DNS for GitHub Pages apex domain:

```text
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  iceyyygaming.github.io
```
