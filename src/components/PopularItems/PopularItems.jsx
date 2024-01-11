import { useState } from "react";
import { Item } from "./Item";
import { Base } from "./Base";
import  arrow  from "../../assets/ICONS/RightPointer.svg";
import rightArrow from "../../assets/ICONS/Fill/arrow-right.svg";

export const PopularItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 2;

  const totalSlides = Math.ceil(Base.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const exploreItems = Array.from({ length: itemsPerSlide }, (_, i) => {
    const index = currentSlide * itemsPerSlide + i;
    return (
      <span
        key={index}
        className={`slide ${index === currentSlide ? "active" : ""}`}
      >
        <Item
          key={index}
          src={Base[index % Base.length].img}
          description={Base[index % Base.length].description}
          price={Base[index % Base.length].price}
        />
      </span>
    );
  });

  const desktopExploreItems = Base.map((item, i) => {
    return (
      <Item
        key={i}
        src={item.img}
        description={item.description}
        price={item.price}
      />
    );
  })

  return (
    <section className="relative w-full flex flex-col items-start pt-8 pl-4 pb-2 gap-4  min-[391px]:justify-center min-[391px]:pt-16 min-[391px]:pb-8 min-[391px]:pl-10 min-[391px]:gap-6">
      <div className="w-full flex justify-between items-center">
        <div className=" text-[#313133] font-Roboto text-base font-medium min-[391px]:text-2xl min-[391px]:font-bold min-[391px]:tracking-[0.18px]">
          Popular items
        </div>
        <button className="hidden min-[391px]:block">
          <img src={rightArrow} alt="right-arrow" className="w-[42px] h-[42px]"/>
        </button>
      </div>
      {/* Mobile Layout */}
      <div className="min-[391px]:hidden w-full overflow-hidden min-[391px]:overflow-x-auto">
        <div className="flex gap-2 pl-3 items-start min-[391px]:items-center min-[391px]:gap-6">
          {exploreItems}
        </div>
      </div>
      {/* Desktop Layout */}
      <div className="hidden min-[391px]:block w-full overflow-hidden min-[391px]:overflow-x-auto">
        <div className="flex gap-2 pl-3 items-start min-[391px]:items-center min-[391px]:gap-6">
          {desktopExploreItems}
        </div>
      </div>

      <button id="next-slide" className="min-[391px]:hidden absolute text-[#7A7A7A] bg-white top-[195px] right-[7%] w-[42px] h-[42px] rounded-full" onClick={nextSlide}>
          <img src={arrow} alt="right-arrow" className="ml-[3px] w-6 h-7 "/>
      </button>      
    </section>
  );
};

export default PopularItems;
