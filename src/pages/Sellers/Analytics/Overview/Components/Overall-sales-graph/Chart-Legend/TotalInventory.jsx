import { getTotalInventory } from "../../../DashboardComputations";

const TotalInventory = () => {

    const getTotal_Inventory = () => {
        const inventory = parseFloat(getTotalInventory());
        return inventory;
    };

    return (
        <div
            className="flex min-h-[130px] min-w-[180px] justify-between items-stretch rounded-lg py-3 px-6 bg-white shadow-md grow xl:grow-0"
            id="total-inventory-component"
        >
            <div className="flex flex-col justify-start items-start gap-[6px]">
                <p className="pr-2">Total Inventory</p>
                {/*<div className="text-2xl leading-10 font-semibold">24,908</div>*/}
                <div className="text-2xl leading-10 font-semibold">{getTotal_Inventory()}</div>
            </div>
            <div className="w-7 h-7 bg-[#2284B6] rounded-md" />
        </div>
    );
};

export default TotalInventory;
