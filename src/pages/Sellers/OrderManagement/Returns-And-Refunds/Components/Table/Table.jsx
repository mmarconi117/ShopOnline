import { useEffect, useState } from "react";

import Pagination from "../../../../../../components/Pagination/Pagination";

const Table = ({ returns, updateCopy, returnsCopy, getItemSelected }) => {
    const [isAllSelected, setIsAllSelected] = useState(false); // all selected

    const allSelected = (checked) => {
        returnsCopy.forEach((item) => (item.selected = checked));
        setIsAllSelected(checked);
        updateCopy(returnsCopy);
    };

    const isSelected = (checked, itemIndex) => {
        let updatedItems = [];
        returns.forEach((item, index) => {
            if (index === itemIndex) {
                item.selected = checked;
            }
            updatedItems.push(item);
        });
        getItemSelected(itemIndex);
        updateCopy(updatedItems);
        const allSelected = returns.every((item) => item.selected);
        setIsAllSelected(allSelected);
    };

    const returnItems = returnsCopy.map((item, index) => {
        return (
            <tr
                className="border-b-2 hover:bg-gray-200 cursor-pointer"
                key={index}
            >
                <td className="py-2">
                    <input
                        name={index}
                        onChange={(e) => {
                            isSelected(e.target.checked, index);
                        }}
                        checked={returns[index].selected}
                        type="checkbox"
                    />
                </td>
                <td className="py-2">{item.orderNumber}</td>
                <td className="py-2">{item.purchaseOrderNumber}</td>
                <td className="py-2">{item.rmaNumber}</td>
                <td className="py-2">{item.customerOrderNumber}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.status}</td>
            </tr>
        );
    });

    return (
        <div
            className="bg-white shadow p-1"
            id="table-component"
        >
            <table className="w-full h-auto my-5">
                <thead className="border-b-2 ">
                    <tr className="">
                        <th className="py-5">
                            <input
                                onChange={(e) => {
                                    allSelected(e.target.checked);
                                }}
                                checked={isAllSelected}
                                type="checkbox"
                            />
                        </th>
                        <th className="py-2">Order Number</th>
                        <th className="py-2">Purchase Order #</th>
                        <th className="py-2">RMA #</th>
                        <th className="py-2">Customer Order #</th>
                        <th className="py-2">Price ($)</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center">{returnItems}</tbody>
            </table>
            <div>
                <Pagination
                    products={returns}
                    productsCopy={returnsCopy}
                    getProductsCopy={updateCopy}
                />
            </div>
        </div>
    );
};

export default Table;
