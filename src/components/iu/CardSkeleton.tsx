const CardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-48 w-full rounded-md bg-gray-300 dark:bg-gray-700" />
      <div className="h-6 w-3/4 rounded-md bg-gray-300 dark:bg-gray-700" />
      <div className="h-4 w-1/2 rounded-md bg-gray-300 dark:bg-gray-700" />
    </div>
  );
};
export default CardSkeleton;
