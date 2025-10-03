import { useEffect, useRef, useState } from 'react';
import useDebounce from './useDebounce';
import { fetchGetSearchSuggestions } from '@/adapters/openlibraryApi';

const useIAsuggestions = (query: string, time: number) => {
  const [searchValue, setSearchValue] = useState<string[]>([]);
  const ctrlRef = useRef<AbortController | null>(null);

  const debouncedQuery = useDebounce(query, time);

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
    let active = true;
    getIAsuggestions().then(suggestions => {
      if (active) setSearchValue(suggestions);
    });
    return () => {
      active = false;
      ctrlRef.current?.abort();
    };
  }, [debouncedQuery]);

  return { searchValue, ctrlRef, setSearchValue };
};
export default useIAsuggestions;
