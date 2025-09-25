import type { OpenLibraryDocument, OpenLibrarySearchResponse } from '@/lib/types/apiTypes';
import type { BookCardData } from '@/lib/types/cardTypes';
import BookCard from './BookCard';
import BooksNotFound from './BooksNotFound';
import Pagination from '../iu/Pagination';

interface BooksGridProps extends OpenLibrarySearchResponse {
  totalPages: number;
}

export default function BooksGrid({ docs, totalPages }: BooksGridProps) {
  const createBook = (b: OpenLibraryDocument): BookCardData => {
    return {
      author_name: b.author_name ? b.author_name.join(', ') : 'Unknown Author',
      cover_i: b.cover_i,
      first_publish_year: b.first_publish_year,
      id: b.key,
      title: b.title,
    };
  };

  return (
    <div className="w-full">
      {docs && docs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 justify-items-center gap-5 p-3 sm:grid-cols-3 sm:justify-items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {docs.map((b, i) => {
              return <BookCard key={`${i}-book-${b.title}`} book={createBook(b)} language={b.language} />;
            })}
          </div>
          <Pagination totalPages={totalPages} />
        </>
      ) : (
        <BooksNotFound />
      )}
    </div>
  );
}
