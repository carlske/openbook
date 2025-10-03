'use client';

import { Card } from '../iu/Card';
import Image from 'next/image';
import { createContext, use } from 'react';

interface Property {
  author_name: string;
  cover_i?: number;
  first_publish_year?: number;
  id: string;
  title: string;
}

const PropertyBookCardContext = createContext<Property | null>(null);

export function Root({ children, value }: { children: React.ReactNode; value: Property }) {
  return <PropertyBookCardContext.Provider value={value}>{children}</PropertyBookCardContext.Provider>;
}

export function Book({ children }: { children: React.ReactNode }) {
  return (
    <Card className="h-[23em] w-full max-w-[250px] cursor-pointer border-2 border-black shadow-[4px_4px_0_black] dark:border-white dark:shadow-[4px_4px_0_white]">
      {children}
    </Card>
  );
}

export function Title() {
  const { title } = use(PropertyBookCardContext)!;
  return <h2 className="mb-2 w-full text-lg font-bold text-balance text-black dark:text-white">{title}</h2>;
}

export function Cover() {
  const { cover_i, title } = use(PropertyBookCardContext)!;
  return (
    <div className="mb-4 flex h-40 w-full items-center justify-center text-black">
      {cover_i ? (
        <Image
          src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
          alt={`Cover of ${title}`}
          width={110}
          height={130}
          loading="lazy"
          className="rounded object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-black/20 dark:text-gray-900">
          <span className="text-center text-sm">
            No Cover
            <br />
            Available
          </span>
        </div>
      )}
    </div>
  );
}

export function Author() {
  const { author_name } = use(PropertyBookCardContext)!;
  return (
    <div className="p-1">
      {author_name && (
        <p className="text-sm font-semibold text-black dark:text-white">
          <span>by </span>
          {author_name}
        </p>
      )}
    </div>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Image src="/bookmark.svg" alt="Bookmark" width={24} height={24} className="relative top-[-2em] left-0" />
      {children}
    </div>
  );
}

export const BookCard = Object.assign(Root, { Book, Container, Author, Cover, Title });
export default BookCard;
