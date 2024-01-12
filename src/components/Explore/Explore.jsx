/*
This component acts as the man content to the ExplorItem.jsx card.
This is currently as dynamic as I can get for the time being and still be able to display the information as required by figma. 
*/
import { ExploreItem } from "./ExploreItem";
import { BaseImagesAndCategories } from "./BaseImagesAndCategories";
import rightArrow from "../../assets/ICONS/Fill/arrow-right.svg";

export const Explore = () => {
  const exploreItems = BaseImagesAndCategories.map((item, i) => {
    return (
      <span key={i}>
        <ExploreItem key={i} src={item.img} title={item.category} />
      </span>
    );
  });

  return (
    <section className="bg-[#BAD9E8] w-full flex flex-col items-start justify-center gap-2 pl-2 py-8 min-[391px]:pl-4 min-[391px]:pt-8 min-[391px]:gap-[18px] min-[391px]:min-h-[651px] min-[1360px]:px-6 min-[1512px]:px-10">
      <div className="w-full flex justify-between items-center">
        <div className="font-Roboto text-[#313133] text-base font-medium min-[391px]:text-xl min-[391px]:font-bold min-[391px]:leading-normal whitespace-nowrap">Explore our Top Categories</div>
        <button className="w-6 h-6 min-[391px]:hidden">
          <img src={rightArrow} alt="right-arrow" className="w-4 h-[14px]"/>
        </button>
      </div>
    <div className="w-full overflow-x-auto">
      <div className="min-w-max grid grid-cols-6 gap-x-3 gap-y-6 pr-4 min-[391px]:pr-0 min-[391px]:gap-x-2 md:justify-items-center md:grid-cols-3 md:gap-x-1 min-[960px]:grid-cols-4 min-[960px]:gap-x-2 min-[960px]:gap-y-8 min-[1360px]:grid-cols-6 min-[1360px]:justify-items-start min-[1360px]:gap-x-2 min-[1450px]:gap-x-6 min-[1450px]:gap-y-9 overflow-hidden ">
        {exploreItems}
      </div>
    </div>
    </section>
  );
};

export default Explore;
