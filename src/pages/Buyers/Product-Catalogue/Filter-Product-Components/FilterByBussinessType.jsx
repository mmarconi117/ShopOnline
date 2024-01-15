const FilterByBusinessType = () => {
    return (
        <div id="filter-by-business-type-component">
            <div>
                <div className="">
                    <label className="">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className=""
                        />
                        Small scale Business
                    </label>
                </div>
                <div class="">
                    <label className="">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className=""
                        />
                        Medium sclae business
                    </label>
                </div>
                <div class="">
                    <label className="">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className=""
                        />
                        Large scale business
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterByBusinessType;
