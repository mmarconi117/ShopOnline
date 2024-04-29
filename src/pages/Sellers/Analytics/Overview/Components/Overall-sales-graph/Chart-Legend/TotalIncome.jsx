import { getTotalEarnings, getWithdrawals } from "../../../DashboardComputations";

const TotalIncome = () => {

    //Get total income.
    const getTotalIncome = () => {

        const earnings = parseFloat(getTotalEarnings());
        const withdrawals = parseFloat(getWithdrawals());
        return (earnings - withdrawals).toFixed(2);
    };

    return (
        <div
            className="max-xl:basis-1/3 flex xl:min-h-[130px] xl:min-w-[180px] justify-between items-stretch rounded-lg py-4 px-1 xl:py-3 xl:px-6 bg-white shadow-md grow xl:grow-0"
            id="total-income-component"
        >
            <div className="flex flex-col justify-start items-start gap-[6px]">
                <p>Total income</p>
                {/*<div className="text-2xl leading-10 font-semibold">24,908</div>*/}
                <div className="text-2xl leading-10 font-semibold">${getTotalIncome()}</div>
            </div>
            <div className="w-7 h-7 bg-[#EEC643] rounded-md" />
        </div>
    );
};

export default TotalIncome;
