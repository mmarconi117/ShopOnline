import FilterByBrand from "./FilterByBrand";
import FilterByBusinessType from "./FilterByBussinessType";
import FilterByCondition from "./FilterByCondition";
import FilterByPrice from "./FilterByPrice";
import FilterByRatings from "./FilterByRatings";

const FilterOptions = () => {
    return (
        <div
            id="filter-options-component"
            className="w-1/4 mr-5"
        >
            <div
                id="filter-options-container"
                className="border-2 border-black shadow-md rounded-xl"
            >
                <FilterByBrand />
                <FilterByPrice />
                <FilterByRatings />
                <FilterByBusinessType />
                <FilterByCondition />
            </div>
        </div>
    );
};

export default FilterOptions;
