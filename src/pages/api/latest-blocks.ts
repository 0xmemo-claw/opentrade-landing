export const prerender = false;

export async function GET({ request, url }: { request: Request, url: URL }) {
  const count = url.searchParams.get('count') || '7';
  try {
    const resp = await fetch(`https://www.avax.network/api/latest-blocks?count=${count}`);
    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
