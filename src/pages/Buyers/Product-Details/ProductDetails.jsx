// modules
import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";
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
                paths.push({ pathname: "home/", url: "/" });
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

    const breadCrumbComp = breadCrumb.map((path, index) => {
        return (
            <a
                className="text-xl p-2.5 mr-2.5"
                href={path.url}
                key={index}
            >
                {path.pathname}
            </a>
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
        <div id="product-details-component">
            <div className="flex">
                {/* Product Details container*/}
                <div style={{ width: "85%", margin: "auto" }}>
                    {/* "BreadCrumb" */}
                    <div
                        id="navigation-history-container"
                        style={{ margin: "1rem auto", width: "inherit" }}
                    >
                        {breadCrumbComp}
                    </div>
                    {/* Product images, Description, Cost, review container */}
                    <div className="flex justify-center">
                        {/* Product Images */}
                        <ProductImgs images={product.imgs} />

                        <div style={{ width: "40%" }}>
                            {/* Product description div */}
                            <div id="product-desc-div">
                                <p className="text-4xl">{product.description}</p>
                            </div>
                            {/* Product rating, cost and discounts, color and quantity */}
                            <div>
                                {/* Product Rating & Review Div */}
                                <div
                                    className="flex items-center"
                                    id="reviews-div"
                                    style={{ margin: "1% auto" }}
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
                                {/* Product Cost Div */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        width: "50%",
                                        alignItems: "center",
                                        margin: "10% 0",
                                    }}
                                >
                                    <div>
                                        <p
                                            style={{ fontSize: "2.25rem", fontWeight: "600" }}
                                            id="product-cost"
                                        >
                                            ${product.price}
                                        </p>
                                    </div>
                                    <div style={{ marginLeft: "5%" }}>
                                        <p
                                            id="discounts-item"
                                            style={{
                                                fontSize: "1.25rem",
                                                textDecoration: "line-through",
                                            }}
                                        >
                                            $222
                                        </p>
                                    </div>
                                    <div style={{ marginLeft: "5%" }}>
                                        <p
                                            id="discount-percentage-item"
                                            style={{
                                                fontSize: "1rem",
                                                fontWeight: "400",
                                                backgroundColor: "#f2f2f2",
                                            }}
                                        >
                                            {product.discount}% off
                                        </p>
                                    </div>
                                </div>
                                {/* Product colors & Product quantity component */}
                                <div className="flex justify-between">
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
                                <div id="shipping-div">
                                    <div className="flex items-center my-12 mx-auto ">
                                        <div className="mr-1">
                                            <img
                                                className="w-5"
                                                src={infoIcon}
                                            />
                                        </div>
                                        <div className="flex mr-60">
                                            <p className="mr-2 text-xl">Ship to:</p>
                                            <p className=" text-xl">Brooklyn</p>
                                        </div>
                                        <div id="shipping-cost-div">
                                            <p className="text-red-700 text-xl">Shipping: $5</p>
                                        </div>
                                    </div>

                                    <div
                                        id="shipping-brief-details-div"
                                        className="w-1/2 mb-24"
                                    >
                                        <span className="text-lg">
                                            Available at a lower price from{" "}
                                            <a
                                                className="border-b-1 border-sky-500 text-blue-700"
                                                href="/"
                                            >
                                                other seller
                                            </a>{" "}
                                            that may not offer free shipping
                                        </span>
                                    </div>
                                    <div className="flex ">
                                        <div className="mr-2 ">
                                            <input
                                                className="w-6 h-6"
                                                style={{
                                                    verticalAlign: "middle",
                                                }}
                                                type="checkbox"
                                            />
                                        </div>
                                        <div className="">
                                            <p className="text-lg text-blue-700">Apply Coupon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add to cart div */}
                            <div
                                className="flex justify-around"
                                style={{ margin: "15% auto auto auto" }}
                            >
                                <div>
                                    <button
                                        type="button"
                                        style={styles.btnStyles}
                                        className="text-cyan-500 rounded-lg"
                                        onClick={() => {
                                            let productTest = { ...product, qty };
                                            addToCart(productTest);
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className=" bg-amber-500 rounded-lg"
                                        style={styles.btnStyles}
                                    >
                                        Buy Nnow
                                    </button>
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
