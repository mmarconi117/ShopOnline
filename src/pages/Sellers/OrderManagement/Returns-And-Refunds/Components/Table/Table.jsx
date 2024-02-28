import { useState } from "react";

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
                <td className="py-2 pr-5 text-center">
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
            </tr>
        );
    });

    return (
        <div
            className="bg-white shadow p-1 overflow-auto"
            id="table-component"
        >
            <table className="w-full h-auto my-5 min-w-[900px]">
                <thead className="border-b-2 ">
                    <tr className="">
                        <th className="py-5 pr-5 text-center">
                            <input
                                onChange={(e) => {
                                    allSelected(e.target.checked);
                                }}
                                checked={isAllSelected}
                                type="checkbox"
                            />
                        </th>
                        <th className="py-2 text-left">Order Number</th>
                        <th className="py-2 text-left">Purchase Order #</th>
                        <th className="py-2 text-left">RMA #</th>
                        <th className="py-2 text-left">Customer Order #</th>
                        <th className="py-2 text-left">Price ($)</th>
                        <th className="py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="text-left">
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
