const TotalEarnings = () => {
    return (
        <div
            className="bg-white  rounded-md p-3 basis-1/3 shadow-md "
            id="total-earnings-component"
        >
            <div>
                <h1 className="text-[#4A4A4A]">Total earnings</h1>
            </div>
            <div className="border-2 my-2 bg-[#E6E0E9] rounded-xl ">
                <div className="py-1 bg-[#EEC643] w-5/6"></div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl font-bold">$98,768.09</p>
                </div>
                <div className="flex text-[#1A6D97] align-sub">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="">+3.5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalEarnings;
