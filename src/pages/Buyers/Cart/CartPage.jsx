import React, { useState } from "react"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCarts, updateCartQuantity, increaseQuantityCart, decreaseQuantityCart } from "../../../reducersAndActions/actions/cartAction";

const CartPage = ({ carts, setCarts, updateCartQuantity, increaseQuantityCart, decreaseQuantityCart }) => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // Pass the carts data to the checkout route
    navigate("/checkout", { state: { carts } });
  };

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

  const handleIncreaseQuantity = (id) => {
    const updatedData = dummy.map(item => {
      if (item.product.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setDummy(updatedData);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedData = dummy.map(item => {
      if (item.product.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setDummy(updatedData);
  };

  const getSubtotal = () => {
    if (carts.length > 0) {
      return carts.reduce(
        (total, item) => {
          const productPrice = item.product ? item.product.price : 0;
          return total + productPrice * item.quantity;
        },
        0
      ).toFixed(2);
    } else {
      return dummy.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ).toFixed(2);
    }
  };


  const getShippingCost = () => {
    // Example shipping cost
    return "23.57";
  };

  const getTotal = () => {
    const subtotal = parseFloat(getSubtotal());
    const shipping = parseFloat(getShippingCost());
    return (subtotal + shipping).toFixed(2);
  };

  const deleteCart = (id) => {
    if (window.confirm("Are you sure to delete this product from the cart?")) {
      const updatedCarts = carts.filter((item) => item.product.id !== id);
      setCarts(updatedCarts);
      console.log(`Deleted product with ID: ${id}`);
    }
  };

  // const checkout = () => navigate("/checkout");

  return (
    <div className="bg-[#F0F0F0]">
      <div className="flex px-4 pt-8 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px]">
        <div className="flex flex-col justify-center items-start col-start-1 col-end-3 bg-blue-200 lg:h-[759px]">
          {carts.length > 0 ? (
            <>
              {carts.map((item, index) => (
                <div key={index} style={{ border: "1px solid #e5e5e5", marginBottom: "20px", padding: "20px", display: "flex", alignItems: "center", flexDirection: "column" }}>
                  {item.product && (
                    <>
                      <img src={item.product.avatar} alt={item.product.name} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
                      <div className="info">
                        <h3>{item.product.name}</h3>
                        <p>{item.product.description}</p>
                        {item.product.price && <p>$ {item.product.price}</p>}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button className="quantity-button bg-white text-black border border-black px-4 py-2" onClick={() => handleIncreaseQuantity(item.product.id)}>+</button>
                          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                          <button className="quantity-button bg-white text-black border border-black px-4 py-2" onClick={() => handleDecreaseQuantity(item.product.id)}>-</button>
                        </div>
                        <p style={{ cursor: "pointer" }} onClick={() => deleteCart(item.product.id)}>REMOVE</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              {dummy.map((item, index) => (
                <div key={index} style={{ border: "1px solid #e5e5e5", marginBottom: "20px", padding: "20px", display: "flex", alignItems: "center", flexDirection: "column" }}>
                  {item.product && (
                    <>
                      <img src={item.product.avatar} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
                      <div className="info">
                        <h3>{item.product.name}</h3>
                        <p>{item.product.description}</p>
                        {item.product.price && <p>$ {item.product.price}</p>}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button className="quantity-button bg-white text-black border border-black px-4 py-2" onClick={() => handleIncreaseQuantity(item.product.id)}>+</button>
                          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                          <button className="quantity-button bg-white text-black border border-black px-4 py-2" onClick={() => handleDecreaseQuantity(item.product.id)}>-</button>
                        </div>
                        <p style={{ cursor: "pointer" }} onClick={() => deleteCart(item.product.id)}>REMOVE</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-5 col-start-3 col-end-4">
          <div className="flex flex-col w-full p-4 bg-white font-Roboto py-6 px-8 lg:items-center">
            <div className="text-xl lg:text-[25px] font-semibold lg:font-bold lg:leading-[30px] text-center text-[#0F1111]">Cart Summary</div>
            <div className="flex flex-col items-start gap-3 self-stretch py-6">
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Subtotal</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">${getSubtotal()}</div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Promo code</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">ADC345</div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Shipping</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">${getShippingCost()}</div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="lg:font-bold lg:leading-6">Total</div>
                <div className="lg:text-2xl lg:font-bold">${getTotal()}</div>
              </div>
            </div>
            <button className="flex justify-center items-center rounded-[5px] gap-[10px] text-[#0F1111] bg-[#EEC643] h-[44px] lg:w-[70%] px-[30px] py-[14px] text-[14px] font-semibold leading-5 lg:text-base lg:leading-[19.2px] lg:font-normal" onClick={navigateToCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  carts: PropTypes.array.isRequired,
  setCarts: PropTypes.func.isRequired,
  updateCartQuantity: PropTypes.func.isRequired,
  increaseQuantityCart: PropTypes.func.isRequired,
  decreaseQuantityCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  carts: state.cartReducer.carts,
});

const mapDispatchToProps = {
  setCarts,
  updateCartQuantity,
  increaseQuantityCart,
  decreaseQuantityCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
