const FilterContainerRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden lg:block">
      <div className="dark:bg-dark-100 top-20 m-4 h-fit rounded-md border-2 border-black bg-white shadow-[10px_14px_0_black] dark:border-black dark:shadow-[10px_14px_0_white]">
        {children}
      </div>
    </div>
  );
};

const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-accent w-full p-4 text-white">
      <header>
        <h2 className="text-left text-xl font-bold">{title}</h2>
      </header>
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full lg:w-1/4">{children}</div>;
};

export const Filter = Object.assign(FilterContainerRoot, {
  Header,
  Container,
});
