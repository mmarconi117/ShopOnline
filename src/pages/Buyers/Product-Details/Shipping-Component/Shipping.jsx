import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity } from '../../../../reducersAndActions/actions/shipAction';
import { useDispatch } from 'react-redux';

const ShippingComponent = ({ quantity, increaseQuantity, decreaseQuantity,carts, addCart,product}) => {

    const navigate = useNavigate();

    

    const incrementQty = () => {
        increaseQuantity();
    };

    const decrementQty = () => {
        decreaseQuantity();
    };

    const handleCart=(product)=>{
        addCart(product)  ///addding product to cart state
    }


    const handleBuyNow = () => {

        navigate('/checkout');
    }

    return (

        <div
            id="shipping-component"
            className="min-w-max lg:min-w-[340px] 2xl:min-w-[400px] hidden lg:flex flex-col gap-6"
        >
            {/* shipping to div */}
            <div className="px-5 py-10 bg-white rounded-lg flex flex-col gap-4">
                <div className="flex justify-between">
                    <p className="font-bold">Ship to</p>
                    <p>UK</p>
                </div>

                <div className="h-px w-full bg-[#DEDEEA]"/>

                {/* shipping price info div */}
                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-bold">Free Shipping</p>
                    <p>by <span>Jan 31</span></p>
                </div>

                <div className="h-px w-full bg-[#DEDEEA]"/>

                {/* service div */}
                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-bold">Service</p>
                    <p className="font-light">75-day Buyer Protection</p>
                </div>
                {/* quantity div */}
                <div className="flex flex-col gap-[10px]">
                    <p className="text-lg font-bold">Quantity</p>
                    <div className="flex gap-3 items-center justify-start">
                        <button
                            type="button"
                            className="bg-gray-300 text-white w-6 h-6 rounded-md"
                            onClick={decrementQty}
                        >
                            -
                        </button>
                        <div className="px-3">
                            {quantity}
                        </div>
                        <button
                            type="button"
                            className="bg-gray-300 text-white w-6 h-6 rounded-md"
                            onClick={incrementQty}
                        >
                            +
                        </button>
                    </div>
                    {/* order limitation info div */}
                    <p>1 piece at most per customer</p>
                </div>
                
                {/* trigger buttons */}
                <div className="flex flex-col items-stretch gap-4">
                    <button
                        type="button"
                        className="rounded bg-[#EEC643] py-4 px-8 border border-solid border-[#EEC643]"
                        onClick={()=>handleCart(product)}
                    >
                        Add To Cart
                    </button>
                    <button
                        type="button"
                        className="text-[#2284B6] py-4 px-8 border-[#2284B6] border-solid border rounded"
                        onClick={handleBuyNow}
                    >
                        Buy It Now
                    </button>
                </div>
            </div>
            {/* chat div */}
            <div className="px-12 py-5 bg-white rounded flex flex-col items-center justify-start gap-4">
                <p className="text-center">Questions about this Product?</p>      
                <button type="button" className="text-cyan-500 flex justify-between gap-2 items-center">
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
                    <div>CHAT</div>
                </button>
            </div>
        </div>
 
    );
}

const mapStateToProps = (state) => {
    return {
        quantity: state.shipReducer.quantity // Assuming 'quantity' is directly managed by shipReducer
    };
};


const mapDispatchToProps ={

        increaseQuantity,
        decreaseQuantity,
 
};


export default connect(mapStateToProps, mapDispatchToProps)(ShippingComponent);
