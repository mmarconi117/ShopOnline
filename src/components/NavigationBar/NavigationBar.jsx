import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Icons

import LOGO from "../../assets/ICONS/Outline/LOGO.png";

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
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
                className="mr-5 "
                key={index}
            >
                <a>{link.name}</a>
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
                className="shadow-md w-full h-full flex justify-center cursor-pointer sm:block sm:m-auto"
                style={{
                    margin: "2rem auto",
                    padding: "2rem",
                    border: "1px solid black",
                    backgroundColor: "rgb(242, 242, 242)",
                }}
            >
                <div
                    className="text-3xl mr-5 sm:hidden md:mb-5 sm:border-b-2 border-black"
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
