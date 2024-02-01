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
        <div className="add-dispute-form">
          <label htmlFor="orderNumber">Order Number: </label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleAddDispute}>Add Dispute</button>
        </div>
        <div className="search-box">
          {/* Your search input */}
        </div>
        {showInsights && disputes && disputes.length > 0 && (
          <div className="insights-section">
            <table className="w-full table-auto border-collapse">
  <thead>
    <tr>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">Order Number</th>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">Purchase Order #</th>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">RMA #</th>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">Customer Order #</th>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">Price ($)</th>
      <th className="p-5 text-zinc-700 text-base leading-6 whitespace-nowrap border p-2">Status</th>
    </tr>
  </thead>
  <tbody className="bg-white">
    {disputes.map((dispute, index) => (
      <tr className="w-full border" key={index}>
        <td className="p-2 text-center border">{dispute.orderNumber}</td>
        <td className="p-2 text-center border">{dispute.purchaseOrder}</td>
        <td className="p-2 text-center border">{dispute.rma}</td>
        <td className="p-2 text-center border">{dispute.customerOrder}</td>
        <td className="p-2 text-center border">{dispute.price}</td>
        <td className="p-2 text-center border">{dispute.status}</td>
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
