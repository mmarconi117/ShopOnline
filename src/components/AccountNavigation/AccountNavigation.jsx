import React from 'react';
import { Link } from 'react-router-dom';

const AccountNavigation = () => {
  return (
    <div className="flex flex-col">
      <div className="my-2">My Account</div>
      <Link to="/orders" className="my-2"><button>Orders</button></Link>
      <Link to="/payments" className="my-2"><button>Payments</button></Link>
      <Link to="/reviews" className="my-2"><button>Pending Reviews</button></Link>
      <Link to="/voucher" className="my-2"><button>Voucher</button></Link>
      <Link to="/saved-items" className="my-2"><button>Saved Items</button></Link>
      <Link to="/recently-viewed" className="my-2"><button>Recently Viewed</button></Link>
      <Link to="/notifications" className="my-2"><button>Notifications</button></Link>
      <Link to="/account-management" className="my-2"><button>Account Management</button></Link>
      <Link to="/edit-shipping-address" className="my-2"><button>Edit Shipping Address</button></Link>
      <Link to="/support" className="my-2"><button>Digital Service and Device Support</button></Link>
      <Link to="/customer-service" className="my-2"><button>Customer Service</button></Link>
      <button className="my-2">LOGOUT</button>
    </div>
  );
};

export default AccountNavigation;
