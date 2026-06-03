# HealthMaxxed Vercel setup

Preferred production hosting path for HealthMaxxed:

```text
GitHub repo -> Vercel project -> GoDaddy DNS -> HealthMaxxed.com
```

Repo:

```text
https://github.com/iceyyygaming/healthmaxed
```

Domain:

```text
healthmaxxed.com
www.healthmaxxed.com
```

## Why Vercel over GitHub Pages

Vercel is the better default for this project because it gives us:

- automatic GitHub deploy previews,
- simple custom-domain management,
- easy future Supabase/env-var integration,
- form/API/serverless options if we need them later,
- less friction if HealthMaxxed becomes more than static pages.

GitHub Pages is currently usable as a fallback, but Vercel is the cleaner production target.

## Vercel import settings

Import the GitHub repo into Vercel:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Install command: npm ci
Root directory: ./
```

Astro is static right now, so no Vercel adapter is required.

## GoDaddy DNS for Vercel

After adding `healthmaxxed.com` in Vercel's Domains screen, set GoDaddy DNS to:

```text
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Remove conflicting GoDaddy parked-site records for `@` and `www`, especially existing A records like:

```text
13.248.243.5
76.223.105.230
```

Do not delete MX/email records unless intentionally changing email.

## CLI path

The Vercel CLI is installed on Derek's Mac, but this Hermes session is not currently logged into Vercel.

Check auth:

```bash
vercel whoami
```

If not logged in:

```bash
vercel login
```

Then from the repo:

```bash
cd /Users/derekstephen/Projects/healthmaxed
vercel link
vercel deploy --prod
vercel domains add healthmaxxed.com
vercel domains add www.healthmaxxed.com
```

If using a token instead of interactive login, set `VERCEL_TOKEN` in `~/.hermes/.env` and use:

```bash
vercel deploy --prod --token "$VERCEL_TOKEN"
```

## Post-DNS verification

```bash
dig +short healthmaxxed.com A
dig +short www.healthmaxxed.com CNAME
curl -I https://healthmaxxed.com
curl -I https://www.healthmaxxed.com
```
