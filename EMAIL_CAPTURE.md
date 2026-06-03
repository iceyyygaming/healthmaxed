# HealthMaxxed Email Capture

The homepage newsletter form posts to `/api/subscribe`.

## Current behavior

- The site is configured for Vercel serverless functions via `@astrojs/vercel`. Astro 6 uses `output: 'static'` for the old hybrid behavior and keeps `/api/subscribe` as a server function because it exports `prerender = false`.
- If email-provider environment variables are missing, the endpoint redirects back to the homepage and logs the email in Vercel function logs as a temporary placeholder.
- This is not intended as the permanent list storage path.

## Beehiiv setup

Add these Vercel environment variables:

```text
BEEHIIV_PUBLICATION_ID=<publication id>
BEEHIIV_API_KEY=<api key>
```

When both exist, `/api/subscribe` sends signups to Beehiiv's subscriptions API.

## ConvertKit setup

Alternatively add:

```text
CONVERTKIT_FORM_ID=<form id>
CONVERTKIT_API_KEY=<api key>
```

When both exist, `/api/subscribe` sends signups to ConvertKit's form subscribe API.

## Recommended next step

Use Beehiiv if the list is meant to become a newsletter/content asset. Use ConvertKit if it will become more creator-product/funnel oriented.
