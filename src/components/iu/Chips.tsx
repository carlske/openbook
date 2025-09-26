'use client';

import { X } from 'lucide-react';
import { cn } from '@/lib/cn';
import Button from './Buttons';

interface ChipProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  variant?: 'default' | 'selected' | 'removable';
  size?: 'sm' | 'md';
  className?: string;
}

interface ChipsProps {
  chips: Array<{
    id: string | number;
    label: string;
    variant?: ChipProps['variant'];
  }>;
  onChipClick?: (id: string | number) => void;
  onChipRemove?: (id: string | number) => void;
  size?: ChipProps['size'];
  className?: string;
}

export const Chip = ({ label, onRemove, onClick, variant = 'default', size = 'md', className }: ChipProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <Button
      type="button"
      variant={variant === 'selected' ? 'primary' : 'secondary'}
      onClick={handleClick}
      className={cn(
        'group relative flex items-center gap-1 transition-all duration-200',
        size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm',
        variant === 'selected' && 'bg-black text-white dark:bg-white dark:text-black',
        variant === 'removable' && 'pr-8',
        'border-2 border-black shadow-[2px_2px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none',
        'dark:border-white dark:shadow-[2px_2px_0_white]',
        className,
      )}
    >
      <span className="truncate">{label}</span>

      {(variant === 'removable' || onRemove) && (
        <button
          type="button"
          onClick={handleRemove}
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
          aria-label="Remove chip"
        >
          <X size={size === 'sm' ? 12 : 14} />
        </button>
      )}
    </Button>
  );
};

const Chips = ({ chips, onChipClick, onChipRemove, size = 'md', className }: ChipsProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {chips.map(chip => {return (
        <Chip
          key={chip.id}
          label={chip.label}
          variant={chip.variant}
          size={size}
          onClick={() => {return onChipClick?.(chip.id)}}
          onRemove={onChipRemove ? () => {return onChipRemove(chip.id)} : undefined}
        />
      )})}
    </div>
  );
};

export default Chips;
