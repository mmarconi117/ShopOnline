import PropTypes from 'prop-types';
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
    <div className="cart-container p-10 md:p-5" style={{display:'flex', flexDirection:'column'}}>
      <div className='CartPage flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0'>

        <div className='ShipmentAddress flex grow flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10'>
          <div className="text-zinc-900 text-2xl font-bold leading-8 whitespace-nowrap justify-center bg-neutral-50 pl-5 pr-16 py-4 items-start max-md:max-w-full max-md:pr-5">Shipment Address</div>
          <div  className="text-zinc-900 text-2xl font-semibold leading-8 whitespace-nowrap">Mr Tony</div>
          <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap">Top of New York, 84052</div>
          <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap">+19048588048</div>
        </div>


        <div className="text-zinc-900 text-2xl font-semibold leading-10 whitespace-nowrap justify-center border-b-[color:var(--color-styles-neutral-300,#CAC5CD)] bg-neutral-50 mt-11 pl-5 pr-16 pb-10 border-b border-solid items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
          Payment method
        </div>


        <div className='PaymentMethod justify-center bg-neutral-50 flex flex-col pl-5 pr-20 py-5 items-start max-md:max-w-full max-md:px-5'>
          <div className="text-zinc-900 text-xl  leading-8 whitespace-nowrap">Tony Stark</div>
          <div className="text-zinc-900 text-xl  leading-8 self-stretch grow whitespace-nowrap">xxxx xxxx xxxx 2908</div>
        </div>

        <div className="text-zinc-800 text-2xl font-semibold leading-10 self-stretch whitespace-nowrap max-md:max-w-full">Order Items</div>
        <div className="cart flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
          {carts.length > 0 ? (
            <>
              {carts.map((item) => (
                <div key={item.id} style={{ border: "2px solid #e5e5e5", marginBottom: "10px" }}>
                  <img className="bg-zinc-300 flex w-[165px] shrink-0 h-[124px] flex-col mx-auto max-md:mt-9"  src={item.product.avatar} alt={item.product.name} />
                  <div className="info flex grow basis-[0%] flex-col items-stretch mt-1.5 max-md:max-w-full">
                    <h3 className="text-zinc-700 text-base leading-6 max-md:max-w-full">{item.product.name}</h3>
                    <p className="text-zinc-500 text-sm leading-6 whitespace-nowrap mt-3.5 max-md:max-w-full">{item.product.description}</p>
                    <p className="text-zinc-700 text-2xl font-bold leading-8 grow whitespace-nowrap">$ {item.product.price}</p>
                    <a href="#" onClick={() => IncrementQuantity(item.id, item.number_of_product + 1)}>
                      +
                    </a>
                    <a>{item.number_of_product}</a>
                    <a href="#" onClick={() => DecrementQuantity(item.id, item.number_of_product - 1)}>
                      -
                    </a>
                    <p className="text-neutral-400 text-base leading-6 self-center grow whitespace-nowrap my-auto" style={{ cursor: "pointer" }} onClick={() => DeleteCart(item.id)}>
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

        <div className='CartSummary justify-center items-center bg-white flex flex-col w-full px-12 py-6 max-md:mt-9 max-md:px-5'>
          <div className=" text-zinc-800 text-2xl font-bold leading-8 self-center whitespace-nowrap">Cart Summary</div>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="ProductName">
                <div>{item.product.name} </div>
              </div>
            </div>))}
          <div className="text-zinc-700 text-xl leading-6 whitespace-nowrap my-auto">Subtotal: ${Total} </div>
          <button href="#" className="text-stone-950 text-center text-base leading-5 my-auto" onClick={Checkout}> Checkout </button>
        </div>

        <div className='Returns bg-white flex flex-col items-stretch w-full mt-7 pl-8 pr-20 pt-7 pb-11 max-md:max-w-full max-md:mt-10 max-md:px-5'>
          <div className="text-zinc-800 text-2xl font-semibold leading-10 whitespace-nowrap max-md:mr-1">
            Returns are easy
          </div>
          <div className="text-cyan-600 text-base leading-6 underline max-w-[368px] mt-7 max-md:mr-1 text-zinc-800">
            Free return within 15 days for Official Store items and 7 days for other eligible items.
          </div>
          <div href="#" className="text-cyan-600 text-base leading-6 underline max-w-[368px] mt-7 max-md:mr-1 text-zinc-800" >
            See more
          </div>
        </div>

      </div>

      

    </div>
    <Footer />
    </div>
  );
}

Cart.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Cart;
