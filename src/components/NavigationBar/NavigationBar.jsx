import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavItems from "./NavItems";

// Icons

import LOGO from "../../assets/ICONS/Outline/LOGO.png";

const NavigationBar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <div style={{ border: "1px solid black", backgroundColor: "rgb(242, 242, 242)" }}>
                <nav
                    className="w-full h-full flex justify-start "
                    style={{
                        margin: "2rem auto",
                        width: "75%",
                    }}
                >
                    <div
                        className="text-3xl mr-5 mt-1  cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            // open menu icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                dataslot="icon"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        ) : (
                            // close icon
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
                        )}
                    </div>
                    <div>
                        <NavItems />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavigationBar;
