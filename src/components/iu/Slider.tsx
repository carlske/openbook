'use client';

import { cn } from '@/lib/cn';
import { useState } from 'react';

type SliderProps = {
  className?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  orientation?: 'horizontal' | 'vertical';
  onValueChange?: (value: number) => void;
};

const Slider = ({
  className,
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  orientation = 'vertical',
  onValueChange,
}: SliderProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && (
        <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {label}: {value}
        </label>
      )}

      <div
        className={cn(
          'relative flex items-center justify-center',
          orientation === 'vertical' ? 'h-32 w-6' : 'h-6 w-32',
        )}
      >
        {/* Track */}
        <div
          className={cn(
            'rounded-full bg-neutral-200 dark:bg-neutral-700',
            orientation === 'vertical' ? 'h-full w-2' : 'h-2 w-full',
          )}
        />

        {/* Filled track */}
        <div
          className={cn(
            'bg-pomp-and-power absolute rounded-full transition-all duration-200',
            orientation === 'vertical' ? 'bottom-0 w-2' : 'left-0 h-2',
          )}
          style={orientation === 'vertical' ? { height: `${percentage}%` } : { width: `${percentage}%` }}
        />

        {/* Thumb */}
        <div
          className={cn(
            'border-pomp-and-power absolute h-4 w-4 rounded-full border-2 bg-white shadow-sm',
            'cursor-pointer transition-all duration-200 hover:scale-110',
          )}
          style={
            orientation === 'vertical'
              ? { bottom: `calc(${percentage}% - 8px)` }
              : { left: `calc(${percentage}% - 8px)` }
          }
        />

        {/* Hidden input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={cn(
            'absolute cursor-pointer opacity-0',
            orientation === 'vertical'
              ? 'h-full w-6 [-webkit-appearance:slider-vertical] [writing-mode:bt-lr]'
              : 'h-6 w-full',
          )}
        />
      </div>
    </div>
  );
};

export default Slider;
