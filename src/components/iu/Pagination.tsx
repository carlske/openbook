'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  console.log({ currentPage, totalPages });

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (endPage - startPage + 1 < maxVisiblePages) {
        if (startPage === 1) {
          endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        } else {
          startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex w-full items-center justify-center gap-2 py-8">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`flex h-10 w-10 items-center justify-center rounded-md border-2 transition-colors ${
          currentPage <= 1
            ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500'
            : 'border-black bg-white text-black shadow-[2px_2px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_white]'
        }`}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : 0}
      >
        ←
      </Link>

      {visiblePages[0] > 1 && (
        <>
          <Link
            href={createPageURL(1)}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white text-black shadow-[2px_2px_0_black] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_white]"
          >
            1
          </Link>
          {visiblePages[0] > 2 && (
            <span className="flex h-10 w-10 items-center justify-center text-gray-500 dark:text-gray-400">...</span>
          )}
        </>
      )}

      {visiblePages.map(pageNumber => {return (
        <Link
          key={pageNumber}
          href={createPageURL(pageNumber)}
          className={`flex h-10 w-10 items-center justify-center rounded-md border-2 font-semibold transition-all ${
            pageNumber === currentPage
              ? 'border-black bg-black text-white shadow-[2px_2px_0_black] dark:border-white dark:bg-white dark:text-black dark:shadow-[2px_2px_0_white]'
              : 'border-black bg-white text-black shadow-[2px_2px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_white]'
          }`}
        >
          {pageNumber}
        </Link>
      )})}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="flex h-10 w-10 items-center justify-center text-gray-500 dark:text-gray-400">...</span>
          )}
          <Link
            href={createPageURL(totalPages)}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white text-black shadow-[2px_2px_0_black] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_white]"
          >
            {totalPages}
          </Link>
        </>
      )}

      <Link
        href={createPageURL(currentPage + 1)}
        className={`flex h-10 w-10 items-center justify-center rounded-md border-2 transition-colors ${
          currentPage >= totalPages
            ? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500'
            : 'border-black bg-white text-black shadow-[2px_2px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_white]'
        }`}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : 0}
      >
        →
      </Link>
    </div>
  );
};

export default Pagination;
