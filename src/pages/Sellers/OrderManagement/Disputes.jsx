import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleInsights, addDispute } from '../../../reducersAndActions/actions/disputeAction';
import PropTypes from 'prop-types';

const Disputes = ({ disputes, showInsights, toggleInsights, addDispute }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [price, setPrice] = useState('');

  const handleAddDispute = () => {
    // Validate the form fields, you can add more validation if needed
    if (orderNumber && price) {
      addDispute({
        orderNumber,
        price,
        purchaseOrder: Math.floor(Math.random() * 100) + 1,
        rma: Math.floor(Math.random() * 100) + 1,
        customerOrder: Math.floor(Math.random() * 100) + 1,
      });
      // Clear the form after adding the dispute
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
            <table>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Purchase Order #</th>
                  <th>RMA #</th>
                  <th>Customer Order #</th>
                  <th>Price ($)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {disputes.map((dispute, index) => (
                  <tr key={index}>
                    <td>{dispute.orderNumber}</td>
                    <td>{dispute.purchaseOrder}</td>
                    <td>{dispute.rma}</td>
                    <td>{dispute.customerOrder}</td>
                    <td>{dispute.price}</td>
                    <td>{dispute.status}</td>
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
