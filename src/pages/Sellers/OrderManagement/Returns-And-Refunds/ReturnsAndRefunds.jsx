import { useEffect, useState } from "react";
import Download from "./Components/Download/Download";
import Feedback from "./Components/Feedback/Feedback";
import FiltersComponent from "./Components/Filter/FiltersComponent";
import Completed from "./Components/ReturnsOverview/Completed";
import Initiated from "./Components/ReturnsOverview/Initiated";
import Received from "./Components/ReturnsOverview/Received";
import SearchBar from "./Components/Search-bar/SearchBar";
import Table from "./Components/Table/Table";

function ReturnsAndRefunds() {
    const [returns, setReturns] = useState([
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        }
    ]);
    const [returnsCopy, setReturnsCopy] = useState([]);
    const [itemIndex, setItemIndex] = useState(undefined); // selected item index

    useEffect(() => {
        setReturnsCopy(returns);
    }, []);

    const updateCopy = (update) => {
        setReturnsCopy(update);
    };

    const resetFilter = (returns) => {
        setReturnsCopy(returns);
    };
    // function to update download component
    const getItemSelected = (itemIndex) => {
        setItemIndex(itemIndex);
    };

    return (
        <div className="self-center flex w-full max-w-full flex-col items-stretch p-5">
            <div className="flex">
                <div>
                    <p className="font-bold text-2xl">Returns and Refunds</p>
                </div>
                <div className="ml-5 ">
                    <p className="inline-block align-sub">0 Total</p>
                </div>
            </div>
            <div>
                <SearchBar
                    returns={returns}
                    returnsCopy={returnsCopy}
                />
            </div>
            <div className="flex justify-center my-5">
                <Initiated />
                <Received />
                <Completed />
            </div>
            <div>
                <FiltersComponent
                    returns={returns}
                    returnsCopy={returnsCopy}
                    resetFilter={resetFilter}
                    updateCopy={updateCopy}
                />
                <Download
                    returnsCopy={returnsCopy}
                    itemIndex={itemIndex}
                />
            </div>
            <div>
                <Table
                    returns={returns}
                    returnsCopy={returnsCopy}
                    updateCopy={updateCopy}
                    getItemSelected={getItemSelected}
                />
            </div>
            <div className="my-5">
                <Feedback />
            </div>
        </div>
    );
}

export default ReturnsAndRefunds;
