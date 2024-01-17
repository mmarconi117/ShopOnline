import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div>
      <div>
        <div>
        <Link to="/account">My account</Link>
        </div>
        <div>
          <a href="">Orders</a>
        </div>
        <div>
          <a href="">Payments</a>
        </div>
        <div>
        <Link  to="/reviews">Pending Reviews</Link>
        </div>
        <div>
          <a href="">Voucher</a>
        </div>
        <div>
          <a href="">Recently Viewed</a>
        </div>
        <div>
          <a href="">Notifications</a>
        </div>
        <div>
          <a href="">Account Management</a>
        </div>
        <div>
          <a href="">Edit Shipping address</a>
        </div>
        <div>
          <a href="">Digital service and device Support</a>
        </div>
        <div>
          <a href="">Customer Service</a>
        </div>
        <button>LOGOUT</button>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Username</p>
            <p>userId:{1234}</p>
          </div>
        </div>

        <div>
          <button>
            <img src="" alt="" />
            Wishlist
          </button>
          <button>
            <img src="" alt="" />
            Viewed
          </button>
          <button>
            <img src="" alt="" />
            Coupons
          </button>
        </div>
      </div>

      <div>
        <div>
          <p>My order</p>
          <button>View</button>
        </div>

        <div>
          <button>Shipped</button>
          <button>To be Shipped</button>
          <button>Unpaid</button>
          <button>To be reviewed</button>
        </div>

        <div>
          <button>My appeal</button>
          <button>In dispute</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
