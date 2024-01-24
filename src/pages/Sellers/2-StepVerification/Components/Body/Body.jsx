import React from 'react'
import rightArrow from "../../Assets/rightArrow.svg"
import twostepverification from "../../Assets/twostepverification.svg"



const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0] pb-[83px]'>
      <div className='flex'>
        <h4 className='text-[20px] font-Roboto text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 mr-[28.5px] ml-[28.5px] text-[#938f96] h-31px pt-1 box-border '>Admininistrator Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px]  cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[28.5px] text-[#0F1111] w-[297px] h-31px pt-1 box-border '>2-Step Verfication</h4>
      </div>
      <h2 className='text-[25px] font-semibold mt-[22px] mb-[33px] leading-[30px] text-[black] ml-[27px] font-Roboto'>2-Step Verfication</h2>
      <div className='w-[1187px] h-[135px] mb-[43px] bg-white ml-[27px] pl-[22px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] '>
        <div className='flex gap-[824px]'>
          <h2 className='mt-[13px] text-[25px] text-[#000000] font-Roboto font-bold mb-[12px]'>2-Step Verfication</h2>
          <img className='mt-[33px] cursor-pointer' src={twostepverification}/>
        </div>

        <h4 className='font-normal text-base mb-[24px] '>Protect your business with an additional layer of security.</h4>


      </div>

    </div>
  )
}

export default Body