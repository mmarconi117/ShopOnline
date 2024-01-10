const Checkout = () => {
  return (
    <div>
      <div>
        <p>Shipment Address</p>
        <button>Edit</button>
      </div>

      <p>Payment method</p>

      <p>Shipping method</p>

      <div>
        <label htmlFor="standard">Standard Shipping</label>
        <input type="radio" name="shipping" id="" />

        <label htmlFor="express">Express Shipping</label>
        <input type="radio" name="shipping" id="" />

        <label htmlFor="express">Overnight Shipping</label>
        <input type="radio" name="shipping" id="" />

        <button>Continue to payment</button>
      </div>

      <div>
        <p>Order summary:{}</p>
        <p>Subtotal:{}</p>
        <p>Promo code:{}</p>
        <p>Shipping:{}</p>
        <p>Estimated tax:{}</p>
        <p>Total:{}</p>
      </div>
    </div>
  );
};

export default Checkout;
