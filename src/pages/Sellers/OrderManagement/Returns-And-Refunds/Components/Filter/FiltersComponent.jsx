import { useEffect, useState } from "react";

const FiltersComponent = ({
    disputes,
    disputesFiltered,
    updateCopy,
    resetFilter,
    resetPagination,
    toggleFilterDisputes
}) => {
    const [filterOptions, setOptions] = useState([
        {
            name: "Order Number",
            selected: false,
            type: "Order"
        },
        {
            name: "Purchase Order #",
            selected: false,
            type: "Purchase"
        },
        {
            name: "RMA #",
            selected: false,
            type: "RMA"
        },
        {
            name: "Customer Order #",
            selected: false,
            type: "CustomerOrder"
        },
        {
            name: "Status",
            selected: false,
            type: "Status"
        }
    ]);
    const [highest, setHighest] = useState(false);
    const [lowest, setLowest] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setIsOpen(!isOpen);
    };

    const optionSelected = (checked, itemIndex, sortBy) => {
        let update = [];
        if (!sortBy) {
            filterOptions.forEach((item, index) => {
                item.selected = false;
                if (index === itemIndex) {
                    item.selected = checked;
                }
                update.push(item);
            });
            setLowest(false);
            setHighest(false);
            filterBy(filterOptions[itemIndex].type, checked);
            setOptions(update);
        } else {
            filterBy("Price", checked, sortBy);
        }
    };
    // price sort by, ascending or descending
    const filterBy = (filterType, checked, sortBy) => {
        if (checked) {
            if (filterType === "Price") {
                if (sortBy === "lowest") {
                    setLowest(true);
                    setHighest(false);
                } else {
                    setLowest(false);
                    setHighest(true);
                }
                const updateFilterOptions = filterOptions.map((item) => {
                    item.selected = false;
                    return item;
                });
                setOptions(updateFilterOptions);
            }
            // let update;
            // switch (filterType) {
            //     case "Order":
            //         update = disputes.toSorted((a, b) =>
            //             a.orderNumber > b.orderNumber ? 1 : b.orderNumber > a.orderNumber ? -1 : 0
            //         );
            //         break;
            //     case "Purchase":
            //         update = disputes.toSorted((a, b) =>
            //             a.purchaseOrder > b.purchaseOrder
            //                 ? 1
            //                 : b.purchaseOrder > a.purchaseOrder
            //                 ? -1
            //                 : 0
            //         );
            //         break;
            //     case "RMA":
            //         update = disputes.toSorted((a, b) =>
            //             a.rma > b.rma ? 1 : b.rma > a.rma ? -1 : 0
            //         );
            //         break;
            //     case "CustomerOrder":
            //         update = disputes.toSorted((a, b) =>
            //             a.customerOrder > b.customerOrder
            //                 ? 1
            //                 : b.customerOrder > a.customerOrder
            //                 ? -1
            //                 : 0
            //         );
            //         break;
            //     case "Price":
            //         if (sortBy === "lowest") {
            //             update = disputes.toSorted((a, b) =>
            //                 a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            //             );
            //             setLowest(true);
            //             setHighest(false);
            //         } else {
            //             update = disputes.toSorted((a, b) =>
            //                 a.price < b.price ? 1 : b.price < a.price ? -1 : 0
            //             );
            //             setLowest(false);
            //             setHighest(true);
            //         }
            //         break;
            //     case "Status":
            //         update = disputes.toSorted((a, b) =>
            //             a.status > b.status ? 1 : b.status > a.status ? -1 : 0
            //         );
            //         break;
            //     default:
            //         break;
            // }
            const obj = {
                filterType: filterType,
                sortBy: sortBy
            };
            toggleFilterDisputes(obj);
            // console.log(disputesFiltered);
            // updateCopy(disputesFiltered);
            // resetPagination();
        } else {
            setLowest(false);
            setHighest(false);
            resetFilter(disputes);
        }
    };

    const filterItems = filterOptions.map((item, index) => {
        return (
            <div
                className="py-1.5 hover:bg-gray-200"
                role="none"
                key={index}
            >
                <label className="text-gray-700 px-4 py-2 text-sm hover:cursor-pointer">
                    <input
                        onChange={(e) => optionSelected(e.target.checked, index)}
                        className="mr-5"
                        checked={item.selected}
                        type="checkbox"
                    />
                    {item.name}
                </label>
            </div>
        );
    });
    return (
        <div
            className="my-5"
            id="filters-option-component"
        >
            <div className="relative inline-block text-left bg">
                <div className="flex">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        onClick={() => {
                            setOpen();
                        }}
                        aria-expanded="true"
                        aria-haspopup="true"
                    >
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
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                            />
                        </svg>
                        Filter
                    </button>
                </div>

                {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
                <div
                    className="absolute bottom-10 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    {isOpen ? (
                        <div>
                            {filterItems}
                            <div
                                className="py-1.5 hover:bg-gray-200"
                                role="none"
                                key={Math.random() * 10}
                            >
                                <label className="flex text-gray-700 px-4 py-1 text-sm hover:cursor-pointer w-full">
                                    <input
                                        onChange={(e) => {
                                            optionSelected(e.target.checked, null, "highest");
                                        }}
                                        className="mr-5"
                                        checked={highest}
                                        type="checkbox"
                                    />
                                    Highest ($)
                                </label>
                            </div>
                            <div
                                className="py-1.5 hover:bg-gray-200"
                                key={Math.random() * 10}
                            >
                                <label className="flex text-gray-700 px-4 py-2 text-sm hover:cursor-pointer w-full">
                                    <input
                                        onChange={(e) => {
                                            optionSelected(e.target.checked, null, "lowest");
                                        }}
                                        className="mr-5"
                                        checked={lowest}
                                        type="checkbox"
                                    />
                                    Lowest ($)
                                </label>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FiltersComponent;
