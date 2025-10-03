import clsx from 'clsx';
import { Search } from 'lucide-react';
import React from 'react';

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (v: string) => void;
}

const InputSearch = ({ onSearch, value, ...props }: InputSearchProps) => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    return onSearch ? onSearch(e.currentTarget.value ? e.currentTarget.value : '') : null;
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
        id="site-search"
        name="search"
        value={value}
        onChange={e => {
          return handleClick(e);
        }}
        {...props}
      />

      <Search className="peer-focus:dark:text-primary absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default InputSearch;
