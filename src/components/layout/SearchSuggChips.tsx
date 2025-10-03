'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/cn';
import Chips from '../iu/Chips';
import useSearchQueryParams from '@/hooks/useSearchQueryParams';

interface SearchSuggChipsProps {
  className?: string;
  sugg?: string[];
  onClipClick?: (label: string) => string | void;
}

const SearchSuggChips = ({ className, sugg, onClipClick }: SearchSuggChipsProps) => {
  const { updateQuery } = useSearchQueryParams();
  const results = sugg || [];
  const handleChipClick = (id: string | number) => {
    const label = results.find(result => {
      return result === id;
    });
    if (!label) return;

    updateQuery(label);
    return onClipClick ? onClipClick(label) : undefined;
  };

  return (
    <section
      className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        results.length > 0 ? 'max-h-32 p-5' : 'max-h-0 p-0',
        className,
      )}
    >
      <div className="opacity-100">
        <Chips
          onChipClick={handleChipClick}
          chips={results.map(label => {
            return { id: label, label };
          })}
        />
      </div>
    </section>
  );
};

export default SearchSuggChips;
