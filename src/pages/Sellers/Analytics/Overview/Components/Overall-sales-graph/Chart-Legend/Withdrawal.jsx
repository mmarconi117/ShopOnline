const Withdrawal = () => {

    //Get all withdrawals(expenses)
    const getWithdrawals = () => {
        let expenses = +3;
        return `$` + expenses.toFixed(2);

    };

    return (
        <div
            className="max-xl:basis-1/3 flex xl:min-h-[130px] xl:min-w-[180px] justify-between items-stretch rounded-lg py-4 px-1 xl:py-3 xl:px-6 bg-white shadow-md"
            id="withdrawal-component"
        >
            <div className="flex flex-col justify-start items-start gap-[6px]">
                <p>Withdrawal</p>
                {/*<div className="text-2xl leading-10 font-semibold">24,908</div>*/}
                <div className="text-2xl leading-10 font-semibold">{getWithdrawals()}</div>
            </div>
            <div className="w-7 h-7 bg-[#E46962] rounded-md" />
        </div>
    );
};

export default Withdrawal;
