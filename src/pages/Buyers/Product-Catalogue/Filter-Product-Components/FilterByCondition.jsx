const FilterByCondition = () => {
    return (
        <div
            id="filter-by-condition-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div>
                    <p className="font-bold text-2xl">CONDITION</p>
                </div>
                <div>
                    <div className="mb-3">
                        <button
                            className="text-[#2284B6] text-2xl"
                            type="button"
                        >
                            New
                        </button>
                    </div>
                    <div className="mb-3">
                        <button
                            className="text-[#2284B6] text-2xl"
                            type="button"
                        >
                            Used
                        </button>
                    </div>
                    <div className="mb-3">
                        <button
                            className="text-[#2284B6] text-2xl"
                            type="button"
                        >
                            Renewed
                        </button>
                    </div>
                </div>
                <div className="w-full mx-auto text-center">
                    <button
                        type="button"
                        className="text-[#2284B6] text-2xl"
                    >
                        See more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterByCondition;
