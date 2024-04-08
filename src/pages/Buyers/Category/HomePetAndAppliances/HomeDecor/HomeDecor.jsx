import { useState } from "react";
import arrow from '../../../../../assets/ICONS/RightPointer.svg'

const imagesList=[
  {
    src:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0,
    id:1
  },
  {
    src:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0,
    id:2
  },
  {
    src:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0,
    id:3
  },
  {
    src:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0,
    id:4
  },
  {
    src:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0,
    id:5
  }

]



function HomeDecor() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 2

  const totalSlides = Math.ceil(imagesList.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  }

  const exploreItems = Array.from({ length: itemsPerSlide }, (_, i) => {
    const index = currentSlide * itemsPerSlide + i
    return (
      <li
        key={imagesList[index % imagesList.length].id}
        className="min-[391px]:hidden flex flex-col items-start bg-white min-w-[175px] min-h-[373px] sm:min-w-[219px] sm:h-auto p-2 pb-3 sm:p-[10px] sm:pb-[16px] rounded-[5px] border border-solid border-[#AEA9B1] gap-4 sm:gap-6"
      >
        <img
          src={imagesList[index % imagesList.length].src}
          className="w-full h-[214px] object-cover rounded-[5px]"
        />
        <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 font-Roboto">
          <p className="text-sm max-sm:tracking-[0.25px]">
            {imagesList[index % imagesList.length].description}
          </p>
          <p className="text-sm max-sm:tracking-[0.25px]">
            from{' '}
            <span className="text-[#09618E] text-xl font-bold leading-6 tracking-[0.15px]">
              ${imagesList[index % imagesList.length].price}
            </span>
          </p>
        </div>
      </li>
    )
  })

  return (
    <div className="relative w-full h-auto flex flex-col items-start gap-4 pt-8 px-1 sm:pl-6">
      <h1 className="text-[#313133] font-Roboto font-medium text-base sm:text-[31px] sm:font-bold sm:leading-[37.2px]">
        Home Decor
      </h1>
      <ul className="flex w-full items-start gap-2 sm:gap-4 min-[390px]:overflow-x-auto overflow-hidden">
        {exploreItems}
        {imagesList.map((image) => (
          <li
            key={image.id}
            className="max-[390px]:hidden flex flex-col items-start bg-white min-w-[175px] min-h-[373px] sm:min-w-[219px] sm:h-auto p-2 pb-3 sm:p-[10px] sm:pb-[16px] rounded-[5px] border border-solid border-[#AEA9B1] gap-4 sm:gap-6"
          >
            <img
              src={image.src}
              className="w-full h-[214px] object-cover rounded-[5px]"
            />
            <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 font-Roboto">
              <p className="text-sm max-sm:tracking-[0.25px]">
                {image.description}
              </p>
              <p className="text-sm max-sm:tracking-[0.25px]">
                from{' '}
                <span className="text-[#09618E] text-xl font-bold leading-6 tracking-[0.15px]">
                  ${image.price}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button
        id="next-slide"
        className="min-[391px]:hidden absolute text-[#7A7A7A] bg-white top-[195px] right-[7%] w-[42px] h-[42px] rounded-full"
        onClick={nextSlide}
      >
        <img src={arrow} alt="right-arrow" className="ml-[3px] w-6 h-7 " />
      </button>
    </div>
  )
}

export default HomeDecor
