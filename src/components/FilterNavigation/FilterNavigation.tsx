import { Filter } from '../iu/Filter';

const FilterNavigation = () => {
  return (
    <Filter>
      <Filter.Header title="Filters" />
      <Filter.Container>
        <p className="p-4 text-sm text-gray-600 dark:text-gray-300">Filter options will be available soon.</p>
      </Filter.Container>
    </Filter>
  );
};

export default FilterNavigation;
