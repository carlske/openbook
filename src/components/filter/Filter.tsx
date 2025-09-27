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
            <header>
              <h2 className="text-left text-xl font-bold">Filter Options</h2>
            </header>
          </div>
          <div className="p-4">
            <p className="text-black dark:text-white">Filter content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
