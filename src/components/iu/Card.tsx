import { cn } from '@/lib/cn';
export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'dark:bg-card-background hover:dark:bg-card-background/60 bg-primary hover:bg-primary/60 rounded-xl border border-gray-700 p-6 shadow-sm transition-all duration-200 dark:border-gray-200 dark:hover:border-white/40',
        className,
      )}
    >
      {children}
    </div>
  );
};
