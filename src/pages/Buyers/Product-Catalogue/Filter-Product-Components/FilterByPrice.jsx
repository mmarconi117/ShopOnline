const FilterByPrice = () => {
    return (
        <div
            id="filter-by-price-component"
            className="border-b-2 "
        >
            <div className="m-5">
                <div className="flex justify-between mb-5">
                    <div>
                        <p className="font-bold text-2xl">Price ($)</p>
                    </div>
                    <div>
                        <button
                            className="text-2xl"
                            type="button"
                        >
                            Apply
                        </button>
                    </div>
                </div>
                <div className="w-full mb-5">
                    <input
                        // onChange={(e) => {
                        //     console.log(e.target.value);
                        // }}
                        type="range"
                        min="0"
                        max="100"
                        className="w-full"
                    />
                </div>
                <div className="flex justify-evenly text-center">
                    <div className="border-2 border-gray-300 w-1/2 rounded-md">
                        <button
                            type="button"
                            className="p-2"
                        >
                            Min
                        </button>
                    </div>
                    <div className="w-1/6 ">
                        <p className="p-2">-</p>
                    </div>
                    <div className="border-2 border-gray-300 w-1/2 rounded-md">
                        <button
                            type="button"
                            className="p-2"
                        >
                            Max
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
