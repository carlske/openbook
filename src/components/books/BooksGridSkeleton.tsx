import BookCardSkeleton from './BookCardSkeleton';

interface BooksGridSkeletonProps {
  count?: number;
}

const BooksGridSkeleton = ({ count = 12 }: BooksGridSkeletonProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array.from({ length: count }, (_, index) => {
          return <BookCardSkeleton key={index} />;
        })}
      </div>
    </div>
  );
};

export default BooksGridSkeleton;
