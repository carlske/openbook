import { Suspense, unstable_ViewTransition as ViewTransition } from 'react';
import BooksWelcome from '@/components/books/BooksWelcome';
import BooksGridSkeleton from '@/components/books/skeleton/BooksGridSkeleton';
import Filter from '@/components/filter/Filter';
import FilterSection from '@/components/filter/FilterSection';
import Header from '@/components/layout/Header';

interface HomeProps {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  return (
    <div>
      <Header />

      <FilterSection />

      <main>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[300px_1fr] 2xl:grid-cols-[300px_1fr]">
          <Filter />
          <Suspense
            key={`${query},${currentPage}`}
            fallback={
              <ViewTransition exit="slide-down">
                <BooksGridSkeleton count={20} />
              </ViewTransition>
            }
          >
            <ViewTransition key={query} enter="slide-up" exit="slide-down" default="none">
              <BooksWelcome query={query} currentPage={currentPage} />
            </ViewTransition>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
