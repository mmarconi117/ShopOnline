const TotalOrders = () => {
    return (
        <div
            className="bg-white rounded-md p-3 basis-1/3 shadow-md"
            id="total-orders-components"
        >
            <div>
                <h1 className="text-[#4A4A4A]">Total orders</h1>
            </div>
            <div className="border-2 my-2 bg-[#E6E0E9] rounded-xl ">
                <div className="py-1 bg-[#EEC643] w-3/5"></div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl font-bold">243k</p>
                </div>
                <div className="flex text-[#1A6D97]">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                            />
                        </svg>
                    </div>
                    <div>
                        <p>+3.5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalOrders;
