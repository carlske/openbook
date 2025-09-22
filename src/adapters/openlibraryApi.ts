const BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBooks(query: string) {
  const res = await fetch(`${BASE}/search.json?q=${query}&limit=20`);
  if (!res.ok) {
    throw new Error('Failed to fetch data from OpenLibrary API', { cause: res.statusText });
  }
  return res.json();
}
