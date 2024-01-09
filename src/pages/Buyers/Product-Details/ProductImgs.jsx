import React, { useState, useEffect } from "react";
import ProductImage from "../../../assets/IMAGES/Product card/Product image.png";
import RectanleImg1 from "../../../assets/IMAGES/Product card/Rectangle 12305-1.png";
import RectangleImg2 from "../../../assets/IMAGES/Product card/Rectangle 12305-2.png";
import RectangleImg3 from "../../../assets/IMAGES/Product card/Rectangle 12305-3.png";
import RectangleImg4 from "../../../assets/IMAGES/Product card/Rectangle 12305-4.png";
import RectangleImg5 from "../../../assets/IMAGES/Product card/Rectangle 12305-5.png";
import RectangleImg6 from "../../../assets/IMAGES/Product card/Rectangle 12305-6.png";
import RectangleImg7 from "../../../assets/IMAGES/Product card/Rectangle 12305-7.png";
import RectangleImg8 from "../../../assets/IMAGES/Product card/Rectangle 12305-8.png";
import RectangleImg9 from "../../../assets/IMAGES/Product card/Rectangle 12305-9.png";

const ProductImgs = () => {
    const [dummyProductImgs, setDummyProductImgs] = useState([
        {
            img: RectanleImg1,
        },
        {
            img: RectangleImg2,
        },
        {
            img: RectangleImg3,
        },
        {
            img: RectangleImg4,
        },
        {
            img: RectangleImg5,
        },
        {
            img: RectangleImg6,
        },
        {
            img: RectangleImg7,
        },
        {
            img: RectangleImg8,
        },
        {
            img: RectangleImg9,
        },
    ]);
    const [copyDummyImgs, setCopyDummyImgs] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    // slider trigger btns state for product imgs
    const [isPreviousSlide, setIsPreviousSlide] = useState(true);
    const [isNextSlide, setIsNextSlideImgs] = useState(false);

    useEffect(() => {
        const copy = dummyProductImgs.slice(0, 3);
        const totalSlides = Math.ceil(dummyProductImgs.length / 3);
        setCopyDummyImgs(copy);
        setTotalSlides(totalSlides);
    }, []);

    const slideController = (slideIndex) => {
        onChangeSlide(slideIndex);
        if (slideIndex < 1) {
            setIsPreviousSlide(true);
        } else {
            setIsPreviousSlide(false);
        }
        if (slideIndex + 1 < totalSlides) {
            setIsNextSlideImgs(false);
        } else {
            setIsNextSlideImgs(true);
        }
    };

    const onChangeSlide = (slideIndex) => {
        const startIndex = slideIndex * 3;
        let endIndex = startIndex + 3;
        if (endIndex > dummyProductImgs) {
            endIndex = dummyProductImgs;
        }
        const newResult = dummyProductImgs.slice(startIndex, endIndex);
        setCopyDummyImgs(newResult);
        setCurrentSlide(slideIndex);
    };

    const dummyImgsComp = copyDummyImgs.map((product, index) => {
        console.log(product.img);
        return (
            <div
                key={index}
                style={{ width: "25%", marginRight: "2%" }}
            >
                <img src={product.img} />
            </div>
        );
    });
    return (
        <div style={{ width: "70%" }}>
            <div
                id="product-image"
                style={{ width: "75%" }}
            >
                <img src={ProductImage} />
            </div>
            <div style={{ width: "100%", marginTop: "2rem", display: "flex" }}>
                <div style={{ margin: "auto 1.25rem" }}>
                    <button
                        type="button"
                        disabled={isPreviousSlide}
                        onClick={() => {
                            slideController(currentSlide - 1, false);
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
                        disabled={isNextSlide}
                        onClick={() => {
                            slideController(currentSlide + 1, false), false;
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
    );
};

export default ProductImgs;
