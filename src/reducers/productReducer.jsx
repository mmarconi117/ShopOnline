import { SET_PRODUCT } from "../actions";

export const initialState = {
    id: 1,
    imgs: [
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
    ],
    colors: [
        {
            red: "red",
        },
        {
            blue: "blue",
        },
        {
            green: "green",
        },
    ],
    price: 178,
    discount: 20,
    description:
        "COSMO COS-DIS6502 24 in. Dishwasher in Fingerprint Resistant Stainless Steel with Stainless Steel Tub",
    ratings: 4.7,
    sold: 4788,
    reviews: 117,
};

export const setProductDetailsReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default setProductDetailsReducer;
