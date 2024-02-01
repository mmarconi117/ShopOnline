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
        <div className="flex flex-col items-stretch px-12 xl:px-16 py-8 gap-8">
            <div>
                <p className="text-center xl:text-left text-2xl font-medium mb-[-4px]">Overview</p>
            </div>
            {/* Before the completion of 3-steps verification: Become a seller banner / After: three containers with orders information*/}
            <div className="flex flex-col xl:flex-row justify-between item-stretch gap-4" id="overview-products-sales">
                <TotalOrders />
                <TotalProductsSold />
                <TotalEarnings />
            </div>
            {/* Desktop Version */}
            <div className="hidden xl:flex justify-around rounded-md shadow-md bg-white gap-5 p-3">
                <CurrentOrders />
                <div className="w-[1px] bg-[#EEC643] h-4/6 my-auto shrink-0"></div>
                <ReadyToShip />
                <div className="w-[1px] bg-[#EEC643] h-4/6 my-auto shrink-0"></div>
                <CancelledOrders />
                <div className="w-[1px] bg-[#EEC643] h-4/6 my-auto shrink-0"></div>
                <OrdersDispute />
            </div>
            {/* Mobile Version */}
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row xl:hidden justify-around items-stretch bg-white p-3 ">
                <div className="flex flex-col justify-between item-stretch gap-4">
                    <CurrentOrders />
                    <CancelledOrders />
                </div>
                <div className="flex flex-col justify-between item-stretch gap-4">
                    <ReadyToShip />
                    <OrdersDispute />
                </div>
            </div>
            <OverallSales />
        </div>
    );
};

export default Overview;
