import type { OpenLibrarySearchResponse } from '@/lib/types/apiTypes';
import type { FetchBooksProps } from '@/lib/types/select';

const BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBooks({ query, currentPage }: FetchBooksProps): Promise<OpenLibrarySearchResponse> {
  const res = await fetch(`${BASE}/search.json?q=${query}&page=${currentPage}&limit=20`);
  if (!res.ok) {
    throw new Error('Failed to fetch data from OpenLibrary API', { cause: res.statusText });
  }
  return res.json();
}

export async function fetchGetSearchSuggestions(
  query: string,
  ctrlRef: React.RefObject<AbortController | null>,
): Promise<string[]> {
  try {
    ctrlRef.current?.abort();
    ctrlRef.current = new AbortController();

    if (!query) {
      return [];
    }

    const response = await fetch('/api/search-sugg', {
      body: JSON.stringify({ search: query }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      signal: ctrlRef.current.signal,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Search Suggestions API', { cause: response.statusText });
    }

    const { suggestions } = await response.json();
    return suggestions;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return [];
    }
    throw error;
  }
}
