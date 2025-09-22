import { cn } from '@/lib/cn';
import Image from 'next/image';

interface BookCoverProps {
  cover_i?: number;
  title: string;
  className?: string;
}

const BookCover = ({ cover_i, title, className }: BookCoverProps) => {
  return (
    <Image
      src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
      alt={`Cover of ${title}`}
      width={200}
      loading="lazy"
      height={300}
      className={cn(`object-cover ${className}`)}
    />
  );
};

export default BookCover;
