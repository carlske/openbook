import { fetchBooks } from '@/adapters/openlibraryApi';
import BooksWelcome from '@/components/books/BooksWelcome';
import FilterSection from '@/components/filter/FilterSection';

export default async function Home() {
  const data = await fetchBooks('running');

  return (
    <div className="">
      <main>
        <h1 className="text-limelight text-5xl">OpenBook</h1>
        <FilterSection />
        <BooksWelcome />
      </main>
    </div>
  );
}
