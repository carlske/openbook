import BookCardSkeleton from './BookCardSkeleton';

interface BooksGridSkeletonProps {
  count?: number;
}

const BooksGridSkeleton = ({ count = 12 }: BooksGridSkeletonProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 justify-items-center gap-5 p-3 sm:grid-cols-3 sm:justify-items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
          {Array.from({ length: count }, (_, index) => {
            return <BookCardSkeleton key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksGridSkeleton;
