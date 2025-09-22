'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/cn';
import Spinner from './Spinner';

type Props = {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  loading,
  type = 'submit',
  variant = 'primary',
  className,
  disabled,
  ...otherProps
}: Props & React.HTMLProps<HTMLButtonElement>) {
  const { pending } = useFormStatus();
  const isSubmitting = pending || loading;

  return (
    <button
      disabled={isSubmitting || disabled}
      type={type}
      className={cn(
        'focus-visible:outline-primary cursor-pointer rounded-md border-2 px-4 py-2 -outline-offset-1 focus-visible:outline-2',
        variant === 'primary'
          ? 'bg-primary border-primary enabled:hover:bg-primary-dark disabled:bg-primary-darker text-white'
          : 'dark:border-primary disabled:bg-divider dark:enabled:hover:bg-card-dark enabled:hover:bg-card disabled:dark:bg-divider-dark border-black bg-white text-black dark:bg-black dark:text-white',
        className,
      )}
      {...otherProps}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          {children}
          <Spinner
            className={variant === 'primary' ? 'text-white' : 'text-black dark:text-white'}
            width={16}
            height={16}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
