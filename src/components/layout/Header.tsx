'use client';
import { useState } from 'react';
import InputSearch from '../iu/InputSearch';
import SearchSuggChips from './SearchSuggChips';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string[]>([]);

  const handleSearch = (value: string[]) => {
    setSearchValue(value);
  };

  return (
    <>
      <section className="bg-accent dark:bg-pomp-and-power flex w-full justify-center p-4 shadow-[10px_14px_0_black] dark:border-black dark:shadow-[10px_14px_0_white]">
        <InputSearch onSearch={handleSearch} />
      </section>

      <SearchSuggChips className="mt-4 px-4" sugg={searchValue.length > 0 ? searchValue : undefined} />
    </>
  );
};
export default Header;
