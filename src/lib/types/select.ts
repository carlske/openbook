export type SelectItem = {
  value: string;
  label: string;
};

export type SelectProps = {
  className?: string;
  label?: string;
  defaultValue?: string;
  name: string;
  selected: SelectItem[];
  options: SelectItem[];
  hideSpinner?: boolean;
  isPending?: boolean;
  variant?: 'primary' | 'secondary';
  onSelect?: (items: SelectItem[]) => void;
};

export interface FetchBooksProps {
  query: string;
  currentPage?: number;
}
