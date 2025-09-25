import Image from 'next/image';
import { cn } from '@/lib/cn';

const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-white/50 text-center text-black dark:bg-white">
      <Image
        src="/error-page.svg"
        alt="Error Icon"
        width={600}
        height={600}
        className={cn('h-auto w-auto max-w-1/2')}
      />
      <h1 className="mb-2 text-2xl font-bold">An Error Occurred</h1>
      <p>Error: {message}</p>
    </div>
  );
};
export default ErrorPage;
