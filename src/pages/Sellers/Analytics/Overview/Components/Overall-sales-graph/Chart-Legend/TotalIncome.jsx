const TotalIncome = () => {
    return (
        <div
            className="flex min-h-[130px] min-w-[180px] justify-between items-stretch rounded-lg py-3 px-6 bg-white shadow-md grow xl:grow-0"
            id="total-income-component"
        >
            <div className="flex flex-col justify-start items-start gap-[6px]">
                <p>Total income</p>
                <div className="text-2xl leading-10 font-semibold">24,908</div>
            </div>
            <div className="w-7 h-7 bg-[#EEC643] rounded-md"/>
        </div>
    );
};

export default TotalIncome;
