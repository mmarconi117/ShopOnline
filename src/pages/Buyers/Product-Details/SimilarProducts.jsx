import { useState, useEffect } from "react";


const SimilarProducts = ({ similarProducts }) => {
    const [similarProductsCopy, setSimilarProductsCopy] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    // similar products slider trigger btns state
    const [isPreviousSlide, setIsPreviousSlide] = useState(true);
    const [isNextSlide, setIsNextSlideSimilarProducts] = useState(false);


    useEffect(() => {
        const copy = similarProducts.slice(0, 5); //only show 5 products at a time
        const totalSlides = Math.ceil(similarProducts.length / 5);
        setSimilarProductsCopy(copy);
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
            setIsNextSlideSimilarProducts(false);
        } else {
            setIsNextSlideSimilarProducts(true);
        }
    };

    const onChangeSlide = (slideIndex) => {
        const startIndex = slideIndex * 5;
        let endIndex = startIndex + 5;
        if (endIndex > similarProducts.length) {
            endIndex = similarProducts.length;
        }
        const newResult = similarProducts.slice(startIndex, endIndex);
        setCurrentSlide(slideIndex);
        setSimilarProductsCopy(newResult);
    };

    const similarProductsComp = similarProductsCopy.map((product, index) => {
        return (
            <div
                className="w-1/6 p-5 border shadow-md"
                key={index}
            >
                <div>
                    <img src={product.img} />
                </div>
                <div className="mt-5">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, dolor sit amet, consectetur
                            {/* {product.description} */}
                        </p>
                    </div>
                    <div className="my-2.5 mx-auto flex ">
                        <div className="mr-2 ">
                            <p className=""> From </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-red-600">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        //  {/* Similar Products slide show */}

        <div
            className="self-center my-16 max-w-max flex flex-col gap-8"
            id="similar-products-div"
        >
            <p className="text-3xl font-bold">Based on recently viewed</p>

            {/* Similar product items list */}
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    className="hover:cursor-pointer"
                    disabled={isPreviousSlide}
                    onClick={() => {
                        slideController(currentSlide - 1, true);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        dataslot="icon"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <div className="flex items-stretch justify-start gap-2 lg:gap-3 xl:gap-5">{similarProductsComp}</div>
                <button
                    className="hover:cursor-pointer"
                    type="button"
                    disabled={isNextSlide}
                    onClick={() => {
                        slideController(currentSlide + 1, true);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        dataslot="icon"
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
    );
};

export default SimilarProducts;
