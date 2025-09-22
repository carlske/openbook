import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksGrid from './BooksGrid';

const BooksWelcome = async () => {
  try {
    const data = await fetchBooks('running');
    return <BooksGrid {...data} />;
  } catch {
    return <div>Error loading books</div>;
  }
};

export default BooksWelcome;
