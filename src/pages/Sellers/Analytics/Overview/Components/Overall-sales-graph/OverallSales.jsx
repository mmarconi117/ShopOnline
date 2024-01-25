import TotalInventory from "./Graph-legend/TotalInventory";
import TotalIncome from "./Graph-legend/TotalIncome";
import Withdrawal from "./Graph-legend/Withdrawal";

const OverallSales = () => {
    return (
        <div
            className=""
            id="overall-sales-component"
        >
            <div>
                <TotalInventory />
                <TotalIncome />
                <Withdrawal />
            </div>
            <div></div>
        </div>
    );
};

export default OverallSales;
