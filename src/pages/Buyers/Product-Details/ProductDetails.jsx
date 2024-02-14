// modules
import { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import infoIcon from "../../../assets/ICONS/info.svg";

import { connect } from "react-redux";

import { setCarts, addToCart } from "../../../reducersAndActions/actions/cartAction";
import { getProductDetails } from "../../../reducersAndActions/actions/productTestAction";

import PropTypes from "prop-types";

// components

import SimilarProducts from "./SimilarProducts";
import ProductImgs from "./ProductImgs";
import Quantity from "./Quantity";
import ProductColors from "./ProductColors";
import AboutProduct from "./AboutProduct";
import ShippingComponent from "./Shipping-Component/Shipping";

const mapStateToProps = (state) => {
    return {
        productTestState: state.productTestReducer,
        carts: state.cartReducer,
        similarProductsTest: state.similarProductsTestReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addToCart: (data) => dispatch(addToCart(data)),
});

function ProductDetails({
    productTestState: { product },
    addToCart,
    carts: { carts },
    similarProductsTest: { similarProductsTest },
}) {
    const [breadCrumb, setBreadCrumb] = useState([]);
    const [qty, setQty] = useState(1);
    // current urls e.g /products/product-details
    const currentUrl = useHref();

    useEffect(() => {
        setUrlsPath();
    }, []);

    const setUrlsPath = () => {
        // console.log(history);
        const histories = currentUrl.split("/");
        const paths = [];
        for (let i = 0; i < histories.length; i++) {
            if (histories[i] === "") {
                paths.push({ pathname: "home /", url: "/" });
            } else {
                if (i + 1 === histories.length) {
                    paths.push({ pathname: `${histories[i]}`, url: histories[i] });
                } else {
                    paths.push({ pathname: `${histories[i]}/`, url: histories[i] });
                }
            }
        }
        setBreadCrumb(paths);
    };

    const incrementQty = () => {
        setQty(qty + 1);
    };

    const decrementQty = () => {
        if (qty <= 1) {
            setQty(1);
        } else {
            setQty(qty - 1);
        }
    };

    const updateQtyOnChange = (e) => {
        setQty(e.target.value);
    };

    const breadCrumbComp = breadCrumb.map((path, index, arr) => {
        return (
            <Link
                className={`font-Roboto text-base font-semibold tight-[0.15px] p-1 ${index === arr.length - 1 ? "text-[#2284B6]": "text-[#938F96]"}`}
                to={path.url}
                key={index}
            >
                {path.pathname}
            </Link>
        );
    });

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
        },
    };

    return (
        <div id="product-details-component" className="px-10 pt-8 pb-16 flex flex-col gap-8">
            <div id="navigation-history-container">
                {breadCrumbComp}
            </div>
            <div className="flex gap-5">
                {/* Product Details container*/}
                <div className=" flex flex-col gap-12">
                    {/* Product images, Description, Cost, review container */}
                    <div className="flex gap-6 bg-white py-12 px-10 justify-around">
                        {/* Product Images */}
                        <ProductImgs images={product.imgs} />

                        <div className="w-[50%] flex flex-col gap-8">
                            {/* Product description div */}
                            <div id="product-desc-div" className="">
                                <p className="text-4xl">{product.description}</p>
                                <div
                                    className="flex items-center my-1"
                                    id="reviews-div"
                                >
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {product.ratings}
                                    </p>
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        out of
                                    </p>
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        5
                                    </p>
                                    <div>
                                        <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {product.reviews} reviews
                                        </a>
                                        <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            108+ orders
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p id="product-cost" className="text-[36px] font-semibold">
                                    ${product.price}
                                </p>
                                <p id="discounts-item" className="text-xl line-through">
                                    $222
                                </p>

                            </div>
                            {/* Product colors & Product quantity component */}
                            <div className="flex justify-start gap-[90px] items-center">
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
                            {/* Shipping Product div */}
                            <div className="flex items-center justify-start gap-[90px]">
                                <div className="flex gap-2">
                                    <img
                                        className="w-5"
                                        src={infoIcon}
                                    />
                                    <p className="inline-block text-xl">Ship to: Brooklyn</p>
                                </div>
                                <div id="shipping-cost-div">
                                    <p className="text-red-700 text-xl">Shipping: $5</p>
                                </div>
                            </div>

                            <p className="text-lg pr-20">
                                Available at a lower price from <span><a className="border-b-1 border-sky-500 text-blue-700" href="/">other seller</a></span> that may not offer free shipping
                            </p>

                            <div className="flex items-center gap-2">
                                <input
                                    className="w-6 h-6 align-middle"
                                    type="checkbox"
                                />
                                <div className="">
                                    <p className="text-lg text-[#09618E]">Apply Coupon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About Product container */}
                    <AboutProduct />
                </div>
                {/* Shipping Component */}
                <ShippingComponent />
            </div>
            {/* Similar Products */}
            <SimilarProducts similarProducts={similarProductsTest} />
        </div>
    );
}

// ProductDetails.propTypes = {
//     auth: PropTypes.object.isRequired
// }
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
// export default ProductDetails;
