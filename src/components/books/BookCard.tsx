import type { BookCardData } from '@/lib/types/cardTypes';
import { Card } from '../iu/Card';
import Image from 'next/image';

const BookCardRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="h-[23em] w-full max-w-[250px] cursor-pointer border-2 border-black shadow-[4px_4px_0_black] dark:border-white dark:shadow-[4px_4px_0_white]">
      {children}
    </Card>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h2 className="mb-2 w-full text-lg font-bold text-balance text-white">{title}</h2>;
};

const Cover = ({ cover_i, title }: { cover_i?: number; title: string }) => {
  return (
    <div className="mb-4 flex h-40 w-full items-center justify-center text-black">
      <Image
        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
        alt={`Cover of ${title}`}
        width={110}
        loading="lazy"
        height={130}
        className="object-cover"
      />
    </div>
  );
};

const Author = ({ book }: { book: BookCardData }) => {
  return (
    <div className="p-1">
      {book.author_name && (
        <p className="text text-sm font-semibold text-black dark:text-white">
          <span>by</span> {book.author_name}
        </p>
      )}
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Image src="/bookmark.svg" alt="Bookmark" width={24} height={24} className="relative top-[-2em] left-0" />
      {children}
    </div>
  );
};

export const BookCard = Object.assign(BookCardRoot, {
  Container,
  Author,
  Cover,
  Title,
});
