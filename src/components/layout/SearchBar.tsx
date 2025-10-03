'use client';
import { useEffect, useRef, useState } from 'react';
import InputSearch from '../iu/InputSearch';
import SearchSuggChips from './SearchSuggChips';
import useDebounce from '@/hooks/useDebounce';
import useSearchQueryParams from '@/hooks/useSearchQueryParams';
import { fetchGetSearchSuggestions } from '@/adapters/openlibraryApi';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string[]>([]);
  const { query, setQuery } = useSearchQueryParams();

  const debouncedQuery = useDebounce(query, 300);
  const ctrlRef = useRef<AbortController | null>(null);

  const handleChipClick = (label: string) => {
    setQuery(label);
  };

  const handleSearch = (term: string) => {
    if (term === '') {
      setSearchValue([]);
    }
    setQuery(term);
  };

  const getIAsuggestions = async (): Promise<string[]> => {
    if (!debouncedQuery.trim()) {
      return Promise.resolve([]);
    }

    try {
      const data = await fetchGetSearchSuggestions(debouncedQuery, ctrlRef);

      if (!data) {
        return Promise.resolve([]);
      }

      return Promise.resolve(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return Promise.resolve([]);
    }
  };

  useEffect(() => {
    getIAsuggestions().then(suggestions => {
      setSearchValue(suggestions);
    });
  }, [debouncedQuery]);

  return (
    <nav>
      <section className="bg-accent flex w-full justify-center p-4 shadow-[10px_14px_0_black] dark:border-black dark:shadow-[10px_14px_0_white]">
        <InputSearch placeholder="Search..." onSearch={handleSearch} value={query} />
      </section>

      <SearchSuggChips
        onClipClick={handleChipClick}
        className="mt-4 px-4"
        sugg={searchValue.length > 0 ? searchValue : undefined}
      />
    </nav>
  );
};
export default SearchBar;
