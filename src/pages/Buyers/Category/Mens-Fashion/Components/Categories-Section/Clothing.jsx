import arrow from "../../../../../../assets/ICONS/RightPointer.svg"
import { useState } from "react";
import img1 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-1.jpeg";
import img2 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-2.jpeg";
import img3 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-3.jpeg";
import img4 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-4.jpeg";
import img5 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-5.jpeg";
import img6 from "../../../../../../assets/IMAGES/Men's-category/Clothing/Rectangle-6.jpeg";

const Clothing = () => {
    const imgList = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img1,
            cost: 120
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img2,
            cost: 120
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img3,
            cost: 120
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img4,
            cost: 120
        },
        {
            id: 5,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img5,
            cost: 120
        },
        {
            id: 6,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img6,
            cost: 120
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 2;

    const totalSlides = Math.ceil(imgList.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const exploreItems = Array.from({ length: itemsPerSlide }, (_, i) => {
        const index = currentSlide * itemsPerSlide + i;
        return (
            <li key={imgList[index % imgList.length].id} className="min-[391px]:hidden flex flex-col items-start bg-white min-w-[175px] min-h-[373px] sm:min-w-[219px] sm:h-auto p-2 pb-3 sm:p-[10px] sm:pb-[16px] rounded-[5px] border border-solid border-[#AEA9B1] gap-4 sm:gap-6">
                <img src={imgList[index % imgList.length].img} className="max-h-[200px] w-full object-cover rounded-[5px]"/>
                <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 font-Roboto">
                    <p className="text-sm max-sm:tracking-[0.25px]">{imgList[index % imgList.length].description}</p>
                    <p className="text-sm max-sm:tracking-[0.25px]">from <span className="text-[#09618E] text-xl font-bold leading-6 tracking-[0.15px]">${imgList[index % imgList.length].cost}</span></p>
                </div>
            </li>
        );
    });
    return (
        <div className={`relative w-full h-auto flex flex-col items-start gap-4 pt-8 px-1 sm:pt-16 sm:pb-1 sm:pl-6`} >
            <h1 className=" text-[#313133] font-Roboto font-medium text-base sm:text-[31px] sm:font-bold sm:leading-[37.2px]">Clothing</h1>
            <ul className="flex w-full items-start gap-2 sm:gap-4 min-[390px]:overflow-x-auto overflow-hidden">
                {exploreItems}
                {imgList.map((image) =>(
                    <li key={image.id} className="max-[390px]:hidden flex flex-col items-start bg-white min-w-[175px] min-h-[373px] sm:min-w-[219px] sm:h-auto p-2 pb-3 sm:p-[10px] sm:pb-[16px] rounded-[5px] border border-solid border-[#AEA9B1] gap-4 sm:gap-6">
                        <img src={image.img} className="h-[300px] max-w-[260px] w-full object-cover rounded-[5px]"/>
                        <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 font-Roboto">
                            <p className="text-sm max-sm:tracking-[0.25px]">{image.description}</p>
                            <p className="text-sm max-sm:tracking-[0.25px]">from <span className="text-[#09618E] text-xl font-bold leading-6 tracking-[0.15px]">${image.cost}</span></p>
                        </div>
                    </li>
                ))}
            </ul>
            <button id="next-slide" className="min-[391px]:hidden absolute text-[#7A7A7A] bg-white top-[195px] right-[7%] w-[42px] h-[42px] rounded-full" onClick={nextSlide}>
                    <img src={arrow} alt="right-arrow" className="ml-[3px] w-6 h-7 "/>
            </button>
        </div>
    );
};

export default Clothing;
