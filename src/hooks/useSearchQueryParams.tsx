import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const updateQueryParam = (term: string, params: URLSearchParams) => {
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
};

const useSearchQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState<string>(searchParams.get('query') || '');

  const updateQuery = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    updateQueryParam(term, params);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return { searchParams, pathname, router, query, setQuery, updateQuery };
};

export default useSearchQueryParams;
