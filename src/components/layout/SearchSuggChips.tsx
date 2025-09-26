'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/cn';
import Chips from '../iu/Chips';

interface SearchSuggChipsProps {
  className?: string;
  sugg?: string[];
}

const SearchSuggChips = ({ className, sugg }: SearchSuggChipsProps) => {
  const results = sugg || [];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChipClick = (id: string | number) => {
    const label = results.find(result => {return result === id});
    if (!label) return;
    const params = new URLSearchParams(searchParams);
    params.set('query', label);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className={`${cn('p-5', className)}`}>
      {results.length > 0 && (
        <Chips onChipClick={handleChipClick} chips={results.map(label => {return { id: label, label }})} />
      )}
    </section>
  );
};

export default SearchSuggChips;
