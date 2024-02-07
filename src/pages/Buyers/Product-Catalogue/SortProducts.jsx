import { useState } from "react";

const SortProducts = () => {
    const [clicked, setClicked] = useState(true);
    const [menuTitle, setMenuTitle] = useState("Newest");
    const [subMenuTitle, setSubMenuTitle] = useState("Oldest");
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        if (clicked) {
            setMenuTitle(subMenuTitle);
            setSubMenuTitle(menuTitle);
        } else {
            setSubMenuTitle(menuTitle);
            setMenuTitle(subMenuTitle);
        }
        // setIsOpen(!isOpen)
        setClicked(!clicked);
        setIsOpen(!isOpen);
    };
    return (
        <div
            id="sort-products"
            className="flex items-center gap-5"
        >
            {/* sort by div */}
            <p className="hidden lg:block text-base font-semibold text-[#605D64]">Sort by</p>
            {/* sort by div */}
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    className="inline-flex w-full justify-center tight-[0.07px] gap-[10px] border border-solid border-[#2284B6] rounded-md bg-white px-[30px] py-[14px] text-[14px] font-semibold text-[#2284B6] shadow-sm"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    value={menuTitle}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {menuTitle}
                    <svg
                        className="-mr-1 h-5 w-5 text-[#2284B6]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

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
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    {isOpen ? (
                        <div
                            className="py-1"
                            role="none"
                        >
                            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                            <button
                                className="w-full block px-4 py-2 text-sm text-[#2284B6] hover:cursor-pointer hover:bg-gray-100"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                type="button"
                                value={subMenuTitle}
                                onClick={onClick}
                            >
                                {subMenuTitle}
                            </button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SortProducts;
