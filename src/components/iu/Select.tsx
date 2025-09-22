import * as Ariakit from '@ariakit/react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import Spinner from './Spinner';

type SelectProps = {
  className?: string;
  label?: string;
  defaultValue?: string;
};

const Select = ({ className }: SelectProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      <Ariakit.SelectProvider>
        <div className="relative w-56">
          <Ariakit.Select
            className={cn(
              'group peer inline-flex w-full items-center justify-between gap-2',
              'dark:border-primary rounded-lg border-2 border-black bg-white px-3 py-2 text-sm shadow-sm dark:bg-black',

              'transition-[box-shadow,transform,background-color,border-color]',
              'hover:dark:bg-secundary hover:bg-gray-500 hover:text-white active:scale-[.99]',

              'dark:data-[open]:accent-accent data-[open]:ring-2',
            )}
          >
            <Spinner className={'text-black dark:text-white'} width={16} height={16} />

            <Ariakit.SelectValue />
            <Ariakit.SelectArrow className="flex-shrink-0 transition-transform group-aria-expanded:rotate-180" />
          </Ariakit.Select>
        </div>

        <Ariakit.SelectPopover
          gutter={4}
          sameWidth
          className={cn(
            'z-50 mt-1 max-h-72 overflow-auto rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:bg-black',
            'data-[enter]:animate-[fade-in_120ms_ease-out]',
            'data-[leave]:animate-[fade-out_100ms_ease-in]',
          )}
        >
          <SelectItem value="Apple" />
          <SelectItem value="Banana" />
          <SelectItem value="Grape" />
          <SelectItem value="Orange" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
  );
};

function SelectItem({ value }: { value: string }) {
  return (
    <Ariakit.SelectItem
      value={value}
      className={cn(
        'relative flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm select-none',
        'outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-blue-300',
        'hover:bg-secundary hover:text-white data-[active]:bg-neutral-100 hover:dark:text-black',
        'aria-selected:text-secundary aria-selected:bg-blue-50',
      )}
    >
      <Ariakit.SelectItemCheck className="grid h-4 w-4 place-items-center">
        <Check className="h-4 w-4" aria-hidden />
      </Ariakit.SelectItemCheck>
      <span className="truncate">{value}</span>
    </Ariakit.SelectItem>
  );
}

export default Select;
