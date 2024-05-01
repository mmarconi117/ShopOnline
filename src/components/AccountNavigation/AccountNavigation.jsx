import React from 'react';
import { Link } from 'react-router-dom';

import ticket from '../../assets/ICONS/ticket.svg';
import logOut from '../../assets/ICONS/logoutred.svg';
import info from '../../assets/ICONS/info.svg';
import orders from '../../assets/ICONS/order.svg';

import clock from '../../assets/ICONS/clock.svg';
import document from '../../assets/ICONS/document.svg';

import notification from '../../assets/ICONS/Notification.svg';
import paymentIcon from '../../assets/ICONS/paymentIcon.svg';
import user from '../../assets/ICONS/user.png';
import leftArrow from '../../assets/ICONS/LeftArrow.svg';


const AccountNavigation = () => {
  return (
    <div className="w-full lg:w-[20%] hidden lg:flex flex-col lg:gap-5 p-2 lg:px-8 lg:pt-5 lg:pb-[35px] min-w-max bg-white text-base font-medium">
      <div className="flex justify-between lg:justify-start items-start lg:pb-5 lg:border-b border-[#938F96] border-solid">
          <div className="flex justify-center items-center gap-[14px]">
              <span className="hidden lg:inline-block">
                  <img
                      src={user}
                      alt="user-icon"
                      className="w-6 h-6"
                  />
              </span>
              <a href="/account">My account</a>
          </div>
          <span>
              <img
                  className="lg:hidden w-6 h-6"
                  src={leftArrow}
                  alt="user-icon"
              />
          </span>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={orders} alt="" className="w-6 h-6" />
          </span>
          <Link to="/orders">Orders</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={info} alt="" className="w-6 h-6" />
          </span>
          <Link to="/info">Info</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={paymentIcon} alt="" className="w-6 h-6" />
          </span>
          <Link to="/payments">Payments</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={document} alt="" className="w-6 h-6" />
          </span>
          <Link to="/reviews">Pending Reviews</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={ticket} alt="" className="w-6 h-6" />
          </span>
          <Link to="/voucher">Voucher</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start">
          <span>
              <img src={clock} alt="" className="w-6 h-6" />
          </span>
          <Link to="/recently-viewed">Recently Viewed</Link>
      </div>
      <div className="hidden lg:flex gap-[14px] items-start pb-5 border-b border-[#938F96] border-solid">
          <span>
              <img src={notification} alt="" className="w-6 h-6" />
          </span>
          <Link to="/notifications">Notifications</Link>
      </div>
      <div className="hidden lg:block">
          <Link to="account-management">Account Management</Link>
      </div>
      <div className="hidden lg:block">
          <Link to="/edit-shipping-address">Edit Shipping address</Link>
      </div>
      <div className="hidden lg:block">
          <Link to="/support">Digital service and device Support</Link>
      </div>
      <div className="hidden lg:block pb-5 border-b border-[#938F96] border-solid">
          <Link to="/customer-service">Customer Service</Link>
      </div>
      <button className="hidden lg:flex items-start justify-center gap-[14px]">
          <span>
              <img
                  src={logOut}
                  alt="logout icon"
                  className="w-6 h-6"
              />
          </span>
          <div className="text-[#E46962]">LOGOUT</div>
      </button>
  </div>
  );
};

export default AccountNavigation;
