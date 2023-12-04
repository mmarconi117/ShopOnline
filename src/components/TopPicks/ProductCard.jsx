import React from 'react'

export const ProductCard = ({img,description,price}) => {
  return (
        <div className="flex w-[219px] px-[10px] pt-[10px] pb-4 flex-col items-start gap-6">
            <img src={img}></img>
            <div className="font-[Roboto] text-sm font-normal leading-[20px] text-black">{description}</div>
            <div className="font-[Arial] text-sm font-normal tracking-[0.25px]">from $<span className="text-xl tracking-[0.15px] leading-[24px] font-bold text-[#09618E]">{price}</span></div>
        </div>
  )
}

