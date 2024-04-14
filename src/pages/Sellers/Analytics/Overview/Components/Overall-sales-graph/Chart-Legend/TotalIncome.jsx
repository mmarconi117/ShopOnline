const TotalIncome = () => {
    return (
        <div
            className="max-xl:basis-1/3 flex xl:min-h-[130px] xl:min-w-[180px] justify-between items-stretch rounded-lg py-4 px-1 xl:py-3 xl:px-6 bg-white shadow-md grow xl:grow-0"
            id="total-income-component"
        >
            <div className="flex flex-col justify-between xl:justify-start items-start gap-[6px] max-w-min">
                <p className="leading-5">Total income</p>
                <div className="text-lg xl:text-2xl leading-10 font-semibold">24,908</div>
            </div>
            <div className="w-4 h-4 xl:w-7 xl:h-7 bg-[#EEC643] rounded-md"/>
        </div>
    );
};

export default TotalIncome;
