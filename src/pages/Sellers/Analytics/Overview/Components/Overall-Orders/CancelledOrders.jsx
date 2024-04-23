const CancelledOrders = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-between xl:justify-start gap-4 items-center p-[10px] basis-1/4 border-r-2 border-solid border-[#EEC643]" id="current-orders-components">
            <div className="bg-stone-200 rounded-full p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fill="#EEC643"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </div>
            <div className="flex flex-col justify-between items-center xl:items-start gap-[10px] grow">
                <div className="max-xl:text-center leading-5">Cancelled</div>
                <div className="text-2xl font-bold leading-7">2</div>
            </div>
        </div>
    );
};

export default CancelledOrders;
