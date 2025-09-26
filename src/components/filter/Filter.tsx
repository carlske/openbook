import { Funnel } from 'lucide-react';
import Button from '../iu/Buttons';

const Filter = () => {
  return (
    <div>
      <div className="block lg:hidden">
        <Button variant="secondary" className="text-black dark:text-white">
          Filters
          <Funnel className="hover:text-secundary inline" />
        </Button>
      </div>

      <div className="hidden lg:block">
        <div className="dark:bg-dark-100 top-20 m-4 h-fit rounded-md border-2 border-black bg-white shadow-[10px_14px_0_black] dark:border-black dark:shadow-[10px_14px_0_white]">
          <div className="bg-accent w-full p-4 text-white">
            <header className="flex items-center justify-between p-2 dark:bg-gray-900" />
            <h2 className="mb-4 text-xl font-bold">Filter Options</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
