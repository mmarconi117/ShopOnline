import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// Icons

import LOGO from "../../assets/ICONS/Outline/LOGO.png";

const NavigationBar = () => {
    const [open, setOpen] = useState(true);
    const [arrowDown, setArrowDown] = useState(false);
    const Links = [
        {
            name: "See Deals",
            url: "/",
        },
        {
            name: "Latest arrivals",
            url: "/",
        },
        {
            name: "See Products",
            url: "/",
        },
        {
            name: "Top Of New York",
            url: "/",
        },
    ];
    const linksArr = Links.map((link, index) => {
        return (
            <li
                className="mr-5 cursor-pointer"
                key={index}
            >
                {/* <button type="button">
                    <a className="flex">
                        {link.name}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            data-slot="icon"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </a>
                </button> */}
                <div class="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            {link.name}
                            <svg
                                class="-mr-1 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
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
                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                    >
                        <div
                            class="py-1"
                            role="none"
                        >
                            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0"
                            >
                                Edit
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-1"
                            >
                                Duplicate
                            </a>
                        </div>
                        <div
                            class="py-1"
                            role="none"
                        >
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-2"
                            >
                                Archive
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-3"
                            >
                                Move
                            </a>
                        </div>
                        <div
                            class="py-1"
                            role="none"
                        >
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-4"
                            >
                                Share
                            </a>
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-5"
                            >
                                Add to favorites
                            </a>
                        </div>
                        <div
                            class="py-1"
                            role="none"
                        >
                            <a
                                href="#"
                                class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-6"
                            >
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    });

    const menuIcon = () => {
        if (open) {
            return (
                // open menu icon
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    dataSlot="icon"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            );
        } else {
            // close icon
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
            );
        }
    };

    return (
        <div>
            <nav
                className="shadow-md w-full h-full flex justify-center sm:block sm:m-auto"
                style={{
                    margin: "2rem auto",
                    padding: "2rem",
                    border: "1px solid black",
                    backgroundColor: "rgb(242, 242, 242)",
                }}
            >
                <div
                    className="text-3xl mr-5 sm:hidden md:mb-5 sm:border-b-2 border-black cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {menuIcon()}
                </div>
                <div>
                    <ul className="flex justify-center">{linksArr}</ul>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
