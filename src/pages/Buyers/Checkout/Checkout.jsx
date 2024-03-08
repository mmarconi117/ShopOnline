import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { carts, subtotal, promoCode, shipping, total } = location.state || { carts: [], subtotal: 0, promoCode: "", shipping: 0, total: 0 };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as navigating to a confirmation page
    navigate("/confirmation");
  };

  // return (

    //shipping address                                  Edit button
    //--------------------------------------------------------
  //Below use dummy profile** with small gray space

  //Mr. Tony Stark ==> bold tailwaind css
  //Top of New York, 84052 ==> smaller text tailwind
  //+19048588048
  //--------------------------------------------------------------
  //some gray space
  //Payment Methond *box* that fit the page


// below will be a (review items and shipping)
//------------------------------------------------
//Estimated delievery 25th June
return (
  <>

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
              <button className="text-gray-500 text-xs mt-2">Edit</button>
            </div>
          </div>
          {/* Dummy Profile */}
          <div className="border border-gray-300 mb-4 p-4">
            <div className="font-semibold mb-1">Mr. Tony Stark</div>
            <div className="text-sm mb-1">Top of New York, 84052</div>
            <div className="text-sm">+19048588048</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>













{/* Shipping Address */}
<div className="bg-[#F0F0F0]">
  <div className="flex px-4 py-8">
    <div className="w-full max-w-3xl">
      <div className="flex flex-col lg:grid grid-cols-3">
        <div className="col-span-2 bg-blue-200 rounded-lg p-4">
          {/* Shipping Address */}
          <div className="border-b border-gray-300 pb-2 font-semibold pl-4 flex items-center justify-between">
            <div>Payment Method</div>
            <div className="flex items-center">
              <button className="text-gray-500 text-xs mt-2">Edit</button>
            </div>
          </div>
            {/* Payment Method Box */}
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









    {/* Existing Order Summary */}
    <div className="bg-[#F0F0F0]">
      <div className="flex px-4 pt-16 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px]">
        <div className="flex flex-col justify-center items-start col-start-1 col-end-3 bg-blue-200 lg:h-[759px]">
          {carts.map((item, index) => (
            <div key={index} className="border border-gray-300 mb-4 p-4">
              <img
                src={item.product.avatar}
                className="w-24 h-24 mb-2"
              />
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
  </>
);









};

export default Checkout;
