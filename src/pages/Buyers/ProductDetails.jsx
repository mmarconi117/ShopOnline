// modules
import { useState, useEffect } from "react";
import { useNavigate, useHref } from "react-router-dom";

import PropTypes from "prop-types";

// components

import Footer from "../../components/Footer/Footer";

function ProductDetails() {
    const [dummyProducts, setDummyProducts] = useState([
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 25.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 24.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 23.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 22.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 21.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 20.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 19.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
    ]);
    // similar products dummy state
    const [copySimilarDummyProducts, setCopySimilarDummyProducts] = useState([]);
    // products dummy state
    const [copyDummyProductImgs, setCopyDummyProductImgs] = useState([]);
    const [currentSlideSimilarProducts, setCurrentSlideSimilarProducts] = useState(0);
    const [currentSlideProductImgs, setCurrentSlideProductImgs] = useState(0);
    const [allSlidesSimilarProducts, setAllSidesSimilarProducts] = useState(0);
    const [allSlideProductImgs, setAllSlideProductimgs] = useState(0);
    // similar products slider trigger btns state
    const [isPreviousSlideSimilarProducts, setIsPreviousSlideSimilarProducts] = useState(true);
    const [isNextSlideSimilarProducts, setIsNextSlideSimilarProducts] = useState(false);
    // slider trigger btns state for product imgs
    const [isPreviousSlideProductImgs, setisPreviousSlideProductImgs] = useState(true);
    const [isNextSlideProductImgs, setisNextSlideProductImgs] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [qty, setQty] = useState(1);
    const [breadCrumb, setBreadCrumb] = useState([]);
    // current urls e.g /products/product-details
    const currentUrl = useHref();

    useEffect(() => {
        // navigate();
        setUrlsPath();
        const copy = dummyProducts.slice(0, 5);
        const allSlides = Math.ceil(dummyProducts.length / 5);
        setCopyDummyProductImgs(copy);
        setCopySimilarDummyProducts(copy);
        setAllSidesSimilarProducts(Math.ceil(dummyProducts.length / 5));
        setAllSlideProductimgs(Math.ceil(dummyProducts.length / 5));
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
        if (e.target.value < 1) {
            setQty(1);
        } else {
            setQty(Number(e.target.value));
        }
    };

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const slideController = (slideIndex, isSimilarProducts) => {
        onChangeSlide(slideIndex, isSimilarProducts);
        if (slideIndex < 1) {
            setIsPreviousSlideSimilarProducts(true);
            setisPreviousSlideProductImgs(true);
        } else {
            setIsPreviousSlideSimilarProducts(false);
            setisPreviousSlideProductImgs(false);
        }
        // similar products trigger btns disabled, slider controller
        if (slideIndex + 1 < allSlidesSimilarProducts) {
            setIsNextSlideSimilarProducts(false);
        } else {
            setIsNextSlideSimilarProducts(true);
        }
        // product imgs trigger btns disabled, slider controller
        if (slideIndex + 1 < allSlideProductImgs) {
            setisNextSlideProductImgs(false);
        } else {
            setisNextSlideProductImgs(true);
        }
    };

    const onChangeSlide = (slideIndex, isSimilarProducts) => {
        const startIndex = slideIndex * 5;
        let endIndex = startIndex + 5;

        if (endIndex > dummyProducts.length) {
            endIndex = dummyProducts.length;
        }
        const newResult = dummyProducts.slice(startIndex, endIndex);
        if (isSimilarProducts) {
            setCurrentSlideSimilarProducts(slideIndex);
            setCopySimilarDummyProducts(newResult);
        } else {
            setCopyDummyProductImgs(newResult);
            setCurrentSlideProductImgs(slideIndex);
        }
    };

    const dummyImgsComp = copyDummyProductImgs.map((product, index) => {
        return (
            <div
                key={index}
                style={{ width: "10%", marginRight: "2%" }}
            >
                <img src={product.img} />
            </div>
        );
    });
    const imagesComp = copySimilarDummyProducts.map((product, index) => {
        return (
            <div
                style={{
                    width: "15%",
                    height: "auto",
                }}
                key={index}
            >
                <div>
                    <img src={product.img} />
                </div>
                <div>
                    <div style={{ margin: "10px auto" }}>
                        <p style={{ fontSize: "1.25rem" }}>${product.price}</p>
                    </div>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span style={{ fontSize: ".75rem" }}>{product.sold} sold</span>
                        <div
                            className="flex items-center"
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                            <svg
                                class="w-3 h-3 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span style={{ fontSize: ".75rem" }}>{product.ratings}</span>
                    </div>
                    <div>
                        <span>Free shipping</span>
                    </div>
                </div>
            </div>
        );
    });
    const breadCrumbComp = breadCrumb.map((path, index) => {
        return (
            <a
                href={path.url}
                key={index}
                style={{
                    fontSize: "1.25rem",
                    marginRight: "10px",
                    padding: "10px",
                }}
            >
                {path.pathname}
            </a>
        );
    });

    const styles = {
        colorOptionsDiv: {
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
        },
        colorOptionDiv: {
            padding: "5px",
            width: "25%",
            marginRight: "5%",
            border: isHover ? "1px solid black" : "none",
        },
        colorOptionItem: {
            borderRadius: "5%",
            border: "1px solid black",
            padding: "10px",
        },
        blue: {
            backgroundColor: "blue",
        },
        red: {
            backgroundColor: "red",
        },
        green: {
            backgroundColor: "green",
        },

        button: {
            display: "inline-block",
            textAlign: "center",
            border: "1px solid black",
            padding: ".375rem .75rem",
            fontSize: "1.25rem",
        },

        addToCartBtn: {
            display: "inline-block",
            textAlign: "center",
            border: "1px solid black",
            padding: "15px",
            fontSize: "1.25rem",
            width: "100%",
            borderRadius: "10px",
        },
    };

    return (
        <div id="product-details-component">
            {/* Product Details container*/}
            <div style={{ width: "75%", margin: "auto" }}>
                {/* Navigation History container */}
                <div
                    id="navigation-history-container"
                    style={{ margin: "1rem" }}
                >
                    {breadCrumbComp}
                </div>
                {/* Product images and Description container */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* Product main image div */}
                    <div
                        id="images-div"
                        style={{ width: "100%" }}
                    >
                        <div id="product-image">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" />
                        </div>
                        {/* Product Images slides div */}
                        <div
                            id="product-images"
                            className="flex"
                            style={{ width: "100%", marginTop: "2rem" }}
                        >
                            <div style={{ margin: "auto 1.25rem" }}>
                                <button
                                    type="button"
                                    disabled={isPreviousSlideProductImgs}
                                    onClick={() => {
                                        slideController(currentSlideProductImgs - 1, false);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        dataSlot="icon"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5 8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {dummyImgsComp}
                            <div style={{ margin: "auto 1.25rem" }}>
                                <button
                                    type="button"
                                    disabled={isNextSlideProductImgs}
                                    onClick={() => {
                                        slideController(currentSlideProductImgs + 1, false), false;
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        dataSlot="icon"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product description div */}
                    <div style={{ width: "100%" }}>
                        <div id="product-desc-div">
                            <p style={{ fontSize: "2rem" }}>
                                COSMO COS-DIS6502 24 in. Dishwasher in Fingerprint Resistant
                                Stainless Steel with Stainless Steel Tub
                            </p>
                        </div>

                        <div>
                            {/* Product Rating & Review Div */}
                            <div
                                class="flex items-center"
                                id="reviews-div"
                                style={{ margin: "1% auto" }}
                            >
                                <svg
                                    class="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    class="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    class="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    class="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    4.95
                                </p>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    out of
                                </p>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    5
                                </p>
                                <div>
                                    <a class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        117 reviews
                                    </a>
                                    <a class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
                                        $178
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
                                        20% off
                                    </p>
                                </div>
                            </div>
                            {/* Product Colors Div */}
                            <div>
                                <div>
                                    <p style={{ fontSize: "1.75rem" }}>Color: White</p>
                                </div>
                                <div
                                    id="colors-options"
                                    style={styles.colorOptionsDiv}
                                >
                                    <div
                                        id="color-option-div"
                                        style={styles.colorOptionDiv}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        key={1}
                                    >
                                        <p
                                            className="bg-red-700"
                                            style={styles.colorOptionItem}
                                        ></p>
                                    </div>
                                    <div
                                        id="color-option-div"
                                        style={styles.colorOptionDiv}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        key={1}
                                    >
                                        <p
                                            className="bg-green-700"
                                            style={styles.colorOptionItem}
                                        ></p>
                                    </div>
                                    <div
                                        id="color-option-div"
                                        style={styles.colorOptionDiv}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        key={1}
                                    >
                                        <p
                                            className="bg-blue-700"
                                            style={styles.colorOptionItem}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            {/* Product quantity div */}
                            <div style={{ margin: "10% auto" }}>
                                <div style={{ marginBottom: "1%" }}>
                                    <p style={{ fontSize: "2rem" }}>Quantity</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        width: "25%",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                    }}
                                >
                                    <div style={{ marginRight: "5%" }}>
                                        <button
                                            style={styles.button}
                                            type="button"
                                            onClick={decrementQty}
                                        >
                                            -
                                        </button>
                                    </div>
                                    <div style={{ marginRight: "5%" }}>
                                        <div>
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="block w-full rounded-md border-0 py-2 text-black-900 ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                                                value={qty}
                                                onChange={updateQtyOnChange}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ marginRight: "5%" }}>
                                        <button
                                            style={styles.button}
                                            type="button"
                                            onClick={incrementQty}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Shipping Product div */}
                            <div id="shipping-div">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        margin: "10% auto",
                                    }}
                                >
                                    <p style={{ fontSize: "2rem" }}>Ship to:</p>
                                    <div id="shipping-map-icon-div">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-10 h-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p>Brooklyn</p>
                                </div>

                                <div
                                    id="shipping-cost-div"
                                    style={{ margin: "2% auto" }}
                                >
                                    <p style={{ fontSize: "2rem" }}>Shipping: $5</p>
                                </div>
                                <div id="shipping-brief-details-div">
                                    <span>
                                        From China to Nigeria via xxxx Standard Shipping Estimated
                                        delivery on May 15
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Add to cart div */}
                        <div style={{ margin: "10% auto" }}>
                            <button
                                type="button"
                                style={styles.addToCartBtn}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* About Product container */}
                <div
                    style={{
                        border: "1px solid black",
                        margin: "5% auto",
                        backgroundColor: "#f2f2f2",
                    }}
                >
                    {/* Product details div */}
                    <div
                        id="product-description-div"
                        style={{ borderBottom: "1px solid black", padding: "1%" }}
                    >
                        <p style={{ fontSize: "2rem" }}>Product Details</p>
                    </div>
                    {/* Product details in list div */}
                    <ul
                        className="list-inside list-decimal"
                        id="details-list"
                        style={{ padding: "1.5rem" }}
                    >
                        <li style={{ padding: "1rem .5rem" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
                            consectetur semper nunc in molestie.
                        </li>
                        <li style={{ padding: "1rem .5rem" }}>
                            titor eu convallis sit amet, semper eget mauris. Integer in pulvinar
                            mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique
                            arcu. Duis congue orci id libero dictum sollicitudin. Curabitur dapibus
                            arcu leo, condimentum tempus augue condimentum sed. Aliquam sed auctor
                            ex.
                        </li>
                        <li style={{ padding: "1rem .5rem" }}>
                            {" "}
                            Nunc quis neque non eros dictum scelerisque ut ac urna. Etiam vel felis
                            molestie, malesuada neque tempus, bibendum mauris. Nullam sit amet
                            rhoncus nisl. Quisque non vehicula dui. Vestibulum neque tortor,
                            placerat sit amet condimentum euismod, suscipit lobortis diam. Sed
                            varius elit non erat dignissim vulputate.
                        </li>
                        <li style={{ padding: "1rem .5rem" }}>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
                            consectetur semper nunc in molestie.
                        </li>
                        <li style={{ padding: "1rem .5rem" }}>
                            titor eu convallis sit amet, semper eget mauris. Integer in puLorem
                            ipsum dolor sit amet, consectetur adipiscing elit donec consectetur
                            semper nunc in molestie.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit donec consectetur semper nunc in molestie.
                        </li>
                        <li style={{ padding: "1rem .5rem" }}>
                            Nunc quis neque non eros dictum scelerisque ut ac urna. Etiam vel felis
                            molestie, malesuada neque tempus, bibendum mauris. Nullam sit amet
                            rhoncus nisl. Quisque non vehicula dui. Vestibulum neque tortor,
                            placerat sit amet condimentum euismod, suscipit lobortis diam. Sed
                            varius elit non erat dignissim vulputate.
                        </li>
                    </ul>
                </div>
                {/* Product features and specifications container */}
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    {/* Product features div */}
                    <div
                        style={{
                            width: "45%",
                            border: "1px solid black",
                            backgroundColor: "#f2f2f2",
                        }}
                    >
                        <div style={{ borderBottom: "1px solid black", padding: "2%" }}>
                            <p style={{ fontSize: "1.5rem" }}>Key Features</p>
                        </div>
                        <div>
                            <ul
                                className="list-inside list-decimal"
                                style={{ padding: "1.5rem" }}
                            >
                                <li style={{ padding: "1rem .5rem" }}>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                    {/* Product specifications div */}
                    <div
                        style={{
                            width: "45%",
                            border: "1px solid black",
                            backgroundColor: "#f2f2f2",
                        }}
                    >
                        <div style={{ borderBottom: "1px solid black", padding: "2%" }}>
                            <p style={{ fontSize: "1.5rem" }}>Specifications</p>
                        </div>
                        <div style={{ padding: "1rem" }}>
                            <div>
                                <p
                                    style={{
                                        padding: "1rem .5rem",
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    Size:
                                </p>
                            </div>
                            <div>
                                <p
                                    style={{
                                        padding: "1rem .5rem",
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    Weight:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Similar Products slide show */}
                <div
                    id="similar-products-div"
                    style={{ width: "100%", height: "auto", margin: "10% auto" }}
                >
                    <div style={{ width: "100%", height: "auto", margin: "5% auto" }}>
                        <p style={{ fontSize: "2rem" }}>You may also like</p>
                    </div>

                    {/* Similar product items list */}
                    <div style={{ display: "flex" }}>
                        <div style={{ margin: "auto 25px" }}>
                            <button
                                type="button"
                                disabled={isPreviousSlideSimilarProducts}
                                onClick={() => {
                                    slideController(currentSlideSimilarProducts - 1, true);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    dataSlot="icon"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            {imagesComp}
                        </div>
                        <div style={{ margin: "auto 25px" }}>
                            <button
                                type="button"
                                disabled={isNextSlideSimilarProducts}
                                onClick={() => {
                                    slideController(currentSlideSimilarProducts + 1, true);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    dataSlot="icon"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// ProductDetails.propTypes = {
//     auth: PropTypes.object.isRequired
// }

export default ProductDetails;
