import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = String(formData.get('email') || '').trim().toLowerCase();

  if (!email || !email.includes('@')) {
    return new Response('Please enter a valid email address.', { status: 400 });
  }

  const beehiivPublicationId = import.meta.env.BEEHIIV_PUBLICATION_ID;
  const beehiivApiKey = import.meta.env.BEEHIIV_API_KEY;
  const convertKitFormId = import.meta.env.CONVERTKIT_FORM_ID;
  const convertKitApiKey = import.meta.env.CONVERTKIT_API_KEY;

  if (beehiivPublicationId && beehiivApiKey) {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${beehiivPublicationId}/subscriptions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${beehiivApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return response.ok
      ? Response.redirect(new URL('/?subscribed=1#newsletter', request.url), 303)
      : new Response('Email provider rejected the signup. Please try again later.', { status: 502 });
  }

  if (convertKitFormId && convertKitApiKey) {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: convertKitApiKey, email })
    });
    return response.ok
      ? Response.redirect(new URL('/?subscribed=1#newsletter', request.url), 303)
      : new Response('Email provider rejected the signup. Please try again later.', { status: 502 });
  }

  console.log(`HealthMaxxed waitlist signup pending provider: ${email}`);
  return Response.redirect(new URL('/?waitlist=pending#newsletter', request.url), 303);
};
