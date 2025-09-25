import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksGrid from './BooksGrid';
import ErrorPage from '../iu/ErrorPage';

interface BooksWelcomeProps {
  query: string;
}

const BooksWelcome = async ({ query }: BooksWelcomeProps) => {
  if (!query) {
    query = 'running';
  }
  try {
    const data = await fetchBooks(query);
    const { numFound } = data;

    return (
      <>
        <BooksGrid {...data} totalPages={numFound} />
      </>
    );
  } catch {
    return <ErrorPage message="Failed to load books. Please try again later." />;
  }
};

export default BooksWelcome;
