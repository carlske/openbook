import { cn } from '@/lib/cn';
import type { SelectItem } from '@/lib/types/select';
import Select from '../iu/Select';

type FilterInputsRouterProps = {
  selected: SelectItem[];
  hideSpinner?: boolean;
  options: SelectItem[];
  className?: string;
  name: string;
  selectAction?: (items: SelectItem[]) => void | Promise<void>;
  onSelect?: (items: SelectItem[]) => void;
};

const FilterInputsRouter = ({ selected, hideSpinner, options, name, onSelect, className }: FilterInputsRouterProps) => {
  return (
    <Select
      name={name}
      className={cn(className)}
      selected={selected}
      options={options}
      hideSpinner={hideSpinner}
      isPending={false}
      onSelect={onSelect}
      variant="primary"
    />
  );
};
export default FilterInputsRouter;
