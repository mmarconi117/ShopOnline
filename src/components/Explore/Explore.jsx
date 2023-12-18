/*
This component acts as the main content to the ExplorItem.jsx card.
This is currently as dynamic as I can get for the time being and still be able to display the information as required by figma. 
*/
import { ExploreItem } from "./ExploreItem";
import { BaseImagesAndCategories } from "./BaseImagesAndCategories";

export const Explore = () => {
  
  const exploreItems = BaseImagesAndCategories.map((item, i) => {
    return (
      <span key={i}>
        <ExploreItem key={i} src={item.img} title={item.category} />
      </span>
    )
  })

  return (
    <section className="flex h-fit px-0 pb-6 flex-col items-start justify-center gap-[18px] flex-1 bg-[#BAD9E8]">
      <div className="text-zinc-800 text-xl font-bold font-'Arial' leading-normal tracking-tight pt-3 pl-3">
        Explore our Top Categories
      </div>

      <div className="grid w-full max-sm:grid-flow-col max-sm:grid-rows-2 max-sm:pl-6 max-sm:overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-9 items-center pl-3 pr-3">
        {exploreItems}
      </div>
    </section>
  );
};

export default Explore;