import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statements = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API when the component mounts
    axios.get('https://api.shoponlinenewyork.com/api/admin/orders')
      .then(response => {
        console.log(response.data)
        // Update the state with the fetched orders data
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const totalProductPrice = orders.reduce((total, order) => total + order.total_price, 0);
  const totalShippingPrice = orders.reduce((total, order) => total + order.delivery_fee, 0);
  return (
    <div className="flex flex-col min-w-max items-stretch gap-8">
      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md">
        <div className="text-lg sm:text-2xl leading-10 font-medium sm:font-semibold">Payment Information</div>
        <div className="flex justify-between items-center">
          <p className="text-xs sm:text-base">Status</p>
          <p className="text-xs rounded-md bg-[#CAC5CD] py-1 px-2">Paid to you</p>
        </div>
        <div className="text-xs sm:text-base flex justify-between items-center">
          <p>Last settlement</p>
          <p>May 23 2023</p>
        </div>
      </div>

      <div className="px-3 py-5 bg-white flex justify-between items-center rounded-md text-xs sm:text-base">
        <select name="" id="" className="outline-none">
          <option value="">Select a statement</option>
        </select>
        <div className="hidden sm:block w-[1px] h-10 bg-[#cbcbcb] mx-[-60px]" />
        <div className="flex justify-start gap-2 items-center">
          <p>Paid to you</p>
          <div className="flex justify-center items-center w-5 h-5 rounded-full border-solid border-[2px] text-[#AEA9B1] border-[#AEA9B1]">!</div>
        </div>
        <p>$50000</p>
      </div>

      {orders.length > 0 && (
        <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
          <div className="text-xl font-medium pt-1">Sales</div>
          <div className="flex justify-between items-center px-1">
            <div>
              <p>Product price</p>
              <p className="pl-8">${totalProductPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      {orders.length > 0 && (
        <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
          <div className="text-xl font-medium pt-1">Sales</div>
          <div className="flex justify-between items-center px-1">
            <div>
              <p>Shipping price</p>
              <p className="pl-8">${totalShippingPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};


export default Statements;
