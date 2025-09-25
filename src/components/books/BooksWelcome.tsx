import { fetchBooks } from '@/adapters/openlibraryApi';
import type { FetchBooksProps } from '@/lib/types/select';
import ErrorPage from '../iu/ErrorPage';
import BooksGrid from './BooksGrid';

interface BooksWelcomeProps {
  query: string;
  currentPage?: number;
}

const BooksWelcome = async ({ query, currentPage = 1 }: BooksWelcomeProps) => {
  if (!query) {
    query = 'running';
  }

  try {
    const data = await fetchBooks({ currentPage, query } as FetchBooksProps);
    const { numFound } = data;

    return <BooksGrid {...data} totalPages={numFound} />;
  } catch {
    return <ErrorPage message="Failed to load books. Please try again later." />;
  }
};

export default BooksWelcome;
