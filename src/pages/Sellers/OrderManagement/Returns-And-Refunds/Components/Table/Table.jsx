import { useState } from "react";

const Table = () => {
    const [allSelected, setAllSelected] = useState(false);

    const isAllSelected = () => {};

    const isSelected = () => {};

    return (
        <div
            className="bg-white shadow p-5"
            id="table-component"
        >
            <div className="flex my-5">
                <div className="mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                        />
                    </svg>
                </div>
                <div>Filter</div>
            </div>
            <div className="flex">
                <div>
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
                            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        />
                    </svg>
                </div>
                <div>
                    <p>Download</p>
                </div>
            </div>
            <table className="w-full h-auto my-5">
                <thead className="border-b-2 ">
                    <tr className="">
                        <th className="py-5">
                            <input type="checkbox" />
                        </th>
                        <th className="py-2">Order Number</th>
                        <th className="py-2">Purchase Order #</th>
                        <th className="py-2">RMA #</th>
                        <th className="py-2">Customr Order #</th>
                        <th className="py-2">Price ($)</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="border-b">
                        <td className=" py-2">
                            <input type="checkbox" />
                        </td>
                        <td className=" py-2">Testing</td>
                        <td className=" py-2">Testing</td>
                        <td className=" py-2">Testing</td>
                        <td className=" py-2">Testing</td>
                        <td className=" py-2">Testing</td>
                        <td className=" py-2">Testing</td>
                    </tr>
                    <tr className="border-b-2 ">
                        <td className="py-2">
                            <input type="checkbox" />
                        </td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                    </tr>
                    <tr className="border-b-2 ">
                        <td className="py-2">
                            <input type="checkbox" />
                        </td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                    </tr>
                    <tr className="border-b-2 ">
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                        <td className="py-2">Testing</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
