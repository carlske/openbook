'use client';

import { useState, useEffect } from 'react';
import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksGrid from './BooksGrid';
import BooksGridSkeleton from './BooksGridSkeleton';
import type { OpenLibrarySearchResponse } from '@/lib/types/apiTypes';

interface BooksWithLoadingProps {
  query?: string;
  initialData?: OpenLibrarySearchResponse;
}

const BooksWithLoading = ({ query = 'running', initialData }: BooksWithLoadingProps) => {
  const [data, setData] = useState<OpenLibrarySearchResponse | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!initialData) {
      fetchBooks(query)
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [query, initialData]);

  if (loading) {
    return <BooksGridSkeleton count={12} />;
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold text-red-600">Error loading books</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return <BooksGridSkeleton count={12} />;
  }

  return <BooksGrid {...data} />;
};

export default BooksWithLoading;
