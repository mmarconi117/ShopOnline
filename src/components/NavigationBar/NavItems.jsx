import { useState } from "react";
import { Links } from "./Links";

const NavItems = () => {
    const [dropdown, setDropdown] = useState(false);
    const [sameItem, setSameItem] = useState();

    const openSubMenu = (itemIndex) => {
        // Links.forEach((link) => (link.subMenu = false));
        if (sameItem !== undefined && !Links[itemIndex].subMenu) {
            Links[sameItem].subMenu = false;
            Links[itemIndex].subMenu = true;
        } else {
            Links[itemIndex].subMenu = !Links[itemIndex].subMenu;
        }
        // Links[itemIndex].subMenu = !Links[itemIndex].subMenu;
        setSameItem(itemIndex);
        setDropdown(!dropdown);
    };
    const navItemsComp = Links.map((link, index) => {
        // link.subLinks.forEach((item) => console.log(item.name));
        return (
            <li
                rel="stylesheet"
                href=""
                className="mr-5 cursor-pointer"
            >
                <div
                    className="relative inline-block text-left"
                    key={index}
                >
                    <div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={() => {
                                openSubMenu(index);
                            }}
                        >
                            {link.name}
                            <svg
                                className="-mr-1 h-5 w-5 text-gray-400"
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
                    </div>
                    <div>
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            {link.subMenu ? (
                                link.subLinks.map((sublink, subLinkIndex) => {
                                    return (
                                        <div
                                            className="py-1"
                                            role="none"
                                        >
                                            <a
                                                key={subLinkIndex}
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                                role="menuitem"
                                                id="menu-item-0"
                                            >
                                                {sublink.name}
                                            </a>
                                        </div>
                                    );
                                })
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div>
            <ul className="flex justify-center">{navItemsComp}</ul>
        </div>
    );
};

export default NavItems;
