import Image from 'next/image';
import type { BookCardData } from '@/lib/types/cardTypes';
import { Card } from '../iu/Card';
import BookCover from './BookCover';

interface BookCardProps {
  book: BookCardData;
  language?: string[];
}

const BookCard = ({ book, language }: BookCardProps) => {
  return (
    <Card className="w-full max-w-[250px] cursor-pointer border-2 border-black shadow-[4px_4px_0_black] dark:border-white dark:shadow-[4px_4px_0_white]">
      <Image src="/bookmark.svg" alt="Bookmark" width={24} height={24} className="relative top-[-2em] left-0" />

      <div className="mb-4 flex h-40 w-full items-center justify-center text-black">
        <BookCover cover_i={book.cover_i} title={book.title} className="h-40 w-30" />
      </div>
      <div className="p-1">
        <h2 className="mb-2 w-full text-lg font-bold text-balance text-white">{book.title}</h2>
        {book.author_name && (
          <p className="text text-sm font-semibold text-black dark:text-white">
            <span>by</span> {book.author_name}
          </p>
        )}
        <div className="my-2 w-full border-b border-gray-200/50" />
        {language && <p className="text-sm text-black dark:text-white">Languages: {language.join(', ')}</p>}
      </div>
    </Card>
  );
};

export default BookCard;
