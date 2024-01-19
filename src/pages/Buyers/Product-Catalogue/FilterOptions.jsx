import FilterByBrand from "./Filter-Options-Components/FilterByBrand";
import FilterByBusinessType from "./Filter-Options-Components/FilterByBussinessType";
import FilterByCondition from "./Filter-Options-Components/FilterByCondition";
import FilterByPrice from "./Filter-Options-Components/FilterByPrice";
import FilterByRatings from "./Filter-Options-Components/FilterByRatings";

const FilterOptions = ({
    products,
    filterByBrand,
    filterByPrice,
    filterByBusinessType,
    filterByCondition,
    filterByRatings,
}) => {
    return (
        <div
            id="filter-options-component"
            className="w-1/4 mr-5"
        >
            <div
                id="filter-options-container"
                className="border-2 shadow-xl rounded-2xl"
            >
                <FilterByBrand
                    products={products}
                    filterByBrand={filterByBrand}
                />

                <FilterByPrice filterByPrice={filterByPrice} />

                <FilterByRatings
                    products={products}
                    filterByRatings={filterByRatings}
                />

                <FilterByBusinessType
                    products={products}
                    filterByBusinessType={filterByBusinessType}
                />

                <FilterByCondition
                    products={products}
                    filterByCondition={filterByCondition}
                />
            </div>
        </div>
    );
};

export default FilterOptions;
