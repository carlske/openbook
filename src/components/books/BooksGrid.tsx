import type { OpenLibraryDocument, OpenLibrarySearchResponse } from '@/lib/types/apiTypes';
import type { BookCardData } from '@/lib/types/cardTypes';
import Pagination from '../iu/Pagination';
import BooksNotFound from './BooksNotFound';
import * as BookCard from '@/components/books/BookCard';

interface BooksGridProps extends OpenLibrarySearchResponse {
  totalPages: number;
}

export default function BooksGrid({ docs, totalPages }: BooksGridProps) {
  const createBook = (b: OpenLibraryDocument): BookCardData => {
    return {
      author_name: b.author_name ? b.author_name.join(', ') : 'Unknown Author',
      cover_i: b.cover_i,
      id: b.key,
      title: b.title,
      first_publish_year: b.first_publish_year || 0,
    };
  };

  return (
    <div className="book_grid">
      {docs && docs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 justify-items-center gap-5 p-3 sm:grid-cols-3 sm:justify-items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {docs.map((b, i) => {
              return (
                <BookCard.Root value={createBook(b)} key={b.key || `mock-${i}`}>
                  <BookCard.Book>
                    <BookCard.Container>
                      <BookCard.Cover />
                      <BookCard.Title />
                      <BookCard.Author />
                    </BookCard.Container>
                  </BookCard.Book>
                </BookCard.Root>
              );
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
