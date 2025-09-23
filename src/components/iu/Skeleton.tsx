import { cn } from '@/lib/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'pulse' | 'shimmer';
}

const Skeleton = ({ className, variant = 'shimmer' }: SkeletonProps) => {
  const baseClasses = 'bg-gray-300 dark:bg-gray-600 rounded';

  const variantClasses = {
    pulse: 'animate-pulse',
    shimmer:
      'bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 bg-[length:200%_100%] animate-shimmer',
  };

  return <div className={cn(baseClasses, variantClasses[variant], className)} />;
};

export default Skeleton;
