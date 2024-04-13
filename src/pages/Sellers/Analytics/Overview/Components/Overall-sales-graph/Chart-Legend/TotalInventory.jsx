const TotalInventory = () => {
    return (
        <div
            className="flex xl:min-h-[130px] xl:min-w-[180px] justify-between items-stretch rounded-lg py-4 px-2 xl:py-3 xl:px-6 bg-white shadow-md grow xl:grow-0 max-xl:basis-1/3"
            id="total-inventory-component"
        >
            <div className="flex flex-col justify-between xl:justify-start items-start gap-[6px]">
                <p>Total Inventory</p>
                <div className="text-lg xl:text-2xl leading-10 font-semibold">24,908</div>
            </div>
            <div className="w-4 h-4 xl:w-7 xl:h-7 bg-[#2284B6] rounded-md"/>
        </div>
    );
};

export default TotalInventory;
