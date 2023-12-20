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
    );
  });

  return (
    <section className="flex flex-col h-fit mx-4 pt-3 pb-12 gap-5 flex-1 bg-[#BAD9E8] sm:mx-0 sm:px-6">
      <div className="text-zinc-800 text-xl font-bold font-['Arial'] leading-6 tracking-tight pt-3 hidden sm:block">
        Explore our Top Categories
      </div>

      <div className="max-sm:columns-2 sm:grid sm:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {exploreItems}
      </div>
    </section>
  );
};

export default Explore;
