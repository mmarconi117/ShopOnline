import * as actionTypes from "../actions";
import img from "../../assets/IMAGES/Product card/Rectangle 12305.png";
import img1 from "../../assets/IMAGES/Product card/Rectangle 12305-1.png";
import img2 from "../../assets/IMAGES/Product card/Rectangle 12305-2.png";
import img3 from "../../assets/IMAGES/Product card/Rectangle 12305-3.png";
import img4 from "../../assets/IMAGES/Product card/Rectangle 12305-4.png";
import img5 from "../../assets/IMAGES/Product card/Rectangle 12305-5.png";
import img6 from "../../assets/IMAGES/Product card/Rectangle 12305-6.png";
import img7 from "../../assets/IMAGES/Product card/Rectangle 12305-7.png";
import img8 from "../../assets/IMAGES/Product card/Rectangle 12305-8.png";
import img9 from "../../assets/IMAGES/Product card/Rectangle 12305-9.png";
import img10 from "../../assets/IMAGES/Product card/Rectangle 12305-10.png";
import img11 from "../../assets/IMAGES/Product card/Rectangle 12305-11.png";
import img12 from "../../assets/IMAGES/Product card/Rectangle 12308.png";
import img13 from "../../assets/IMAGES/Product card/Rectangle 12309.png";

export const initialState = {
    catalogue: [
        {
            img: img,
            price: 10000,
            description:
                "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable fo... ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img1,
            price: 10000,
            description:
                "Portable Washing Machine, Mini Ultrasonic Washing Machine 3 in 1 Dishwashers Ultrasonic Waves Suitable for Home",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img2,
            price: 10000,
            description:
                "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable fore. ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img3,
            price: 10000,
            description:
                "COMFEE’ Countertop Dishwasher, Energy Star Portable Dishwasher, 6 Place Settings, Mini Dishwasher ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img4,
            price: 10000,
            description:
                "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img5,
            price: 10000,
            description:
                "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img6,
            price: 10000,
            description:
                "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img7,
            price: 10000,
            description:
                "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img8,
            price: 10000,
            description:
                "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img9,
            price: 10000,
            description:
                "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank For Glass",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img10,
            price: 10000,
            description:
                "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img11,
            price: 10000,
            description:
                "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img12,
            price: 10000,
            description:
                "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
        {
            img: img13,
            price: 10000,
            description:
                "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
            ratings: 4.7,
            sold: 4788,
            qty: 232,
        },
    ],
};
const productCatalogueReducer = (state = initialState, action) => {
    switch (action.types) {
        case actionTypes.PRODUCT_CATALOGUE:
            return state;
        default:
            return state;
    }
};

export default productCatalogueReducer;
