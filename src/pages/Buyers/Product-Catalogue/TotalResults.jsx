const TotalResults = ({ totalProductsDisplaying }) => {
    return (
        <div
            id="total-results-component"
            className="hidden lg:block font-medium text-xl 2xl:text-2xl"
        >
            <p>Showing {totalProductsDisplaying} results</p>
        </div>
    );
};

export default TotalResults;
