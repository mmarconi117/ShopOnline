import { useState, useEffect } from "react";

const FilterByBrand = () => {
    return (
        <div
            id="product-brand-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div id="search-container">
                    <div className="mb-5">
                        <p className="font-bold text-2xl">BRAND</p>
                    </div>
                    <div
                        id="search-bar"
                        className="mb-5"
                    >
                        <label className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <input
                                type="text"
                                className="border-2 p-1 rounded-xl placeholder:text-gray-500 placeholder:px-5"
                                placeholder="Search"
                            />
                        </label>
                    </div>
                </div>
                {/* product brands */}
                <div id="input-gruops-container products-brand">
                    <div className="mt-2 ">
                        <div className="mt-2">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                Samsung
                            </label>
                        </div>
                        <div className="mt-2 ">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                ScanFrost
                            </label>
                        </div>
                        <div className="mt-2 ">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                World Elite
                            </label>
                        </div>
                        <div className="mt-2 ">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                LG
                            </label>
                        </div>
                        <div className="mt-2 ">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                Haier Thermoocool
                            </label>
                        </div>
                        <div className="mt-2 ">
                            <label className="flex items-center text-2xl">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="price"
                                    className="mr-5 w-6 h-6 border-2"
                                />
                                915 Generation
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByBrand;
