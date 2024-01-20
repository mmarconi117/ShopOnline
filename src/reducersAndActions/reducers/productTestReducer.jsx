import * as actionTypes from "../actions";
import ProductImgTest from "../../assets/IMAGES/Product card/Rectangle 12305-1.png";
import ProductImgTest2 from "../../assets/IMAGES/Product card/Rectangle 12305-2.png";
import ProductImgTest3 from "../../assets/IMAGES/Product card/Rectangle 12305-3.png";
import ProductImgTest4 from "../../assets/IMAGES/Product card/Rectangle 12305-4.png";
import ProductImgTest5 from "../../assets/IMAGES/Product card/Rectangle 12305-5.png";
import ProductImgTest6 from "../../assets/IMAGES/Product card/Rectangle 12305-6.png";
import ProductImgTest7 from "../../assets/IMAGES/Product card/Rectangle 12305-7.png";
import ProductImgTest8 from "../../assets/IMAGES/Product card/Rectangle 12305-8.png";
import ProductImgTest9 from "../../assets/IMAGES/Product card/Rectangle 12305-9.png";

export const initialState = {
    product: {
        id: 1,
        imgs: [
            {
                img: ProductImgTest
            },
            {
                img: ProductImgTest2
            },
            {
                img: ProductImgTest3
            },
            {
                img: ProductImgTest4
            },
            {
                img: ProductImgTest5
            },
            {
                img: ProductImgTest6
            },
            {
                img: ProductImgTest7
            },
            {
                img: ProductImgTest8
            },
            {
                img: ProductImgTest9
            }
        ],
        colors: [
            {
                color: "red"
            },
            {
                color: "blue"
            },
            {
                color: "green"
            }
        ],
        price: 178,
        discount: 20,
        description:
            "COSMO COS-DIS6502 24 in. Dishwasher in Fingerprint Resistant Stainless Steel with Stainless Steel Tub",
        ratings: 4.7,
        sold: 4788,
        reviews: 117
    }
};

export const productTestReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
};

export default productTestReducer;
