import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksGrid from './BooksGrid';
import ErrorPage from '../iu/ErrorPage';
import { FetchBooksProps } from '@/lib/types/select';

interface BooksWelcomeProps {
  query: string;
  currentPage?: number;
}

const BooksWelcome = async ({ query, currentPage = 1 }: BooksWelcomeProps) => {
  if (!query) {
    query = 'running';
  }

  try {
    const data = await fetchBooks({ query, currentPage } as FetchBooksProps);
    const { numFound } = data;

    return <BooksGrid {...data} totalPages={numFound} />;
  } catch {
    return <ErrorPage message="Failed to load books. Please try again later." />;
  }
};

export default BooksWelcome;
