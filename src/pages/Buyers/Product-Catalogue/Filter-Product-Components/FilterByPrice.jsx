const FilterByPrice = () => {
    return (
        <div id="filter-by-price-component">
            <div>
                <div>
                    <div>
                        <p>Price ($)</p>
                    </div>
                    <div>
                        <button type="button">Apply</button>
                    </div>
                </div>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                    />
                </div>
                <div>
                    <div>
                        <span>Min</span>
                    </div>
                    <div>
                        <span>-</span>
                    </div>
                    <div>
                        <span>Max</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
