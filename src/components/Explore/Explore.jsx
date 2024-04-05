import { ExploreItem } from "./ExploreItem";
import { BaseImagesAndCategories } from "./BaseImagesAndCategories";
import rightArrow from "../../assets/ICONS/Fill/arrow-right.svg";

export const Explore = () => {
    // In your Explore component, pass the path to ExploreItem
    const exploreItems = BaseImagesAndCategories.map((item) => (
        <ExploreItem key={item.id} src={item.img} category={item.category} path={item.path} />
    ));


    return (
        <section className="bg-[#BAD9E8] w-full flex flex-col items-start justify-center gap-4 py-8 px-4">
            <div className="w-full flex justify-between items-center">
                <div className="font-Roboto text-[#313133] text-lg font-medium md:text-xl font-bold">Explore our Top Categories</div>
                <button className="w-6 h-6 hidden md:block">
                    <img src={rightArrow} alt="right-arrow" />
                </button>
            </div>
            <div className="w-full overflow-x-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {exploreItems}
                </div>
            </div>
        </section>
    );
};

export default Explore;
