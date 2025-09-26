'use client';

import clsx from 'clsx';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

interface InputSearchProps {
  onSearch?: (terms: string[]) => void;
}

const InputSearch = ({ onSearch }: InputSearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const debouncedValue = searchParams.get('query') || '';
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState<string>('');

  function handleSearch(term: string) {
    const params = new URLSearchParams(debouncedValue);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('/api/search-sugg', {
        body: JSON.stringify({ search: inputValue }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { suggestions } = await response.json();
      if (onSearch) {
        console.log('Suggestions received:', suggestions);
        onSearch(suggestions);
      }
    };

    if (inputValue) {
      callApi();
    }
  }, [inputValue, onSearch]);

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
        onChange={e => {
          setInputValue(e.target.value);
          return handleSearch(e.target.value);
        }}
        value={inputValue}
      />

      <Search className="peer-focus:dark:text-primary absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default InputSearch;
