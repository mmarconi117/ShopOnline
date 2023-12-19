import Footer from "../../components/Footer/Footer";

const Help = () => {
  return (
    <div>
      <div>
        <div>My account</div>
        <div>Orders</div>
        <div>Payments</div>
        <div>Pending Reviews</div>
        <div>Voucher</div>
        <div>Recently Viewed</div>
        <div>Notifications</div>
        <div>Account Management</div>
        <div>Edit Shipping address</div>
        <div>Digital service and device Support</div>
        <div>Customer Service</div>
        <div>LOGOUT</div>
      </div>

      <div>
        <p>Need help let us help you!</p>

        <p>Give us a call: 1-800-123-4567</p>
        <p>Email us: nyshopping@shopping.com</p>
        <p>Monday - Friday 6am - 5pm PST</p>
        <p>Saturday - Sunday 8am - 2pm PST</p>
      </div>

      <div>
        <p>See frequently asked question on popular Topics</p>
      </div>

      <button>
        <a href="/feedback">Give us feedback</a>
      </button>
      <Footer />
    </div>
  );
};

export default Help;
