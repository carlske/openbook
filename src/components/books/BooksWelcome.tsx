import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksGrid from './BooksGrid';

interface BooksWelcomeProps {
  query: string;
}

const BooksWelcome = async ({ query }: BooksWelcomeProps) => {
  if (!query) {
    query = 'running';
  }
  try {
    const data = await fetchBooks(query);
    return <BooksGrid {...data} />;
  } catch {
    return <div>Error loading books</div>;
  }
};

export default BooksWelcome;
