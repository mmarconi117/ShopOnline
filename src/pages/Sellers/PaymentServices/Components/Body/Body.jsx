import React from 'react'
import rightArrow from "../../Assets/rightArrow.svg"
import PaymentMethod from './BodyComponent/PaymentMethod'


const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0] pb-[83px]'>
      <div className='flex'>
        <h4 className='text-[20px] font-Roboto text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[35.5px] text-[#938f96] w-[162px] h-31px pt-1 box-border '>Financial Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[35.5px] text-[#0F1111] w-[297px] h-31px pt-1 box-border '>Payment Services</h4>
      </div>
      <h2 className='text-[25px] font-semibold mt-[22px] mb-[33px] leading-[30px] text-[black] ml-[27px] font-Roboto'>Payment Services</h2>
      <div className='w-[1159px] h-[546px] mb-[43px] bg-white ml-[27px] pl-[22px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] '>
        <h2 className='mt-[13px] text-[20px] text-[#000000] font-Roboto font-normal '>Set up a payment method</h2>
        <h4 className='font-normal text-[11px] mb-[24px] '>Get paid the way you want through one of our partners</h4>
        <div className='flex flex-col gap-[25px]'>
          <PaymentMethod method={"Paypal"} />
          <PaymentMethod method={"Payoneer"} />
        </div>

      </div>

    </div>
  )
}

export default Body