# HealthMaxed

HealthMaxxed.com — clean, inclusive, hype-checked wellness product intelligence.

## Stack

- Astro
- Tailwind CSS
- Vercel deployment preferred
- GitHub Pages deployment available as fallback
- Custom domain: `healthmaxxed.com`

## Local development

```bash
npm install
npm run dev
```

## Deployment

Preferred production path is GitHub → Vercel → GoDaddy DNS.

Vercel DNS:

```text
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

See `VERCEL_SETUP.md` and `DNS_SETUP.md`.

GitHub Pages is currently configured as a fallback via `.github/workflows/deploy.yml`.
