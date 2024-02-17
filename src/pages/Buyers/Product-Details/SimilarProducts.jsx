import { useState, useEffect, useRef } from "react";

const SimilarProducts = ({ similarProducts }) => {
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Function to update the viewport width state
  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  // Effect to update the viewport width state when the window is resized
  useEffect(() => {
    window.addEventListener('resize', updateViewportWidth);
    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  const slideController = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft +=
        direction === "left"
          ? -cardRef.current.offsetWidth
          : cardRef.current.offsetWidth;
    }
  };

  const similarProductsComp = similarProducts.map((product, index) => {
      return (
        <li key={index} ref={cardRef} className="card list-none h-[392px] bg-white rounded-md flex flex-col items-stretch p-2 pt-3 pb-6 md:px-[10px] md:pt-4 md:pb-8">
            <div className="min-w-[159px] max-w-[200px] self-center">
                <img src={product.img} className="h-[222px] object-cover"/> 
            </div>
            <p className="">
                Lorem ipsum dolor sit amet, dolor sit amet, consectetur
                {/* {product.description} */}
            </p>
            <p className=""> From <span className="text-xl font-bold text-red-600">${product.price}</span></p>
        </li>
        
      );
  });

  return (
    //  {/* Similar Products slide show */}

    <div
      className="self-center my-16 max-w-full flex flex-col gap-8"
      id="similar-products-div"
    >
        <p className="text-3xl font-bold">Based on recently viewed</p>

      {/* Similar product items list */}
      
        <div className="wrapper w-full relative">
            <button
            type="button"
            className="bg-stone-100 absolute cursor-pointer top-1/2 w-[50px] h-[50px] shadow-lg rounded-full"
            onClick={() => {
                slideController("left");
            }}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataslot="icon"
                className="w-6 h-6 mx-auto"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
                />
            </svg>
            </button>
            <ul
            ref={carouselRef}
            className="carousel grid grid-flow-col gap-2 sm:gap-4 overflow-hidden scroll-smooth"
            style={{
                gridAutoColumns: `calc((100% 
                    ${viewportWidth >= 1530 ? "/ 6  - 16px))" : 
                    viewportWidth >= 1280 ? "/ 5  - 12px))" :
                    viewportWidth >= 1024 ? "/ 4  - 8px))" :
                    viewportWidth >= 768 ? "/ 3  - 4px))" :
                    "/ 2))"}`,
            }}
            >
            {similarProductsComp}
            </ul>
            <button
            className="shadow-lg absolute cursor-pointer top-1/2 w-[50px] h-[50px] bg-stone-100 right-0 rounded-full"
            type="button"
            onClick={() => {
                slideController("right");
                }}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataslot="icon"
                className="w-6 h-6 mx-auto"
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
