import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ShippingAddressForm from "./shippingAddressForm";
import { editShippingAddress } from "../../../reducersAndActions/actions/checkoutEditAction";
import { updateShippingForm } from "../../../reducersAndActions/actions/shippingFormAction";

const Checkout = ({ isEditing, editShippingAddress, shippingForm, updateShippingForm }) => {
  // console.log(shippingForm);
  const navigate = useNavigate();
  const location = useLocation();
  const { carts, subtotal, promoCode, shipping, total } = location.state || { carts: [], subtotal: 0, promoCode: "", shipping: 0, total: 0 };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as navigating to a confirmation page
    navigate("/confirmation");
  };

  const handleEdit = () => {
    editShippingAddress(); // Dispatch action to start editing
  };

  const handleCancelEdit = () => {
    editShippingAddress(); // Dispatch action to cancel editing
  };

  return (
    <>
      {/* Shipping Address */}
<div className="bg-[#F0F0F0]">
  <div className="flex px-4 py-8">
    <div className="w-full max-w-3xl">
      <div className="flex flex-col lg:grid grid-cols-3">
        <div className="col-span-2 bg-blue-200 rounded-lg p-4">
          {/* Shipping Address */}
          <div className="border-b border-gray-300 pb-2 font-semibold pl-4 flex items-center justify-between">
            <div>Shipping Address</div>
            <div className="flex items-center">
              {isEditing ? (
                <button className="text-gray-500 text-xs mt-2" onClick={handleCancelEdit}>Cancel</button>
              ) : (
                <button className="text-gray-500 text-xs mt-2" onClick={handleEdit}>Edit</button>
              )}
            </div>
          </div>
          {/* Shipping Address or Edit Form */}
          {isEditing ? (
            <ShippingAddressForm shippingForm={shippingForm} updateShippingForm={updateShippingForm} editShippingAddress={editShippingAddress} />
          ) : (
            <div>
            {shippingForm.firstName && (
              <div>
                <h2>Shipping Address</h2>
                <p>{shippingForm.firstName}</p>
                <p>{shippingForm.lastName}</p>
                <p>{shippingForm.address}</p>
                <p>{shippingForm.city}</p>
                <p>{shippingForm.state}</p>
                <p>{shippingForm.contactInfo}</p>
                {/* Render other shipping address fields similarly */}
              </div>
            )}
            {!shippingForm.firstName && (
              <p>No shipping address provided</p>
            )}
          </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Payment Method Box */}
      <div className="bg-[#F0F0F0]">
        <div className="flex px-4 py-8">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col lg:grid grid-cols-3">
              <div className="col-span-2 bg-blue-200 rounded-lg p-4">
                <div className="border-b border-gray-300 pb-2 font-semibold pl-4 flex items-center justify-between">
                  <div>Payment Method</div>
                  <div className="flex items-center">
                    {/* Content for payment method box goes here */}
                  </div>
                </div>
                <div className="border border-gray-300 mb-4 p-4 flex items-center justify-between">
                  <div>Select Payment Method</div>
                  <div>
                    {/* Content for payment method box goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Method */}
      <div className="bg-[#F0F0F0]">
        <div className="flex px-4 py-8">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col lg:grid grid-cols-3">
              <div className="col-span-2 bg-blue-200 rounded-lg p-4">
                <div className="border-b border-gray-300 pb-2 font-semibold pl-4 flex items-center justify-between">
                  <div className="text-lg font-bold">Shipping Method</div>
                </div>
                {/* Dot notation */}
                <div className="border border-gray-300 mb-4 p-4 flex flex-col">
                  {/* Dot for Standard Shipping */}
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 border border-gray-500 rounded-full mr-2"></div>
                    <div className="text-md font-bold">Standard Shipping</div> {/* Updated text size and weight */}
                    <div className="ml-auto">Free</div>
                  </div>
                  {/* Days text for Standard Shipping */}
                  <div className="text-sm ml-2">5 - 7 business days *</div>
                  {/* Dot for Express Shipping */}
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 border border-gray-500 rounded-full mr-2"></div>
                    <div className="text-md font-bold">Express Shipping</div> {/* Updated text size and weight */}
                    <div className="ml-auto">$20</div>
                  </div>
                  {/* Days text for Express Shipping */}
                  <div className="text-sm ml-2">2 - 3 business days *</div>
                  {/* Dot for Overnight Shipping */}
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 border border-gray-500 rounded-full mr-2"></div>
                    <div className="text-md font-bold">Overnight Shipping</div> {/* Updated text size and weight */}
                    <div className="ml-auto">$30</div>
                  </div>
                  {/* Days text for Overnight Shipping */}
                  <div className="text-sm ml-2">Next business day *</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Existing Order Summary */}
      <div className="bg-[#F0F0F0]">
        <div className="flex px-4 pt-16 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px]">
          <div className="flex flex-col justify-center items-start col-start-1 col-end-3 bg-blue-200 lg:h-[759px]">
            {carts.map((item, index) => (
                            <div key={index} className="border border-gray-300 mb-4 p-4">
                            <img src={item.product.avatar} className="w-24 h-24 mb-2" alt={item.product.name} />
                            <div className="info">
                              <h3 className="text-lg font-semibold mb-1">{item.product.name}</h3>
                              <p className="text-sm mb-1">{item.product.description}</p>
                              <p className="text-sm mb-1">${item.product.price}</p>
                              <div className="flex items-center">
                                <span className="text-gray-700 mr-2">Quantity:</span>
                                <span>{item.quantity}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="flex flex-col items-end gap-4 lg:gap-2 col-start-3 col-end-4 mt-[-8]">
                    <div className="bg-white p-6 rounded-lg">
                      <div className="text-xl font-semibold mb-4">Order Summary</div>
                      <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Promo code:</span>
                        <span>{promoCode}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Shipping:</span>
                        <span>${shipping}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Total:</span>
                        <span>${total}</span>
                      </div>
                      <button
                        onClick={handleCheckout}
                        className="bg-[#EEC643] text-[#0F1111] py-2 px-4 rounded hover:bg-[#FFD700] w-full"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              );
            };

            const mapStateToProps = (state) => ({
              isEditing: state.checkoutEditReduce.isEditing,
              shippingForm: state.shippingFormReducer, // Add shippingForm state
            });

            const mapDispatchToProps = {
              editShippingAddress,
              updateShippingForm,
            };

            export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
