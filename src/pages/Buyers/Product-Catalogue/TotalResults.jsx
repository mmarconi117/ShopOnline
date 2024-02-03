const TotalResults = ({ totalProductsDisplaying }) => {
    return (
        <div
            id="total-results-component"
        >
            <div className="">
                <p className="font-bold text-2xl">Showing {totalProductsDisplaying} results</p>
            </div>
        </div>
    );
};

export default TotalResults;
