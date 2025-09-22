import { cn } from '@/lib/cn';
export const Switch = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex items-center', className)}>{children}</div>;
};
