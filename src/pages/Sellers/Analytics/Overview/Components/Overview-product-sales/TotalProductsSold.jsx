const TotalProductsSold = () => {
    return (
        <div
            className="bg-white rounded-md p-[7px] xl:p-3 basis-1/3 shadow-md"
            id="total-products-sold"
        >
            <h1 className="text-[#4A4A4A] max-xl:text-center">Product sold</h1>
            
            <div className="flex flex-col-reverse xl:flex-col ">
                <div className="border-2 my-2 bg-[#E6E0E9] rounded-xl">
                    <div className="py-1 bg-[#EEC643] w-5/6"></div>
                </div>
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <p className="text-lg xl:text-2xl font-bold">$9,878.50</p>
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
                                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                                />
                            </svg>
                        </div>
                        <div>
                            <p>+3.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalProductsSold;
