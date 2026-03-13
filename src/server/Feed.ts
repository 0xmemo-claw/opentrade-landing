import { type APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const params = url.search;
    const resp = await fetch(`https://www.avax.network/_server-islands/Feed${params}`, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const text = await resp.text();
    return new Response(text, {
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (e) {
    console.error('Feed proxy error:', e);
    return new Response('', {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};
