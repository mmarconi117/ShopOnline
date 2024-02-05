import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleInsights, addDispute } from '../../../reducersAndActions/actions/disputeAction';
import PropTypes from 'prop-types';

const Disputes = ({ disputes, showInsights, toggleInsights, addDispute }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [price, setPrice] = useState('');

  const handleAddDispute = () => {
    if (!orderNumber || !price) {
      alert('Please enter order number and price')
    }
    if (orderNumber && price) {
      addDispute({
        orderNumber,
        price,
        purchaseOrder: Math.floor(Math.random() * 100) + 1,
        rma: Math.floor(Math.random() * 100) + 1,
        customerOrder: Math.floor(Math.random() * 100) + 1,
        status: "In Review"
      });
      setOrderNumber('');
      setPrice('');
    }
  };

  const getDisputesCount = (status) => {
    // Assuming disputes is an array of objects with a 'status' property
    const inReviewDisputes = disputes.filter(dispute => dispute.status === status);
    return inReviewDisputes.length;
  };


  return (
    <div>
      <div className="self-center flex w-[967px] max-w-full flex-col items-stretch mt-4 px-5">
        <div className="disputes-header">
          <h2>Disputes</h2>
          <p>Insights</p>
          <button className="insights-button" onClick={toggleInsights}>
            {showInsights ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="add-dispute-form mt-2 flex items-center">
          <label htmlFor="orderNumber">Order Number: &nbsp;</label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="price" className="mr-2">Price: </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mr-2"
          />
          <button onClick={handleAddDispute}>Add Dispute</button>
        </div>


        <div className="search-box mt-4">
          {/* Your search input */}
        </div>
        {showInsights && disputes && disputes.length > 0 && (
          <div className="insights-section mt-4">
            <div className="additional-boxes grid grid-cols-2 gap-4">
              <div className="bg-white-500 p-4 text-black text-center border border-black">Pending Review</div>
              <div className="bg-white-500 p-4 text-black text-center border border-black">In Review {getDisputesCount("In Review")}</div>
              <div className="bg-white-500 p-4 text-black text-center border border-black">Action Needed</div>
              <div className="bg-white-500 p-4 text-black text-center border border-black">Closed</div>
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
                {disputes.map((dispute, index) => (
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

};

Disputes.propTypes = {
  disputes: PropTypes.array.isRequired,
  showInsights: PropTypes.bool.isRequired,
  toggleInsights: PropTypes.func.isRequired,
  addDispute: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  disputes: state.disputeReducer.disputes,
  showInsights: state.disputeReducer.showInsights,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInsights: () => dispatch(toggleInsights()),
  addDispute: (newDispute) => dispatch(addDispute(newDispute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Disputes);
