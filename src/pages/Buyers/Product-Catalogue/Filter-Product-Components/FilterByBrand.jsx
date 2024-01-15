import { useState, useEffect } from "react";

const FilterByBrand = () => {
    return (
        <div
            id="product-brand-component"
            className="border-b-2 border-gray-400"
        >
            <div id="search-container">
                <div>
                    <p className="font-bold">Brand</p>
                </div>
                <div id="search-bar">
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
                            className="border-2  rounded-xl placeholder:text-gray-500 placeholder:px-5"
                            placeholder="Search"
                        />
                    </label>
                </div>
            </div>
            <div id="input-gruops-container">
                <div className="">
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            Samsung
                        </label>
                    </div>
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            ScanFrost
                        </label>
                    </div>
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            World Elite
                        </label>
                    </div>
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            LG
                        </label>
                    </div>
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            Haier Thermoocool
                        </label>
                    </div>
                    <div class="mx-5 mt-2 ">
                        <label className="flex items-center text-2xl">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="price"
                                className="mr-5 w-8 h-8 border-2"
                            />
                            915 Generation
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByBrand;
