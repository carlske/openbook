'use client';

import clsx from 'clsx';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {  useEffect, useRef, useState } from 'react';
import { fetchGetSearchSuggestions } from '@/adapters/openlibraryApi';
import useDebounce from '@/hooks/useDebounce';

interface InputSearchProps {
  onSearch?: (terms: string[]) => void;
}

const InputSearch = ({ onSearch }: InputSearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState<string>(searchParams.get('query') || '');
  const debouncedQuery = useDebounce(query, 300);
  const debouncedSuggestions = useDebounce(query, 400);
  const ctrlRef = useRef<AbortController | null>(null);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [debouncedQuery]);

  useEffect(() => {
    getIAsuggestions();

    return () => {
      ctrlRef.current?.abort();
    };
  }, [debouncedSuggestions]);

  const handleInputChange = (term: string) => {
    setQuery(term);
  };

  const getIAsuggestions = async (): Promise<string[]> => {
    if (!debouncedSuggestions.trim()) {
      return Promise.resolve([]);
    }

    try {
      const data = await fetchGetSearchSuggestions(debouncedSuggestions, ctrlRef);
      if (data && onSearch) {
        onSearch(data);
      }

      if (!data) {
        return Promise.resolve([]);
      }

      return Promise.resolve(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return Promise.resolve([]);
    }
  };

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
        onChange={e => {return handleInputChange(e.target.value)}}
        value={query}
      />

      <Search className="peer-focus:dark:text-primary absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default InputSearch;
