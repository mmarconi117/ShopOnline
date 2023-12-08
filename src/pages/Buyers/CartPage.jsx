
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Cart() {
  //Product's inside cart. This is array which is initilized in useEffects
  const [carts, setCarts] = useState([]);

  //React Router element that helps to navigate between pages
  const navigate = useNavigate();

  // Simulate initial cart data on component mount
  useEffect(() => {

    const initialData = [
      { id: 1, product: { avatar: '...', name: 'Product 1', description: '...', price: 10 }, number_of_product: 2 },
      { id: 2, product: { avatar: '...', name: 'Product 2', description: '...', price: 20 }, number_of_product: 1 },
      // ...more cart items
    ];

    // Set the initial cart data
    setCarts(initialData);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const Total = carts.reduce((total, item) => item.product.price * item.number_of_product + total, 0);

  const DeleteCart = (id) => {
    if (window.confirm("Are you sure to delete this product from the cart?")) {
      // Perform the logic to delete the product (replace with your desired implementation)
      console.log(`Delete product with ID: ${id}`);
      // Filtering the carts array to exclude the item with the specified ID
      const updatedCarts = carts.filter(item => item.id !== id);

      // Updating the carts state or passing the updated array back to the parent component
      setCarts(updatedCarts);

      console.log(`Deleted product with ID: ${id}`);
    }
  };

  const IncrementQuantity = (id, qty) => {
    // Perform the logic to update the quantity of the product
    console.log(`Increment quantity of product with ID: ${id} to ${qty}`);
    const updatedCarts = carts.map(item => {
      if (item.id === id) {
        return { ...item, number_of_product: qty };
      }
      return item;
    });

    setCarts(updatedCarts);
    console.log(`Incremented quantity of product with ID: ${id} to ${qty}`);
  };

  const DecrementQuantity = (id, qty) => {
    // Perform the logic to update the quantity of the product
    console.log(`Decrement quantity of product with ID: ${id} to ${qty}`);
    const updatedCarts = carts.map(item => {
      if (item.id === id && qty >= 0) {
        return { ...item, number_of_product: qty };
      }
      return item;
    });

    setCarts(updatedCarts);

    console.log(`Decremented quantity of product with ID: ${id} to ${qty}`);
  };

  const Checkout = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
    navigate('/checkout')
  };

  return (
    <div>
      <div className='CartPage'>

        <div className='ShipmentAddress'>
          <div>Shipment Address</div>
          <div>Mr Tony</div>
          <div>Top of New York, 84052</div>
          <div>+19048588048</div>
        </div>

        <div className='PaymentMethod'>
          <div>Tony Stark</div>
          <div> xxxx xxxx xxxx 2908</div>
        </div>

        <div>Order Items</div>
        <div className="cart">
          {carts.length > 0 ? (
            <>
              {carts.map((item, index) => (
                <div key={index} style={{ border: "1px solid #e5e5e5", marginBottom: "10px" }}>
                  <img src={item.product.avatar} alt={item.product.name} />
                  <div className="info">
                    <h3>{item.product.name}</h3>
                    <p>{item.product.description}</p>
                    <p>$ {item.product.price}</p>
                    <a href="#" onClick={() => IncrementQuantity(item.id, item.number_of_product + 1)}>
                      +
                    </a>
                    <a>{item.number_of_product}</a>
                    <a href="#" onClick={() => DecrementQuantity(item.id, item.number_of_product - 1)}>
                      -
                    </a>
                    <p style={{ cursor: "pointer" }} onClick={() => DeleteCart(item.id)}>
                      REMOVE
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            "No products in your cart"
          )}

  
        </div>

        <div className='CartSummary'>
          <div>Cart Summary</div>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="ProductName">
              <div>{item.product.name} </div>
            </div>
          </div>))}
          <div>Subtotal: ${Total} </div>
          <button href="#" onClick={Checkout}> Checkout </button>
        </div>

        <div className='Returns'>
          <div>
            Returns are easy
          </div>
          <div>
            Free return within 15 days for Official Store items and 7 days for other eligible items.
          </div>
          <div>
            See more
          </div>
        </div>

      </div>

      <Footer/>

    </div>
  );
}



export default Cart;
