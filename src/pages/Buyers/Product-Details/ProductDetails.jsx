import { useState, useEffect } from "react";
import { Link, useHref, useLocation } from "react-router-dom";
import infoIcon from "../../../assets/ICONS/info.svg";
import { connect } from "react-redux";
import { addToCart,setCarts } from "../../../reducersAndActions/actions/cartAction";
import { getProductDetails } from "../../../reducersAndActions/actions/productTestAction";
import PropTypes from "prop-types";

// components

import SimilarProducts from "./SimilarProducts";
import ProductImgs from "./ProductImgs";
import Quantity from "./Quantity";
import ProductColors from "./ProductColors";
import AboutProduct from "./AboutProduct";
import ShippingComponent from "./Shipping-Component/Shipping";
const ProductDetails = ({
    productTestState: { product },
    addToCart,
    carts,
    similarProductsTest: { similarProductsTest },
}) => {
    const [breadCrumb, setBreadCrumb] = useState([]);
    const [qty, setQty] = useState(1);
    const [cartCount, setCartCount] = useState(0);

    const location = useLocation();

    const currentUrl = useLocation().pathname;



    useEffect(() => {
        setUrlsPath();
        window.scrollTo(0, 0);
    }, []);

    const setUrlsPath = () => {
        const histories = currentUrl.split("/");
        const paths = histories.map((path, index) => ({
            pathname: index === histories.length - 1 ? path : `${path}/`,
            url: path,
        }));
        setBreadCrumb(paths);
    };

    const incrementQty = () => {
        setQty(qty + 1);
    };

    const decrementQty = () => {
        setQty(qty > 1 ? qty - 1 : 1);
    };

    const updateQtyOnChange = (e) => {
        const newQty = parseInt(e.target.value);
        setQty(newQty >= 1 ? newQty : 1);
    };

    const addToCartHandler = () => {
        addToCart(product); // Assuming addToCart dispatches an action to add product to cart
        setCartCount(cartCount + 1); // Increment cart count when adding an item
      };

    return (
        <div id="product-details-component" className="p-4 lg:px-10 lg:pt-8 lg:pb-16 flex flex-col gap-8">
            {/* Breadcrumb navigation */}
            <div id="navigation-history-container">
                {breadCrumb.map((path, index) => (
                    <Link
                        key={index}
                        className={`font-Roboto text-base lg:text-xl font-medium lg:font-semibold tight-[0.15px] p-1 ${
                            index === breadCrumb.length - 1 ? "text-[#2284B6]" : "text-[#938F96]"
                        }`}
                        to={path.url}
                    >
                        {path.pathname}
                    </Link>
                ))}
            </div>

            {/* Product details section */}
            <div className="flex gap-5">
                {/* Product details container */}
                <div className="flex flex-col gap-12">
                    {/* Product images, description, cost, review container */}
                    <div className="flex flex-col xl:flex-row gap-6 bg-white px-4 pt-5 pb-16 md:py-12 md:px-10 justify-around items-center xl:items-start">
                        {/* Product images */}
                        <ProductImgs images={product.imgs} />

                        {/* Product details */}
<div className="xl:w-[55%] flex flex-col gap-8 xl:mt-0 mt-5">
    {/* Product description */}
    <div id="product-desc-div">
        <p className="text-base font-medium lg:text-2xl lg:font-semibold">{product.description}</p>
{/* Product ratings and reviews */}
<div className="flex items-center my-1 gap-3" id="reviews-div">
    {/* Ratings stars */}
    {product.ratings && Number.isInteger(product.ratings) && [...Array(product.ratings)].map((_, index) => (
        <svg
            key={index}
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
        >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    ))}
    <p className="hidden lg:block ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {product.reviews} reviews
    </p>
    <a className="lg:text-sm text-xs whitespace-nowrap font-medium underline text-[#2284B6] hover:text-[#63acd1] cursor-pointer">
        {product.reviews} reviews
    </a>
    <a className="text-sm font-medium text-indigo-600 whitespace-nowrap hover:text-indigo-500">
        108+ orders
    </a>
</div>

    </div>



                            {/* Product price and discounts */}
                            <div>
                                <p id="product-cost" className="text-[36px] font-semibold">
                                    ${product.price}
                                </p>
                                <p id="discounts-item" className="text-xl line-through">
                                    $222
                                </p>
                            </div>

                            {/* Product colors and quantity */}
                            <div className="flex flex-col 2xl:flex-row justify-start gap-4 2xl:gap-[90px] items-start 2xl:items-center">
                                {/* Product Colors Div */}
                                <ProductColors colors={product.colors} />

                                {/* Product quantity div */}
                                <Quantity
                                    qty={qty}
                                    incrementQty={incrementQty}
                                    decrementQty={decrementQty}
                                    updateQtyOnChange={updateQtyOnChange}
                                />
                            </div>

                            {/* Shipping details */}
                            <div className="flex items-center gap-[90px]">
                                <div className="flex gap-2">
                                    <img className="w-5" src={infoIcon} alt="info icon" />
                                    <p className="whitespace-nowrap text-sm lg:text-xl">Ship to: Brooklyn</p>
                                </div>
                                <div id="shipping-cost-div">
                                    <p className="whitespace-nowrap text-red-700 font-semibold text-sm lg:text-xl">Shipping: $5</p>
                                </div>
                            </div>

                            {/* Price details */}
                            <p className="text-lg pr-20">
                                Available at a lower price from <span><a className="border-b-1 border-sky-500 text-blue-700" href="/">other seller</a></span> that may not offer free shipping
                            </p>

                            {/* Apply coupon section */}
                            <div className="flex items-center gap-2">
                                <input className="w-6 h-6 align-middle" type="checkbox" />
                                <div>
                                    <p className="text-lg text-[#09618E]">Apply Coupon</p>
                                </div>
                            </div>

                            {/* Buy now and add to cart buttons (mobile view) */}
                            <div className="flex flex-col lg:hidden gap-3">
                                <button
                                    type="button"
                                    className="rounded bg-[#EEC643] py-4 px-8 border border-solid border-[#EEC643]"
                                >
                                    Buy now
                                </button>
                                <button onClick={addToCartHandler}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* About Product container */}
                    <AboutProduct />
                </div>

                {/* Shipping Component */}
                <ShippingComponent product={product} />

            </div>

            {/* Similar Products */}
            <SimilarProducts similarProducts={similarProductsTest} />
        </div>
    );
};


const mapStateToProps = (state) => ({
    productTestState: state.productTestReducer,
    carts: state.cartReducer.carts, // Ensure to access the 'carts' array from cartReducer
    similarProductsTest: state.similarProductsTestReducer,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product)),
    setCarts: (carts) => dispatch(setCarts(carts)), // Ensure to pass the 'carts' data when dispatching
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
