import { cn } from '@/lib/cn';

export default function LayoutCategory({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('container mx-auto mt-8 px-4')}>
      <p>demo</p>
      {children}
    </div>
  );
}
