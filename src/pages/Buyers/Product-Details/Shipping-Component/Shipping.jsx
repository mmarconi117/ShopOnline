import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../reducersAndActions/actions/cartAction";
import { useNavigate } from "react-router-dom";

const ShippingComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const qty = 1; // Default quantity, since we are not using useState

    const handleAddToCart = () => {
        // Dispatch an action to add the selected quantity to the cart
        dispatch(addToCart({ quantity: qty }));
    };

    const handleBuyNow = () => {
        // Dispatch an action to add the product to the cart with a quantity of 1
        dispatch(addToCart({ quantity: 1 }));
        // Navigate to the checkout page
        navigate("/checkout");
    };

    const styles = {
        btnStyles: {
            display: "inline-block",
            fontWeight: "400",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            border: "1px solid",
            padding: "1.375rem 5.75rem",
            fontSize: "1rem",
            lineHeight: "1.5",
            transition: "ease-in",
            width: "100%",
        },
    };

    return (
        <div id="shipping-component" className="w-1/4">
            <div className="w-5/6 m-auto">
                <div className="mb-5 border-b border-gray-600 py-4">
                    <div>
                        <p className="font-bold">Ship to</p>
                    </div>
                    <div>
                        <p>UK</p>
                    </div>
                </div>
                <div className="mb-5 border-b border-gray-600 py-4">
                    <div>
                        <p className="text-xl font-bold">Free Shipping by Jan 31</p>
                    </div>
                </div>
                <div className="mb-5 border-b border-gray-600 py-4">
                    <div>
                        <p className="text-xl font-bold">Service</p>
                    </div>
                    <div>
                        <p className="font-light">75-day Buyer Protection</p>
                    </div>
                </div>
                <div className="mb-5 border-b border-gray-600 py-4">
                    <div className="mb-5">
                        <div>
                            <p className="text-lg font-bold">Quantity</p>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2">1</div>
                            <div>
                                <button
                                    type="button"
                                    className="bg-gray-300 text-white"
                                    style={{ padding: ".01rem .5rem", borderRadius: "10px" }}
                                    disabled // Disable decrement button since quantity is always 1
                                >
                                    -
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 text-white ml-2"
                                    style={{ padding: ".01rem .5rem", borderRadius: "10px" }}
                                    disabled // Disable increment button since quantity is always 1
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>1 piece at most per customer</p>
                        </div>
                    </div>
                </div>
                <div className="mb-5 border-b border-gray-600 py-4">
                    <div>
                        <button
                            type="button"
                            className="mb-10 rounded-lg bg-amber-500"
                            style={styles.btnStyles}
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="mb-10 rounded-lg text-cyan-500"
                            style={styles.btnStyles}
                            onClick={handleBuyNow}
                        >
                            Buy It Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingComponent;
