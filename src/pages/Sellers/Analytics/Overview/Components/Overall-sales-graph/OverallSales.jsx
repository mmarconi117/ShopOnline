import TotalInventory from "./Chart-Legend/TotalInventory";
import TotalIncome from "./Chart-Legend/TotalIncome";
import Withdrawal from "./Chart-Legend/Withdrawal";
import ChartComponent from "./Chart/ChartComponent";
import FinanceSummary from "../Finance-summary/FinanceSummary";
import FinanceSummary2 from "../Finance-summary/FinanceSummary2";

const OverallSales = () => {
    return (
        <div
            className="flex flex-col justify-between gap-8 items-stretch"
            id="overall-sales-component"
        >
            <div className="flex flex-col-reverse xl:flex-row gap-8">
                <div className="flex xl:flex-col gap-2 xl:gap-8 justify-between items-stretch xl:basis-1/4 xl:grow-0">
                    <TotalInventory />
                    <TotalIncome />
                    <Withdrawal />
                </div>
                <ChartComponent />
            </div>
            <div className="flex flex-col xl:flex-row gap-8">
                <FinanceSummary />
                <FinanceSummary2 />
            </div>
        </div>
    );
};

export default OverallSales;
