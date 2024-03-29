import React from "react";
import { connect } from "react-redux";
import { editShippingAddress } from "../../../reducersAndActions/actions/checkoutEditAction";
import { updateShippingForm } from "../../../reducersAndActions/actions/shippingFormAction";
import shippingFormReducer from "../../../reducersAndActions/reducers/shippingFormReducer";

const ShippingAddressForm = ({ shippingForm, updateShippingForm, editShippingAddress }) => {
  console.log(shippingForm)
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
          <div className="mb-2">
            <label htmlFor="contactInfo" className="block mb-1">Email *</label>
            <input
              type="text"
              name="email"
              value={shippingForm.email}
              onChange={handleInputChange}
              className="mb-2"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
      <div className="mb-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="sameAsBilling"
            name="sameAsBilling"
            className="mr-2"
          // Add onChange event handler if you need to capture checkbox changes
          />
          <label htmlFor="sameAsBilling" className="select-none cursor-pointer">Same as Billing</label>
        </div>
      </div>
      <div className="mb-2">
  <div className="flex items-center">
    <input
      type="checkbox"
      id="addbilling"
      name="addbilling"
      className="mr-2"
      // Add onChange event handler if you need to capture checkbox changes
    />
    <label htmlFor="sameAsBilling" className="select-none cursor-pointer font-bold">Add Your Billing Address</label>
  </div>
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
          <div className="mb-2">
            <label htmlFor="contactInfo" className="block mb-1">Email *</label>
            <input
              type="text"
              name="email"
              value={shippingForm.email}
              onChange={handleInputChange}
              className="mb-2"
            />
          </div>
          <button
              // onClick={handleContinueToPayment}
              className="bg-[#EEC643] text-[#0F1111] py-2 px-4 rounded hover:bg-[#FFD700] w-full"
            >
              Continue to Payment
            </button>
          </div>
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
