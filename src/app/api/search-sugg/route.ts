import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { AI_SEARCH_SUGG_PROMPT } from '@/lib/prompt/searchSugg';
import { markdownToJSON } from '@/lib/utils';
import {
  getSearchSuggestion,
  saveSearchSuggestion,
} from '@/adapters/db/prisma/repositories/SearchSuggestionsRepository';

export async function POST(req: Request) {
  const { search } = await req.json();
  if (!search || typeof search !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid search term' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }

  const existingSuggestion = await getSearchSuggestion(search);
  if (existingSuggestion) {
    return new Response(existingSuggestion.suggestions, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      prompt: AI_SEARCH_SUGG_PROMPT(search),
      tools: {
        google_search: google.tools.googleSearch({}),
      },
    });

    const suggestions: Record<string, any> = markdownToJSON(text);

    try {
      await saveSearchSuggestion({
        search,
        suggestions: JSON.stringify(suggestions),
      });
    } catch (error) {
      console.error('Error saving search suggestion:', error);
    }

    return new Response(JSON.stringify(suggestions), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (_error) {
    return new Response(JSON.stringify({ details: `${_error}`, error: 'Failed to fetch suggestions' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
