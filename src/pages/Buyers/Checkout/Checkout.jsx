import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { carts, subtotal, promoCode, shipping, total } = location.state || { carts: [], subtotal: 0, promoCode: "", shipping: 0, total: 0 };

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

  const handleCheckout = () => {
    // Implement your checkout logic here, such as navigating to a confirmation page
    navigate("/confirmation");
  };

  return (
    <div className="bg-[#F0F0F0]">
      <div className="flex px-4 pt-8 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px]">
        <div className="flex flex-col justify-center items-start col-start-1 col-end-3 lg:h-[759px] -mt-20">
          <div className="flex w-full bg-white font-bold mb-1 p-5">
            Shipment Address
          </div>
          {/* <div className="w-full grey leading-[3rem]"></div> */}
          <div className="flex flex-col w-full bg-white mb-5 p-5">
            <div>Mr Tony Stark</div>
            <div>Top of New York, 84052</div>
            <div>+19048588048</div>
          </div>
          <div className="flex w-full bg-white font-bold mb-1 p-5">
            Payment Method
          </div>
          {/* <div className="w-full grey leading-[3rem]"></div> */}
          <div className="flex flex-col w-full bg-white mb-5 p-5">
            <a href="">Select payment method</a>
          </div>
          <div className="flex w-full bg-white font-bold mb-1 p-5">
            Shipping Method
          </div>
          {/* <div className="w-full grey leading-[3rem]"></div> */}
          <div className="flex flex-col w-full bg-white p-5">
            <fieldset>
              <div className="flex">
                <input type="radio" checked="checked" name="radio"/>
                <label class="container">Standard Shipping</label>
                <div className="font-bold pr-5">Free</div>
              </div>
              <div className="pl-5">5-7 Business Days*</div>
              <div className="flex">
                <input type="radio" checked="checked" name="radio"/>
                <label class="container">Express Shipping</label>
                <div className="pr-5">$20</div>
              </div>
              <div className="pl-5">2-3 Business Days*</div>
              <div className="flex">
                <input type="radio" checked="checked" name="radio"/>
                <label class="container">Overnight Shipping</label>
                <div className="pr-5">$30</div>
              </div>
              <div className="pl-5">Next Business Day*</div>
            </fieldset>
          </div>
          {carts.map((item, index) => (
            <div key={index} className="flex border border-gray-300 mb-4 p-4">
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
