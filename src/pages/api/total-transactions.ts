export const prerender = false;

export async function GET() {
  try {
    const resp = await fetch('https://www.avax.network/api/total-transactions');
    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ count: '1,234,567,890' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
