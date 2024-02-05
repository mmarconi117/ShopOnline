const SearchBar = ({ returns, returnsCopy }) => {
    const onChange = (e) => {
        const userInput = e;

        let update = [];

        returns.forEach((item) => {
            if (
                userInput == item.orderNumber ||
                userInput == item.purchaseOrderNumber ||
                userInput == item.rmaNumber ||
                userInput == item.customerOrderNumber
            ) {
                update.push(item);
            }
        });
    };

    return (
        <div id="search-bar-component">
            <div className="flex w-full border-2 p-3 rounded-md">
                <div className="mr-5">
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
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
                <div className="w-full">
                    <input
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Search Purchase Order #, RMA #, Customer Order #"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
