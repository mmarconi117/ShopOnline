import FilterByBrand from "./FilterByBrand";
import FilterByBusinessType from "./FilterByBussinessType";
import FilterByCondition from "./FilterByCondition";
import FilterByPrice from "./FilterByPrice";
import FilterByRatings from "./FilterByRatings";

const FilterOptions = () => {
    return (
        <div id="filter-component">
            <FilterByBrand />
            <FilterByPrice />
            <FilterByRatings />
            <FilterByBusinessType />
            <FilterByCondition />
        </div>
    );
};

export default FilterOptions;
