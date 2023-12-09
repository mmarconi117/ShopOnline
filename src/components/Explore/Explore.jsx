
import { ExploreItem } from "./ExploreItem";
import beauty from "./assets/beauty.png";
import bagsAndShoes from './assets/bagsAndShoes.png';
import accessories from './assets/accessories.png';
import electronics from './assets/electronics.png';
import fashion from './assets/fashion.png'
import furniture from './assets/furniture.png';
import groceries from './assets/groceries.png';
import otherCategories from './assets/otherCategories.png';
import skinCare from './assets/skinCare.png';
import wristWatches from './assets/wristWatches.png'
import mensSneakers from './assets/sneakers.png'
import health from './assets/health.png'

const baseImages = [
  {
    category: 'Beauty',
    img: beauty,
  },
  {
    category: 'Fashion',
    img: fashion,
  },
  {
    category: 'Accessories',
    img: accessories,
  },
  {
    category: 'Furniture',
    img: furniture,
  },
  {
    category: 'Wristwatches',
    img: wristWatches,
  },
  {
    category: `Men's sneakers`,
    img: mensSneakers,
  },
  {
    category: 'Groceries',
    img: groceries,
  },
  {
    category: 'Health',
    img: health,
  },
  {
    category: 'Electronics',
    img: electronics,
  },
  {
    category: 'Skincare',
    img: skinCare,
  },
  {
    category: 'Bags & Shoes',
    img: bagsAndShoes,
  },
  {
    category: 'Other categories',
    img: otherCategories,
  },
  
]

export const Explore = () => {
  
  const exploreItems = baseImages.map((item, i) => {
    return (
      <span key={i}>
        <ExploreItem key={i} src={item.img} title={item.category} />
      </span>
    )
  })

  return (
    <div className="flex h-fit px-0 pb-6 flex-col items-start justify-center gap-[18px] flex-1 bg-[#BAD9E8]">
      <div className="text-zinc-800 text-xl font-bold font-'Arial' leading-normal tracking-tight pt-3 pl-3">
        Explore our Top Categories
      </div>

      <div className="grid w-full max-sm:grid-flow-col max-sm:grid-rows-2 max-sm:pl-6 max-sm:overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-9 items-center pl-3 pr-3">
        {exploreItems}
      </div>
    </div>
  );
};
