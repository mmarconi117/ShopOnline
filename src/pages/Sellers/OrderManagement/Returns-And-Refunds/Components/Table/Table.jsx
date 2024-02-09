import { useEffect, useState } from "react";

import Pagination from "../../../../../../components/Pagination/Pagination";

const Table = ({
    disputes,
    updateCopy,
    disputesCopy,
    getItemSelected,
    isResetPagination,
    resetPagination
}) => {
    const [isAllSelected, setIsAllSelected] = useState(false); // all selected

    const allSelected = (checked) => {
        setIsAllSelected(checked);
        disputes.forEach((item) => (item.selected = checked));
        disputesCopy.forEach((item) => (item.checked = checked));
    };

    const isSelected = (checked, itemIndex) => {
        let updatedItems = [];
        disputes.forEach((item, index) => {
            if (index === itemIndex) {
                item.selected = checked;
            }
            updatedItems.push(item);
        });
        getItemSelected(itemIndex);
        updateCopy(updatedItems);
        resetPagination();
        const allSelected = disputes.every((item) => item.selected);
        setIsAllSelected(allSelected);
    };

    const returnItems = disputesCopy.map((item, index) => {
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
                        checked={item.selected}
                        type="checkbox"
                    />
                </td>
                <td className="py-2">{item.orderNumber}</td>
                <td className="py-2">{item.purchaseOrder}</td>
                <td className="py-2">{item.rma}</td>
                <td className="py-2">{item.customerOrder}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.status}</td>
                <td>{index + 1}</td>
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
                <tbody className="text-center">
                    {disputesCopy.length > 0 ? (
                        returnItems
                    ) : (
                        <tr>
                            <td>No disputes to display at the moment</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <Pagination
                    products={disputes}
                    productsCopy={disputesCopy}
                    updateCopy={updateCopy}
                    isResetPagination={isResetPagination}
                />
            </div>
        </div>
    );
};

export default Table;
