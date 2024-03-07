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

  return (
    <div className="bg-[#F0F0F0] border-2 border-red-400">
      <div className="flex px-4 pt-8 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px] border-2 border-blue-400">
        <div className="flex flex-col justify-center items-start col-start-1 col-end-3 bg-blue-200 lg:h-[759px] border-2 border-green-400">
          <div className="flex w-full h-150 bg-white font-bold">
            Shipment Address
            {/* <div className="w-full grey leading-[3rem]"></div> */}
          </div>
          <div className="flex w-full h-150 bg-white font-bold">
            Payment Method
            {/* <div className="w-full grey leading-[3rem]"></div> */}
          </div>
          <div className="flex w-full h-150 bg-white font-bold">
            Shipping Method
            {/* <div className="w-full grey leading-[3rem]"></div> */}
          </div>
          {carts.map((item, index) => (
            <div key={index} className="border border-gray-300 mb-4 p-4">
              <img
                src={item.product.avatar}
                className="w-24 h-24 mb-2"
              />
              <div className="info border-2 border-orange-400">
                <h3 className="text-lg font-semibold mb-1">{item.product.name}</h3>
                <p className="text-sm mb-1">{item.product.description}</p>
                <p className="text-sm mb-1">${item.product.price}</p>
                <div className="flex items-center border-2 border-yellow-400">
                  <span className="text-gray-700 mr-2">Quantity:</span>
                  <span>{item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-8 lg:gap-5 col-start-3 col-end-4 w-full">
          <div className="bg-white p-6 rounded-lg w-full">
            <div className="text-xl font-semibold mb-6">Order Summary</div>
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
              className="bg-[#EEC643] text-[#0F1111] py-2 px-4 rounded mt-4 hover:bg-[#FFD700] w-full"
            >
              Checkout
            </button>
            
          </div>
          <div className="flex flex-col w-full h-150 p-5 bg-white">
              <div className="text-xl">Returns are easy</div>
              <div>Free return within 15 days for Official Store items
              and 7 days for other eligible items. <a href="">See more</a> 
              </div>
            </div>
        </div>


      </div>
    </div>
  );
};

export default Checkout;
