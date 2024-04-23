// Components
import TotalOrders from "./Components/Overview-product-sales/TotalOrders";
import TotalProductsSold from "./Components/Overview-product-sales/TotalProductsSold";
import TotalEarnings from "./Components/Overview-product-sales/TotalEarnings";
import CurrentOrders from "./Components/Overall-Orders/CurrentOrders";
import ReadyToShip from "./Components/Overall-Orders/ReadyToShip";
import CancelledOrders from "./Components/Overall-Orders/CancelledOrders";
import OrdersDispute from "./Components/Overall-Orders/OrderDispute";
import OverallSales from "./Components/Overall-sales-graph/OverallSales";

const Overview = () => {
    return (
        <div className="w-full flex flex-col items-stretch px-3 py-8 gap-8">
            <p className=" text-2xl font-medium mb-[-4px]">Overview</p>
            {/* Before the completion of 3-steps verification: Become a seller banner / After: three containers with orders information*/}
            <div className="w-full flex justify-between item-stretch gap-2" id="overview-products-sales">
                <TotalOrders />
                <TotalProductsSold />
                <TotalEarnings />
            </div>
            {/* Desktop Version */}
            <div className="flex justify-around rounded-md shadow-md bg-white py-3">
                <CurrentOrders />
                <ReadyToShip />
                <CancelledOrders />
                <OrdersDispute />
            </div>
            
            <OverallSales />
        </div>
    );
};

export default Overview;
