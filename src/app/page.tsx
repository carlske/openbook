import { Suspense, unstable_ViewTransition as ViewTransition } from 'react';
import BannerCard from '@/components/Banner/BannerCard';
import BooksGridSkeleton from '@/components/books/BooksGridSkeleton';
import BooksWelcome from '@/components/books/BooksWelcome';
import FilterSection from '@/components/filter/FilterSection';
import Header from '@/components/layout/Header';

interface HomeProps {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = params?.query || 'running';
  const currentPage = Number(params?.page) || 1;

  return (
    <div>
      <Header />
      <FilterSection />
      <div className="my-6 flex justify-center">
        <BannerCard />
      </div>
      <main>
        <Suspense
          key={`${query},${currentPage}`}
          fallback={
            <ViewTransition exit="slide-down">
              <BooksGridSkeleton count={20} />
            </ViewTransition>
          }
        >
          <ViewTransition key={query} enter="slide-up" exit="slide-down" default="none">
            <BooksWelcome query={query} />
          </ViewTransition>
        </Suspense>
      </main>
    </div>
  );
}
