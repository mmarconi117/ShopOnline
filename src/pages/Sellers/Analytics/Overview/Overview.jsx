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
        <div className="self-center flex w-3/4 flex-col items-stretch m-5 p-5 ">
            <div>
                <p className="text-2xl font-bold">Overview</p>
            </div>
            <div
                className="flex justify-between w-full my-5"
                id="overview-products-sales"
            >
                <TotalOrders />
                <TotalProductsSold />
                <TotalEarnings />
            </div>
            <div className="flex w-full rounded-md shadow-md bg-white my-5 ">
                <CurrentOrders />
                <div className="border-r-2 border-r-[#EEC643] h-3/5 my-auto"></div>
                <ReadyToShip />
                <div className="border-r-2 border-r-[#EEC643] h-3/5 my-auto"></div>
                <CancelledOrders />
                <div className="border-r-2 border-r-[#EEC643] h-3/5 my-auto"></div>
                <OrdersDispute />
            </div>
            <div className="my-5">
                <OverallSales />
            </div>
        </div>
    );
};

export default Overview;
