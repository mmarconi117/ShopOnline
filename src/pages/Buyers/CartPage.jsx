import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import accountbox from '../../assets/ICONS/cartPageicon/accountbox.svg'
import leftnavigate from '../../assets/ICONS/cartPageicon/leftarrow.svg'
import rightnavigate from '../../assets/ICONS/cartPageicon/rightarrow.svg'
 import leftbasedonreviw from '../../assets/ICONS/cartPageicon/leftbasedonreviw.svg'
 import rightsidebasedon from '../../assets/ICONS/cartPageicon/rightsidebase don.svg'


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
      {/* starting div*/}

      {/* supposed first row of shipement  div*/}
      <div className="self-center w-full max-w-[1405px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {/* Shipping address container*/}
          <div className='CartPage flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0'>

            <div className='ShipmentAddress flex grow flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10'>
              <div className="text-zinc-900 text-2xl font-bold leading-8 whitespace-nowrap justify-center bg-neutral-50 pl-5 pr-16 py-4 items-start max-md:max-w-full max-md:pr-5">Shipment Address
              </div>
              <div className="text-zinc-900 text-2xl font-semibold leading-10">Mr Tony
              </div>
              <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap">Top of New York, 84052
              </div>
              <div className="text-zinc-900 text-xl font-medium leading-8">+19048588048
              </div>
            </div>

            {/* only payment menthod heading container*/}
            <div className="text-zinc-900 text-2xl font-semibold leading-10 whitespace-nowrap justify-center border-b-[color:var(--color-styles-neutral-300,#CAC5CD)] bg-neutral-50 mt-11 pl-5 pr-16 pb-10 border-b border-solid items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
              Payment method
            </div>
            {/* only payment menthod heading container end */}
          </div>

          {/* Cart Summary container which is left side */}
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div className='CartSummary justify-center items-center bg-white flex flex-col w-full px-12 py-6 max-md:mt-9 max-md:px-5'>
              <div className=" text-zinc-800 text-2xl font-bold leading-8 self-center whitespace-nowrap">Cart Summary
              </div>
              {carts.map((item) => (
                <div key={item.id}>
                  <div className="ProductName">
                    <div>{item.product.name} </div>
                  </div>
                </div>))}
              <div className="justify-between items-center self-stretch flex gap-5 mt-8">

                <div className="text-zinc-700 text-xl leading-6 whitespace-nowrap my-auto">Subtotal: ${Total}
                </div>
                <div className="text-zinc-700 text-right text-xl font-medium leading-8 self-stretch">
                  $15.99
                </div>
              </div>


              <div className="justify-between items-center self-stretch flex gap-5 mt-8">

                <div className="text-zinc-700 text-xl leading-6 whitespace-nowrap my-auto">Subtotal: ${Total}
                </div>
                <div className="text-zinc-700 text-right text-xl font-medium leading-8 self-stretch">
                  $15.99
                </div>
              </div>


              <div className="justify-between items-center self-stretch flex gap-5 mt-8">

                <div className="text-zinc-700 text-xl leading-6 whitespace-nowrap my-auto">Subtotal: ${Total}
                </div>
                <div className="text-zinc-700 text-right text-xl font-medium leading-8 self-stretch">
                  $15.99
                </div>
              </div>


              <div className="justify-between items-center self-stretch flex gap-5 mt-8">

                <div className="text-zinc-700 text-xl leading-6 whitespace-nowrap my-auto">Subtotal: ${Total}
                </div>
                <div className="text-zinc-700 text-right text-xl font-medium leading-8 self-stretch">
                  $15.99
                </div>
              </div>

              <div className="justify-center items-center bg-zinc-100 self-stretch flex gap-2.5 mt-8 px-20 py-2.5 rounded-md max-md:px-5">
                <img className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full" src={rightnavigate} alt='' />
                <div href="#" className="text-stone-950 text-center text-base leading-5 my-auto" onClick={Checkout}> Checkout </div>
                <img className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full" src={leftnavigate} alt='' />

              </div>
            </div>
          </div>
          {/* Cart Summary container which is left side end */}
        </div>



      </div>


      {/* supposed first row of shipement  div end*/}













      {/* supposed second row of  div start*/}
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {/* left side Returns are easy container*/}
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-6">
              <div className='PaymentMethod justify-center bg-neutral-50 flex flex-col pl-5 pr-20 py-5 items-start max-md:max-w-full max-md:px-5'>
                <div className="text-zinc-900 text-xl font-medium leading-8">Tony Stark
                </div>
                <div className="items-center flex gap-4 mt-3">
                  <img src={accountbox} alt='' />
                  <div className="text-zinc-900 text-xl  leading-8 self-stretch grow whitespace-nowrap">xxxx xxxx xxxx 2908
                  </div>
                </div>
              </div>


              <div className="items-start bg-white flex flex-col mt-9 pl-4 py-6 rounded-md max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-semibold leading-10 self-stretch whitespace-nowrap max-md:max-w-full">Order Items
                </div>
                <div className="cart flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                  {carts.length > 0 ? (
                    <>
                      {carts.map((item) => (
                        <div key={item.id} style={{ border: "2px solid #e5e5e5", marginBottom: "10px" }}>
                          <img className="bg-zinc-300 flex w-[165px] shrink-0 h-[124px] flex-col mx-auto max-md:mt-9" src={item.product.avatar} alt={item.product.name} />
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
                            <div className="text-neutral-400 text-base leading-6 self-center grow whitespace-nowrap my-auto" style={{ cursor: "pointer" }} onClick={() => DeleteCart(item.id)}>
                              REMOVE
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    "No products in your cart"
                  )}


                </div>


              </div>
            </div>












          </div>

          {/* Returns are easy container*/}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className='Returns bg-white flex flex-col items-stretch w-full mt-7 pl-8 pr-20 pt-7 pb-11 max-md:max-w-full max-md:mt-10 max-md:px-5'>
              <div className="text-zinc-800 text-2xl font-semibold leading-10 whitespace-nowrap max-md:mr-1.5">
                Returns are easy
              </div>
              <div>
                <span className="text-cyan-600 text-base leading-6 underline max-w-[368px] mt-7 max-md:mr-1 text-zinc-800">
                  Free return within 15 days for Official Store items and 7 days for other eligible items.
                </span>
                <span href="#" className="text-cyan-600 text-base leading-6 underline max-w-[368px] mt-7 max-md:mr-1 text-zinc-800" >
                  See more
                  <br />
                </span>
              </div>
            </div>
          </div>

          {/* Returns are easy container end*/}
        </div>
      </div>


      {/*---- supposed second row of  div end ---*/}



      {/* supposed third row of  div  of Based on vived  */}

      <div className="self-stretch flex w-full flex-col items-stretch mt-28 px-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-neutral-800 text-2xl font-semibold leading-10 max-md:max-w-full">
          Based on recently viewed
        </div>
        <div className="items-stretch flex justify-between gap-5 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center">

        {/*---- first image in base on vive---*/}
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex flex-col justify-center pr-16 py-12 rounded-md items-start max-md:pr-5">
              <img
                src={ leftbasedonreviw} alt=''
                className="aspect-square object-contain object-center w-[62px] overflow-hidden max-w-full mt-11 mb-4 max-md:mt-10"
              />
            </div>
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>

          {/*---- supposed secondimge of  based on vive ---*/}

          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex shrink-0 h-[222px] flex-col rounded-md" />
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>

          {/*---- supposed third imge of  based on vive ---*/}


          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex shrink-0 h-[222px] flex-col rounded-md" />
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>

          {/*---- supposed fourth imge of  based on vive ---*/}
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex shrink-0 h-[222px] flex-col rounded-md" />
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>

          {/*---- supposedfifth imge of  based on vive ---*/}
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex shrink-0 h-[222px] flex-col rounded-md" />
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>

          {/*---- supposed sixthimge of  based on vive ---*/}
          <div className="items-stretch bg-white flex grow basis-[0%] flex-col pt-2.5 pb-4 px-2.5 rounded-md">
            <div className="bg-zinc-300 flex flex-col justify-center pl-16 py-12 rounded-md items-end max-md:pl-5">
              <img
                
                src={rightsidebasedon}
                className="aspect-square object-contain object-center w-[62px] overflow-hidden max-w-full mt-11 mb-4 max-md:mt-10"
              />
            </div>
            <div className="text-stone-950 text-sm leading-5 mt-6">
              Lorem ipsum dolor sit amet, dolor sit amet, consectetur
              <br />
            </div>
            <div className="text-sky-800 text-sm leading-5 tracking-wide whitespace-nowrap mt-4">
              <span className=" text-stone-950">from </span>
              <span className="font-bold text-sky-800">$120</span>
            </div>
          </div>
        </div>
      </div>










      {/* supposed third row of  div  of Based on vived end here */}










      <Footer />{/* Footer container*/}

      {/*   ending divs */}
    </div>

  );
}



Cart.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Cart;
