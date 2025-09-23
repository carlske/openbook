import { Card } from '../iu/Card';

const BannerCard = () => {
  return (
    <Card className="bg-banner hover:bg-banner w-full max-w-xs border-2 border-black shadow-[10px_4px_0_black] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl dark:border-white dark:shadow-[4px_4px_0_white]">
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Welcome to OpenBook</h2>
        <p className="text-center text-black dark:text-white">
          Discover a world of books at your fingertips. Search, explore, and dive into your next great read with
          OpenBook.
        </p>
      </div>
    </Card>
  );
};

export default BannerCard;
