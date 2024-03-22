import React from "react";
import { connect } from "react-redux";
import { editShippingAddress } from "../../../reducersAndActions/actions/checkoutEditAction";
import { updateShippingForm } from "../../../reducersAndActions/actions/shippingFormAction";
import shippingFormReducer from "../../../reducersAndActions/reducers/shippingFormReducer";

const ShippingAddressForm = ({ shippingForm, updateShippingForm, editShippingAddress }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateShippingForm({ ...shippingForm, [name]: value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    editShippingAddress()
    updateShippingForm(shippingForm); // Dispatch action to update shipping address
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="border border-gray-300 mb-4 p-4">
        <div className="mb-2">
          <label htmlFor="firstName" className="block mb-1">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={shippingForm.firstName}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lastName" className="block mb-1">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={shippingForm.lastName}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block mb-1">Address*</label>
          <input
            type="text"
            name="address"
            value={shippingForm.address}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="city" className="block mb-1">City*</label>
          <input
            type="text"
            name="city"
            value={shippingForm.city}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="state" className="block mb-1">State*</label>
          <input
            type="text"
            name="state"
            value={shippingForm.state}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="zipCode" className="block mb-1">Zip Code*</label>
          <input
            type="text"
            name="zipCode"
            value={shippingForm.zipCode}
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="contactInfo" className="block mb-1">Contact Information*</label>
          <input
            type="text"
            name="contactInfo"
            value={shippingForm.contactInfo}
            placeholder="999-999-9999"
            onChange={handleInputChange}
            className="mb-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  shippingForm: state.shippingFormReducer,
});

const mapDispatchToProps = {
  updateShippingForm,
  editShippingAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddressForm);
