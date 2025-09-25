import Image from 'next/image';
import { cn } from '@/lib/cn';

const BooksNotFound = () => {
  return (
    <div className="flex w-full justify-center">
      <Image
        src="/no-results.svg"
        alt="No results found"
        width={600}
        height={600}
        className={cn('h-auto w-auto max-w-full')}
      />
    </div>
  );
};

export default BooksNotFound;
