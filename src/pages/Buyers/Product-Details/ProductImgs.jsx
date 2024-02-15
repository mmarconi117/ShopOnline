import React, { useState, useEffect } from "react";

const ProductImgs = ({ images }) => {
    const [copyDummyImgs, setCopyDummyImgs] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    // slider trigger btns state for product imgs
    const [isPreviousSlide, setIsPreviousSlide] = useState(true);
    const [isNextSlide, setIsNextSlideImgs] = useState(false);

    useEffect(() => {
        const copy = images.slice(0, 3);
        const totalSlides = Math.ceil(images.length / 3);
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
        if (endIndex > images.length) {
            endIndex = images;
        }
        const newResult = images.slice(startIndex, endIndex);
        setCopyDummyImgs(newResult);
        setCurrentSlide(slideIndex);
    };

    const dummyImgsComp = copyDummyImgs.map((product, index) => {
        return (
            <button
                key={index}
                className="w-[25%] cursor-pointer rounded-md outline-none focus:border-2 border-solid border-[#EEC643]"
            >
                <img src={product.img} />
            </button>
        );
    });
    return (
        <div className="xl:w-[45%] lg:min-w-[420px] max-w-[600px]">
            <div
                id="product-image"
            >
                <img src={images[0].img} />
            </div>
            <div className="justify-center flex gap-4 w-full mt-8">{dummyImgsComp}</div>
        </div>
    );
};

export default ProductImgs;
