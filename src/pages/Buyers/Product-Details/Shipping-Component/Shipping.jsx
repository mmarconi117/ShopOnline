import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity } from '../../../../reducersAndActions/actions/shipAction';
import { addToCart } from '../../../../reducersAndActions/actions/cartAction';

const ShippingComponent = ({ quantity, increaseQuantity, decreaseQuantity,carts }) => {

    console.log('quantity->',quantity)
    console.log('carts inside shipping->',carts)
    const navigate = useNavigate();

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




    const incrementQty = () => {
        increaseQuantity();
    };

    const decrementQty = () => {
        decreaseQuantity();
    };

    const handleBuyNow = () => {

        navigate('/checkout');
    }

    return (
        <div id="shipping-component" className="w-1/4">
            <div className="w-5/6 m-auto">
                {/* shipping to div */}
                <div className="shadow-md">
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
                                    focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                        value={quantity}
                                        readOnly
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
                                type="button"
                                className="mb-10 rounded-lg bg-amber-500"
                                style={styles.btnStyles}
                                onClick={addToCart}
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
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        quantity: state.shipReducer.quantity // Assuming 'quantity' is directly managed by shipReducer
    };
};

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingComponent);
