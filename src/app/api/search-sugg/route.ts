import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { AI_SEARCH_SUGG_PROMPT } from '@/lib/prompt/searchSugg';
import { markdownToJSON } from '@/lib/utils';

export async function POST(req: Request) {
  const { search } = await req.json();
  if (!search || typeof search !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid search term' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
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

    const suggestions = markdownToJSON(text);

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
