# HealthMaxxed.com DNS setup

HealthMaxed is deployed on GitHub Pages from:

https://github.com/iceyyygaming/healthmaxed

GitHub Pages is configured with custom domain:

```text
healthmaxxed.com
```

## Preferred: GoDaddy DNS records for Vercel

If using Vercel as the production host, set these records in GoDaddy DNS:

```text
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Delete/replace any existing GoDaddy parked-site A/CNAME records for `@` and `www` that conflict with these.

Do not delete MX records unless intentionally changing email.

## Fallback: GoDaddy DNS records for GitHub Pages

If staying on GitHub Pages instead of Vercel, use:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    iceyyygaming.github.io
```

## API setup option

GoDaddy uses API key + secret authentication, not OAuth for normal DNS automation.

1. Go to https://developer.godaddy.com/keys
2. Create a **Production** API key/secret.
3. Add them to `~/.hermes/.env` on this Mac:

```bash
GODADDY_API_KEY=your_key_here
GODADDY_API_SECRET=your_secret_here
```

4. Reload/restart Hermes or run the script with those variables loaded.
5. Run:

```bash
python scripts/godaddy-dns-healthmaxed.py
```

After DNS propagates, enable HTTPS enforcement in GitHub Pages if it is not automatically enabled.
