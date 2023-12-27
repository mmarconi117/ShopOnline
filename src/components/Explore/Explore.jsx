/*
This component acts as the man content to the ExplorItem.jsx card.
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
    <section className="w-full h-fit flex flex-col py-8 px-4 md:pt-9 md:px-0 gap-5 bg-[#BAD9E8] overflow-auto">
      <div className="text-[#313133] text-base font-medium md:font-bold md:text-2xl font-Roboto leading-6 tracking-tight md:pl-10">
        Explore our Top Categories
      </div>

      <div className="grid gap-2 md:gap-5 grid-cols-6 w-max xl:w-full md:pl-10 md:pr-3">
        {exploreItems}
      </div>
    </section>
  );
};

export default Explore;
