import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../reducersAndActions/actions/cartAction";

const ShippingComponent = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const incrementQty = () => {
        setQty(qty + 1);
    };

    const decrementQty = () => {
        setQty(qty - 1);
        if (Number(qty) < 1) {
            setQty(1);
        }
    };

    const handleAddToCart = () => {
        // Dispatch an action to add the selected quantity to the cart
        dispatch(addToCart({ quantity: qty }));
    };

    const styles = {
        qtyBtnStyles: {
            display: "inline-block",
            textAlign: "center",
            border: "1px solid black",
            padding: ".01rem .5rem",
            fontSize: "1.25rem",
            borderRadius: "10px",
        },
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
                {/* shipping to div */}
                <div className=" shadow-md">
                    <div className="flex justify-between border-b border-gray-600 py-4">
                        <div>
                            <p className="font-bold">Ship to</p>
                        </div>
                        <div>
                            <p>UK</p>
                        </div>
                    </div>
                    {/* shipping price info div */}
                    <div className="mb-5 border-b border-gray-600 py-4">
                        <div>
                            <p className="text-xl font-bold">Free Shipping by Jan 31</p>
                        </div>
                    </div>
                    {/* service div */}
                    <div className="mb-5 border-b border-gray-600 py-4">
                        <div>
                            <p className="text-xl font-bold">Service</p>
                        </div>
                        <div>
                            <p className="font-light">75-day Buyer Protection</p>
                        </div>
                    </div>
                    {/* quantity div */}
                    <div className="mb-5 border-b border-gray-600 py-4">
                        <div className="mb-5">
                            <div>
                                <p className="text-lg font-bold">Quantity</p>
                            </div>
                            <div className="flex">
                                <div>
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-white"
                                        style={styles.qtyBtnStyles}
                                        onClick={decrementQty}
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="w-10 mx-1">
                                    <input
                                        type="number"
                                        name="quantity"
                                        className="block w-full rounded-md border-0 py-2
                                text-black-900 font-bold placeholder:text-black-400 focus:ring-2 focus:ring-inset
                                focus:ring-indigo-600 sm:text-lg sm:leading-6 "
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-white"
                                        style={styles.qtyBtnStyles}
                                        onClick={incrementQty}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* order limitation info div */}
                            <div>
                                <p>1 piece at most per customer</p>
                            </div>
                        </div>
                    </div>
                    {/* trigger buttons */}
                    <div className="mb-5 border-b border-gray-600 py-4">
                        <div>
                            <button
                                type="add-to-cart"
                                className="mb-10 rounded-lg bg-amber-500 "
                                style={styles.btnStyles}
                                onClick={handleAddToCart} // Call handleAddToCart when Add To Cart button is clicked
                            >
                                Add To Cart
                            </button>
                        </div>
                        <div>
                            <button
                                type="add-to-cart"
                                className="mb-10 rounded-lg text-cyan-500 "
                                style={styles.btnStyles}
                            >
                                Buy It Now
                            </button>
                        </div>
                    </div>
                </div>
                {/* chat div */}
                <div className="w-90 mt-10 border shadow-md">
                    <div className="m-5 text-center">
                        <div>
                            <p>Questions about this Product?</p>
                        </div>
                        <div className="flex justify-center my-5 text-cyan-500">
                            <div className="mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <button type="button">CHAT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingComponent;
