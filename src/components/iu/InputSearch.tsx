'use client';
import useDebounce from '@/hooks/useDebounce';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const InputSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [debouncedValue] = useDebounce(searchParams.get('query') || '', 300);
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(debouncedValue);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="site-search" className="sr-only">
        Search the site:
      </label>
      <input
        className={clsx(
          'block w-full rounded-md border border-black bg-white py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-white/40 dark:bg-gray-900',
        )}
        type="search"
        placeholder="Search..."
        id="site-search"
        name="q"
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() ?? ''}
      />

      <Search className="peer-focus:dark:text-primary absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default InputSearch;
