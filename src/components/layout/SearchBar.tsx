'use client';
import InputSearch from '../iu/InputSearch';
import SearchSuggChips from './SearchSuggChips';
import useSearchQueryParams from '@/hooks/useSearchQueryParams';
import useIAsuggestions from '@/hooks/useIASuggestions';

const SearchBar = () => {
  const { query, setQuery } = useSearchQueryParams();
  const { searchValue, setSearchValue } = useIAsuggestions(query, 300);

  const handleChipClick = (label: string) => {
    setQuery(label);
  };

  const handleSearch = (term: string) => {
    if (term === '') {
      setSearchValue([]);
    }
    setQuery(term);
  };

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
