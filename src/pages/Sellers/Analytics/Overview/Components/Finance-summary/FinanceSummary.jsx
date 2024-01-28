const FinanceSummary = () => {
    return (
        <div
            className="w-3/5  mb-5 pt-4 pr-4 pb-16 pl-4 bg-white shadow-md"
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
