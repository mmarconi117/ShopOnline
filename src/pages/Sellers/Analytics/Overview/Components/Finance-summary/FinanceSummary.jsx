const FinanceSummary = () => {
    return (
        <div
            className="p-6 bg-white shadow-md rounded-lg xl:basis-1/4"
            id="finance-summary-component"
        >
            <div className="mb-5">
                <p className="font-bold text-center">Financial Summary</p>
            </div>
            <div>
                <p>
                    No products exist that match your filter choices. To view items, please change
                    the filters.
                </p>
            </div>
        </div>
    );
};

export default FinanceSummary;
