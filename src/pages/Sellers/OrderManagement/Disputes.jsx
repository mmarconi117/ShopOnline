import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleInsights, updateStatusFilter } from "../../../reducersAndActions/actions/disputeAction";

const mockDisputes = [
  {
    orderNumber: "CHA123",
    price: 50,
    purchaseOrder: "OE123",
    rma: "RMA456",
    customerOrder: "PL789",
    status: "In Review"
  },
  {
    orderNumber: "LMK456",
    price: 75,
    purchaseOrder: "EJS456",
    rma: "RMA789",
    customerOrder: "AJ123",
    status: "Pending Review"
  },
  {
    orderNumber: "WKS789",
    price: 100,
    purchaseOrder: "IJ789",
    rma: "RMA123",
    customerOrder: "456",
    status: "Action Needed"
  },
  {
    orderNumber: "DEF123",
    price: 60,
    purchaseOrder: "PO123",
    rma: "RMA456",
    customerOrder: "CO789",
    status: "In Review"
  },
  {
    orderNumber: "GHI456",
    price: 80,
    purchaseOrder: "PO456",
    rma: "RMA789",
    customerOrder: "CO123",
    status: "Pending Review"
  },
  {
    orderNumber: "JKL789",
    price: 110,
    purchaseOrder: "PO789",
    rma: "RMA123",
    customerOrder: "CO456",
    status: "Action Needed"
  },
  {
    orderNumber: "MNO123",
    price: 70,
    purchaseOrder: "OE123",
    rma: "RMA456",
    customerOrder: "PL789",
    status: "In Review"
  },
  {
    orderNumber: "PQR456",
    price: 90,
    purchaseOrder: "EJS456",
    rma: "RMA789",
    customerOrder: "AJ123",
    status: "Pending Review"
  },
  {
    orderNumber: "STU789",
    price: 120,
    purchaseOrder: "IJ789",
    rma: "RMA123",
    customerOrder: "456",
    status: "Action Needed"
  },
  {
    orderNumber: "VWX123",
    price: 80,
    purchaseOrder: "PO123",
    rma: "RMA456",
    customerOrder: "CO789",
    status: "In Review"
  },
  {
    orderNumber: "HSA123",
    price: 50,
    purchaseOrder: "OP123",
    rma: "RMA678",
    customerOrder: "RE876",
    status: "Closed"
  },
];



const Disputes = ({ disputes, showInsights, toggleInsights, statusFilter, updateStatusFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getDisputesCount = (status) => {
    if (status === 'Closed') {
      return disputes.filter(dispute => dispute.status === 'Closed').length;
    } else {
      return disputes.filter(dispute => dispute.status === status).length;
    }
  };

  const handleStatusChange = (event) => {
    updateStatusFilter(event.target.value);
  };

  const handleFilterButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredDisputes = disputes && disputes.length > 0 ?
    (statusFilter === 'All' ? disputes : disputes.filter(dispute => dispute.status === statusFilter))
    : [];

    return (
      <div>
        <div className="self-center flex w-[967px] max-w-full flex-col items-stretch mt-4 px-5">
          <div className="disputes-header flex justify-between items-center">
            <div>
              <h2>Disputes</h2>
              <p>Insights</p>
              <button className="insights-button" onClick={toggleInsights}>
                {showInsights ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {showInsights && filteredDisputes && filteredDisputes.length > 0 && (
            <div className="insights-section mt-4">
              <div className="additional-boxes grid grid-cols-2 gap-4">
                <div className="bg-white-500 p-4 text-black text-center border border-black">
                  Pending Review ({getDisputesCount("Pending Review")})
                </div>
                <div className="bg-white-500 p-4 text-black text-center border border-black">
                  In Review ({getDisputesCount("In Review")})
                </div>
                <div className="bg-white-500 p-4 text-black text-center border border-black">
                  Action Needed ({getDisputesCount("Action Needed")})
                </div>
                <div className="bg-white-500 p-4 text-black text-center border border-black">Closed ({getDisputesCount("Closed")})</div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="filter" onClick={handleFilterButtonClick}>Filter&nbsp;</button>
                {isDropdownOpen && (
                  <select value={statusFilter} onChange={handleStatusChange} className="filter-dropdown">
                    <option value="All">All</option>
                    <option value="In Review">In Review</option>
                    <option value="Action Needed">Action Needed</option>
                    <option value="Closed">Closed</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                )}
                <button className="download-button text-gray-500"> |  Download</button>
              </div>
              <table className="w-full table-auto border-collapse mt-4">
                <thead>
                  <tr>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Order Number</th>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Purchase Order #</th>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">RMA #</th>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Customer Order #</th>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Price ($)</th>
                    <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredDisputes.map((dispute, index) => (
                    <tr className="w-full border" key={index}>
                      <td className="p-2 text-center border border-black">{dispute.orderNumber}</td>
                      <td className="p-2 text-center border border-black">{dispute.purchaseOrder}</td>
                      <td className="p-2 text-center border border-black">{dispute.rma}</td>
                      <td className="p-2 text-center border border-black">{dispute.customerOrder}</td>
                      <td className="p-2 text-center border border-black">{dispute.price}</td>
                      <td className="p-2 text-center border border-black">{dispute.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );

  }

Disputes.propTypes = {
  disputes: PropTypes.array.isRequired,
  showInsights: PropTypes.bool.isRequired,
  toggleInsights: PropTypes.func.isRequired,
  statusFilter: PropTypes.string.isRequired,
  updateStatusFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  disputes: mockDisputes,
  showInsights: state.disputeReducer.showInsights,
  statusFilter: state.disputeReducer.statusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInsights: () => dispatch(toggleInsights()),
  updateStatusFilter: (status) => dispatch(updateStatusFilter(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Disputes);
