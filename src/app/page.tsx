import BooksWelcome from '@/components/books/BooksWelcome';
import FilterSection from '@/components/filter/FilterSection';

export default async function Home() {
  return (
    <div>
      <main>
        <h1 className="text-limelight text-5xl">OpenBook</h1>
        <FilterSection />
        <BooksWelcome />
      </main>
    </div>
  );
}
