import { OpenLibraryDocument, OpenLibrarySearchResponse } from '@/lib/types/apiTypes';
import BookCard from './BookCard';
import { BookCardData } from '@/lib/types/cardTypes';

export default function BooksGrid({ docs }: OpenLibrarySearchResponse) {
  const createBook = (b: OpenLibraryDocument): BookCardData => {
    return {
      id: b.key,
      title: b.title,
      author_name: b.author_name ? b.author_name.join(', ') : 'Unknown Author',
      first_publish_year: b.first_publish_year,
      cover_i: b.cover_i,
    };
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {docs.map((b, i) => (
          <BookCard key={`${i}-book-${b.title}`} book={createBook(b)} language={b.language} />
        ))}
      </div>
    </div>
  );
}
