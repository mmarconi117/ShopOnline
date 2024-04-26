import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ShippingAddressForm from "./shippingAddressForm";
import { editShippingAddress } from "../../../reducersAndActions/actions/checkoutEditAction";
import { updateShippingForm } from "../../../reducersAndActions/actions/shippingFormAction";
import { selectShippingMethod } from "../../../reducersAndActions/actions/shippingMethodAction";
import { editPaymentMethod } from "../../../reducersAndActions/actions/paymentMethodAction"; // Import action creator for editing payment method

const Checkout = ({
  isEditing,
  isPaymentEditing, // Add isPaymentEditing from Redux state
  editShippingAddress,
  editPaymentMethod, // Add editPaymentMethod action creator
  shippingForm,
  updateShippingForm,
  selectShippingMethod,
  shippingMethod,
  selectedPaymentMethod,
  selectPaymentMethod,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { carts, subtotal, promoCode, shipping, total } =
    location.state || {
      carts: [],
      subtotal: 0,
      promoCode: "",
      shipping: 0,
      total: 0,
    };

  const handlePaymentMethod = (method) => {
    if (selectedPaymentMethod === method) {
      selectPaymentMethod(null);
    } else {
      selectPaymentMethod(method);
    }
  };

  const handleShippingMethodSelect = (method) => {
    if (shippingMethod === method) {
      selectShippingMethod(null);
    } else {
      selectShippingMethod(method);
    }
  };

  const handleCheckout = () => {
    navigate("/confirmation");
  };

  const handleEdit = () => {
    editShippingAddress();
  };

  const handleCancelEdit = () => {
    editShippingAddress();
  };

  const handlePaymentEdit = () => {
    editPaymentMethod(); // Dispatch action to edit payment method
  };

  const handleCancelPaymentEdit = () => {
    editPaymentMethod(); // Dispatch action to cancel payment method editing
  };

  const [dummy, setDummy] = useState([
    {
      product: {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 20.99,
        avatar: "https://example.com/product1.jpg",
      },
      quantity: 2 // Example quantity in cart
    },
    {
      product: {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 15.49,
        avatar: "https://example.com/product2.jpg",
      },
      quantity: 1 // Example quantity in cart
    },
    {
      product: {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 30.00,
        avatar: "https://example.com/product3.jpg",
      },
      quantity: 3 // Example quantity in cart
    }
  ]);

  return (
    <>
      <div className="flex min-[375px]:flex-col sm:flex-row">
        <div className="flex flex-col sm:grow sm:w-full">
          {/* Shipping Address */}
          <div className="flex px-4 py-8 bg-[#F0F0F0] w-full">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="col-span-2 bg-white rounded-lg p-4">

                    {/* Shipping Address */}
                    <div className="border-b border-gray-300 pb-2 font-semibold flex items-center justify-between">
                      <div>Shipping Address</div>
                      <div className="flex items-center">
                        {isEditing ? (
                          <button
                            className="text-gray-500 text-xs mt-2"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        ) : (
                          <button
                            className="text-gray-500 text-xs mt-2"
                            onClick={handleEdit}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                    {/* Shipping Address or Edit Form */}
                    {isEditing ? (
                      <ShippingAddressForm
                        shippingForm={shippingForm}
                        updateShippingForm={updateShippingForm}
                        editShippingAddress={editShippingAddress}
                      />
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
                            <p>{shippingForm.email}</p>
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

          {/* Payment Method Box */}
          <div className="flex px-4 py-8 bg-[#F0F0F0] w-full">
            <div className="w-full">
                <div className="flex flex-col">
                  <div className="col-span-2 bg-white rounded-lg p-4">
                    <div className="border-b border-gray-300 pb-2 font-semibold flex items-center justify-between">
                      <div>Payment Method</div>
                      <div className="flex items-center">
                        {isPaymentEditing ? (
                          <button
                            className="text-gray-500 text-xs mt-2"
                            onClick={handleCancelPaymentEdit}
                          >
                            Cancel
                          </button>
                        ) : (
                          <button
                            className="text-gray-500 text-xs mt-2"
                            onClick={handlePaymentEdit}
                          >
                            Select Payment Method
                          </button>
                        )}
                      </div>
                    </div>
                    {isPaymentEditing && (
                      <div className="border border-gray-300 mb-4 p-4">
                        <form>
                          <label htmlFor="credit">Card Number</label>
                          <input
                            type="text"
                            id="credit"
                            name="credit"
                          />
                          <label htmlFor="credit">Cardholder Name</label>
                          <input
                            type="text"
                            id="cardholder"
                            name="cardholder"
                          />
                          <label htmlFor="expiryMonth">Expiration Month</label>
                          <select id="expiryMonth" name="expiryMonth">
                            <option value="">Month</option>
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                          </select>
                          {/* Dropdown for selecting year */}
                          <label htmlFor="expiryYear">Expiration Year</label>
                          <select id="expiryYear" name="expiryYear">
                            <option value="">Year</option>
                            {Array.from({ length: 18 }, (_, i) => (
                              <option key={i} value={2023 + i}>{2023 + i}</option>
                            ))}
                          </select>
                          <label htmlFor="cvv">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                          />
                          <label>
                            <input type="checkbox" id="saveCardDetails" name="saveCardDetails" />
                            Save card details
                          </label>
                          {/* Add other input fields as needed */}
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="flex px-4 py-8 bg-[#F0F0F0] w-full">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="col-span-2 bg-white rounded-lg p-4">
                    <div className="border-b border-gray-300 pb-2 font-semibold flex items-center justify-between">
                      <div className="text-lg">Shipping Method</div>
                    </div>
                    {/* Standard Shipping */}
                    <div className="flex justify-between border border-gray-300 mb-4 p-4">
                      <div className="flex">
                        <label htmlFor="standard" className="flex items-center mb-2 cursor-pointer">
                          <input
                            type="radio"
                            id="standard"
                            name="shippingMethod"
                            checked={shippingMethod === "Standard"}
                            onChange={() => handleShippingMethodSelect("Standard")}
                            className="hidden"
                          />
                          <div className={`w-6 h-6 border border-gray-500 rounded-full mr-2 ${shippingMethod === "Standard" ? "bg-blue-500" : ""}`}></div>
                          
                        </label>
                        <div className="flex flex-col">
                          <div className={`text-md ${shippingMethod === "Standard" ? "font-bold" : ""}`}>Standard Shipping</div>
                          <div className="text-sm">5 - 7 business days *</div>
                        </div>
                      </div>
                      <p>Free</p>
                    </div>
                    {/* Express Shipping */}
                    <div className="flex justify-between border border-gray-300 mb-4 p-4">
                      <div className="flex">
                        <label htmlFor="express" className="flex items-center mb-2 cursor-pointer">
                          <input
                            type="radio"
                            id="express"
                            name="shippingMethod"
                            checked={shippingMethod === "Express"}
                            onChange={() => handleShippingMethodSelect("Express")}
                            className="hidden"
                          />
                          <div className={`w-6 h-6 border border-gray-500 rounded-full mr-2 ${shippingMethod === "Express" ? "bg-blue-500" : ""}`}></div>
                          
                        </label>
                        <div className="flex flex-col">
                          <div className={`text-md ${shippingMethod === "Express" ? "font-bold" : ""}`}>Express Shipping</div>
                          <div className="text-sm">2 - 3 business days *</div>
                        </div>
                      </div>
                      <p>$20</p>
                    </div>
                    {/* Overnight Shipping */}
                    <div className="flex justify-between border border-gray-300 mb-4 p-4">
                      <div className="flex">
                        <label htmlFor="overnight" className="flex items-center mb-2 cursor-pointer">
                          <input
                            type="radio"
                            id="overnight"
                            name="shippingMethod"
                            checked={shippingMethod === "Overnight"}
                            onChange={() => handleShippingMethodSelect("Overnight")}
                            className="hidden"
                          />
                          <div className={`w-6 h-6 border border-gray-500 rounded-full mr-2 ${shippingMethod === "Overnight" ? "bg-blue-500" : ""}`}></div>
                          
                        </label>
                        <div className="flex flex-col">
                          <div className={`text-md ${shippingMethod === "Overnight" ? "font-bold" : ""}`}>Overnight Shipping</div>
                          <div className="text-sm">Next business day *</div>
                        </div>
                      </div>
                      <p>$30</p>
                    </div>
                    <div className="col-span-2 bg-white rounded-lg p-4 border border-gray-300">
                      <p className="font-bold">Gift Wrap Options</p>
                      <p>Add a Gift Message / Gift Wrap</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    // onClick={handleContinueToPayment}
                    className="bg-[#EEC643] text-gray-900 py-2 px-16 ml-30 mt-5 rounded hover:bg-yellow-500 w-[300px] "
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
          </div>

          {/* Existing Order Summary */}
          <div className="flex px-4 py-8 bg-[#F0F0F0] w-full">
            <div className="w-full">
                <div className="flex flex-col">
                  <div className="col-span-2 bg-white rounded-lg p-4">
                    <div className="font-semibold">Review items and shipping</div>
                    <div className="border-b border-gray-300 mb-2 pb-2 font-semibold flex items-center justify-between"></div>
                {
                dummy.map((item, index) => (
                  <div key={index} className="flex border border-gray-300 mb-4 p-4">
                    <div className="flex justify-between w-full">
                    <div className="flex justify-start">
                    <img src={item.product.avatar} className="w-24 h-24 mb-2" alt={item.product.name} />
                      <div className="info flex flex-col">
                        <h3 className="text-lg font-semibold mb-1">{item.product.name}</h3>
                        <p className="text-sm mb-1">{item.product.description}</p>
                        
                        <div className="flex items-center">
                          <span className="text-gray-700 mr-2">Quantity:</span>
                          <span>{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <p className="mb-1 text-lg font-semibold">${item.product.price}</p>
                    </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#F0F0F0]  border-2 border-blue-400">
            <div className="flex flex-col bg-white p-6 rounded-lg ml-5 mt-8 mr-5 w-full lg:w-auto border-2 border-red-400">
              <div className="text-xl font-semibold mb-4">ORDER SUMMARY</div>
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
              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  className="bg-none text-[#0F1111] py-2 px-4 rounded hover:bg-[#FFD700] w-[300px] border-2 border-blue-200"
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg  ml-5 mt-9 mr-5 mb-5 w-full lg:w-auto">
              <p className="font-bold">Returns are easy</p>
              <p>Free return within 15 days for Official Store items and 7 days for other eligible items.</p>
            <a href="">See more</a>
          </div>
          </div>
          
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isEditing: state.checkoutEditReduce.isEditing,
  isPaymentEditing: state.paymentMethodReducer.isPaymentEditing, // Map isPaymentEditing from Redux state
  shippingForm: state.shippingFormReducer,
  shippingMethod: state.shippingMethodReducer.selectedMethod,
  selectedPaymentMethod: state.paymentMethodReducer.selectedPaymentMethod, // Make sure to map selectedPaymentMethod from Redux state
});

const mapDispatchToProps = {
  editShippingAddress,
  updateShippingForm,
  selectShippingMethod,
  editPaymentMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
