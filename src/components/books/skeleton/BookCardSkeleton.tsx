import { Card } from '../../iu/Card';
import Skeleton from '../../iu/Skeleton';

const BookCardSkeleton = () => {
  return (
    <Card className="w-full max-w-[250px] cursor-pointer border-2 border-black shadow-[4px_4px_0_black] dark:border-white dark:shadow-[4px_4px_0_white]">
      <Skeleton className="relative top-[-2em] left-0 h-6 w-6 rounded-sm" />

      <div className="mb-4 flex h-48 w-full items-center justify-center">
        <Skeleton className="h-40 w-30" />
      </div>

      <div className="space-y-3 px-2 pb-4">
        <div className="space-y-2">
          <Skeleton className="h-5" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        <Skeleton className="h-4 w-2/3" />

        <div className="my-2 w-full border-b border-gray-200/50 dark:border-gray-600/50" />

        <Skeleton className="h-4 w-1/2" />
      </div>
    </Card>
  );
};

export default BookCardSkeleton;
