const TotalIncome = () => {
    return (
        <div
            className="w-3/5 flex justify-between border-2 mb-5 pt-4 pr-4 pb-16 pl-4 bg-white shadow-md"
            id="total-income-component"
        >
            <div>
                <div className="mb-5">
                    <p>Total Income</p>
                </div>
                <div>
                    <p className="font-bold">24,908</p>
                </div>
            </div>
            <div>
                <div
                    className="w-1/4 h-1/4 rounded-md bg-[#EEC643] p-5 shadow-md"
                    id="legend-color"
                ></div>
            </div>
        </div>
    );
};

export default TotalIncome;
