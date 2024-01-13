import { GET_SIMILAR_PRODUCTS } from "../actions";
import img from "../../assets/IMAGES/Product card/Rectangle 12305-2.png";
import img2 from "../../assets/IMAGES/Product card/Rectangle 12305-3.png";
import img3 from "../../assets/IMAGES/Product card/Rectangle 12305-4.png";
import img4 from "../../assets/IMAGES/Product card/Rectangle 12305-5.png";
import img5 from "../../assets/IMAGES/Product card/Rectangle 12305-6.png";
import img6 from "../../assets/IMAGES/Product card/Rectangle 12305-7.png";
import img7 from "../../assets/IMAGES/Product card/Rectangle 12305-8.png";
import img8 from "../../assets/IMAGES/Product card/Rectangle 12305-9.png";
import img9 from "../../assets/IMAGES/Product card/Rectangle 12305-10.png";
import img10 from "../../assets/IMAGES/Product card/Rectangle 12305-11.png";

export const initialState = {
    similarProductsTest: [
        {
            img: img,
            price: 25.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: img2,
            price: 24.99,
            description: "lorem ipsum ",
            ratings: 4.6,
            sold: 4788,
        },
        {
            img: img3,
            price: 23.99,
            description: "lorem ipsum ",
            ratings: 4.5,
            sold: 4788,
        },
        {
            img: img4,
            price: 22.99,
            description: "lorem ipsum ",
            ratings: 4.4,
            sold: 4788,
        },
        {
            img: img5,
            price: 21.99,
            description: "lorem ipsum ",
            ratings: 4.4,
            sold: 4788,
        },
        {
            img: img6,
            price: 20.99,
            description: "lorem ipsum ",
            ratings: 4.3,
            sold: 4788,
        },
        {
            img: img7,
            price: 19.99,
            description: "lorem ipsum ",
            ratings: 4.2,
            sold: 4788,
        },
        {
            img: img8,
            price: 18.99,
            description: "lorem ipsum ",
            ratings: 4.4,
            sold: 4788,
        },
        {
            img: img9,
            price: 17.99,
            description: "lorem ipsum ",
            ratings: 4.3,
            sold: 4788,
        },
        {
            img: img10,
            price: 16.99,
            description: "lorem ipsum ",
            ratings: 4.2,
            sold: 4788,
        },
    ],
};

export const similarProductsTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SIMILAR_PRODUCTS:
            return {
                ...state,
                product: action.payload,
            };
        default:
            return state;
    }
};
