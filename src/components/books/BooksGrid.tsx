import type { OpenLibraryDocument, OpenLibrarySearchResponse } from '@/lib/types/apiTypes';
import type { BookCardData } from '@/lib/types/cardTypes';
import BookCard from './BookCard';

export default function BooksGrid({ docs }: OpenLibrarySearchResponse) {
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
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {docs.map((b, i) => {return (
          <BookCard key={`${i}-book-${b.title}`} book={createBook(b)} language={b.language} />
        )})}
      </div>
    </div>
  );
}
