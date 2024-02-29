import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleInsights, updateStatusFilter } from "../../../reducersAndActions/actions/disputeAction";
import Info from "../../../assets/ICONS/info.svg"
import arrowDown from "../../../assets/ICONS/ArrowDown.svg";
import rightArrow from "../../../assets/ICONS/RightArrow.svg";
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
      <div className="flex flex-col items-stretch px-7 py-4 font-Roboto">
        <div className='flex gap-3 items-center'>
          <p className='text-3xl leading-[52px] font-semibold'>Disputes</p>
          <div className='flex gap-2'>
            <img src={Info} alt="info" />
            <p className='text-2xl leading-10'>Total</p>
          </div>
        </div>
        <div className="flex gap-3 items-stretch">
          <p className='leading-3'>Insights</p>
          <button className="insights-button" onClick={toggleInsights}>
            {showInsights ? 
            (<div className='flex gap-2 items-stretch'>
              <p className='leading-3'>Hide</p>
              <img src={arrowDown} alt="arrowDown" />
            </div>) 
            : 
            (<div className='flex gap-1 items-stretch'>
              <p className='leading-3'>Show</p>
              <img src={rightArrow} alt="rightArrow" />
            </div>)
            }
          </button>
        </div>

        {showInsights && filteredDisputes && filteredDisputes.length > 0 && (
          <div className='mt-5 flex flex-col items-stretch'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 xl:px-16">
              <div className="lg:max-w-[300px] min-w-[160px] bg-white-500 py-4 bg-white text-black text-center border-t-4 border-[#EEC643] rounded-t-md flex flex-col items-center">
                <p className='text-xl'>Pending Review</p>
                <p className='text-[40px] font-bold leading-[60px]'>{getDisputesCount("Pending Review")}</p>
                <button className='self-stretch pt-4 flex gap-2 items-center justify-center border-t border-[#CAC5CD] mt-4'>
                  <p>View Returns</p>
                  <img src={rightArrow} alt="rightArrow" />
                </button>
              </div>
              <div className="lg:max-w-[300px] min-w-[160px] bg-white-500 py-4 bg-white text-black text-center border-t-4 border-[#EEC643] rounded-t-md flex flex-col items-center">
                <p className='text-xl'>In Review</p>
                <p className='text-[40px] font-bold leading-[60px]'>{getDisputesCount("In Review")}</p>
                <button className='self-stretch pt-4 flex gap-2 items-center justify-center border-t border-[#CAC5CD] mt-4'>
                  <p>View Returns</p>
                  <img src={rightArrow} alt="rightArrow" />
                </button>
              </div>
              <div className="lg:max-w-[300px] min-w-[160px] bg-white-500 py-4 bg-white text-black text-center border-t-4 border-[#EEC643] rounded-t-md flex flex-col items-center">
                <p className='text-xl'>Action Needed</p>
                <p className='text-[40px] font-bold leading-[60px]'>{getDisputesCount("Action Needed")}</p>
                <button className='self-stretch pt-4 flex gap-2 items-center justify-center border-t border-[#CAC5CD] mt-4'>
                  <p>View Returns</p>
                  <img src={rightArrow} alt="rightArrow" />
                </button>
              </div>
              <div className="lg:max-w-[300px] min-w-[160px] bg-white-500 py-4 bg-white text-black text-center border-t-4 border-[#EEC643] rounded-t-md flex flex-col items-center">
                <p className='text-xl'>Closed</p>
                <p className='text-[40px] font-bold leading-[60px]'>{getDisputesCount("Closed")}</p>
                <button className='self-stretch pt-4 flex gap-2 items-center justify-center border-t border-[#CAC5CD] mt-4'>
                  <p>View Returns</p>
                  <img src={rightArrow} alt="rightArrow" />
                </button>
              </div>
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
          </div>
        )}
        <table className="w-full table-auto border-collapse mt-4">
              <thead>
                <tr>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Order Number</th>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Purchase Order #</th>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">RMA #</th>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Customer Order #</th>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Price ($)</th>
                  <th className="text-zinc-700 text-base leading-6 whitespace-nowrap border border-black p-2">Status</th>
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

            {/* <table className="w-full h-auto my-5 min-w-[900px]">
                <thead className="border-b-2 ">
                    <tr>
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
            </table> */}
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
