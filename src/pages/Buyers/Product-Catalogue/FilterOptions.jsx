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
    totalProductsDisplaying,
    totalProducts

}) => {
    return (
        <div
            id="filter-options-component"
            className="grow 2xl:grow-0 max-w-[340px] 2xl:max-w-[400px] hidden lg:flex flex-col justify-start items-stretch gap-5"
        >
            <p className="h-[104px] pt-3 2xl:text-2xl">
                1-{totalProductsDisplaying} of over {totalProducts} results
            </p>
            <div
                id="filter-options-container"
                className="border-2 shadow-xl rounded-2xl p-6 2xl:p-10"
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
