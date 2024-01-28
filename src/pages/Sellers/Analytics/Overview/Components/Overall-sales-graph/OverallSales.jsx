import TotalInventory from "./Chart-Legend/TotalInventory";
import TotalIncome from "./Chart-Legend/TotalIncome";
import Withdrawal from "./Chart-Legend/Withdrawal";
import ChartComponent from "./Chart/ChartComponent";
import FinanceSummary from "../Finance-summary/FinanceSummary";
import FinanceSummary2 from "../Finance-summary/FinanceSummary2";

const OverallSales = () => {
    return (
        <div
            className="flex justify-between "
            id="overall-sales-component"
        >
            <div className="w-3/5">
                <TotalInventory />
                <TotalIncome />
                <Withdrawal />
                <FinanceSummary />
            </div>
            <div className="w-full h-full ">
                <ChartComponent />
                <FinanceSummary2 />
            </div>
        </div>
    );
};

export default OverallSales;
