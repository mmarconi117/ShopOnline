const FilterByBusinessType = () => {
    return (
        <div
            id="filter-by-business-type-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div>
                    <p className="font-bold text-2xl">BUSINESS TYPE</p>
                </div>
                <div className="">
                    <div className="my-2">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className="mr-3 w-6 h-6"
                        />
                        <label className="inline-block align-top text-2xl">
                            Small scale Business
                        </label>
                    </div>
                    <div className="my-2">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className="mr-3 w-6 h-6"
                        />
                        <label className="inline-block align-top text-2xl">
                            Medium sclae business
                        </label>
                    </div>
                    <div className="my-2">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className="mr-3 w-6 h-6"
                        />
                        <label className="inline-block align-top text-2xl">
                            Large scale business
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByBusinessType;
