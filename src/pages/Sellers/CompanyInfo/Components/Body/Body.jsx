import React from 'react'
import rightArrow from "../../Assets/rightArrow.svg"


const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0] pb-[83px]'>
      <div className='flex'>
        <h4 className='text-[20px] font-Roboto text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[35.5px] text-[#938f96] w-[131px] h-31px pt-1 box-border '>Partner Profile</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[35.5px] text-[#0F1111] w-[297px] h-31px pt-1 box-border '>Company Info</h4>
      </div>
      <h2 className='text-[25px] font-semibold mt-[22px] mb-[33px] leading-[30px] text-[black] ml-[27px] font-Roboto'>Company Info</h2>
      <div className='w-[1159px] h-[610px] bg-white ml-[27px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] '>
        <h2 className='mt-[13px] ml-[21px] text-[20px] text-[#000000] font-Roboto '>Visit our help center for assistance: <span className='border-b-2 border-black border-solid cursor-pointer'>Help to setup company profile</span></h2>
        <div className='relative w-[669px] h-[60px] border-2 border-solid border-[#CAC5CD] mt-[46px] ml-[20px] rounded-[6px] '>
          <h4 className='absolute top-[-8px] bg-white left-[22px] font-normal text-[#79767D] text-[11px] font-Roboto px-[10px]'>Display Name*</h4>
          <input className='w-[97%] mx-[10px] h-[91%] my-[3px] border-none outline-none pl-[21.53px]' />
        </div>
        <h4 className='text-[11px] text-[#79767D] h-[25px] ml-[21px] font-Roboto leading-[18px] font-normal'>The name of your company will be displayed here</h4>
        <div className='relative w-[669px] h-[60px] border-2 border-solid border-[#CAC5CD] mt-[33px] ml-[20px] rounded-[6px] '>
          <h4 className='absolute top-[-8px] bg-white left-[22px] font-normal text-[#79767D] text-[11px] font-Roboto px-[10px]'>Logo</h4>
          <label htmlFor="custom-file-input" className="border-b-[1.5px] border-solid border-black text-black text-[16px] leading-[19.2px] absolute top-[19px] right-[27px] font-Roboto font-normal cursor-pointer">Select Image</label>
          <input type="file" id="custom-file-input" className="hidden" />
        </div>
        <div className='relative w-[669px] h-[153.53px] border-2 border-solid border-[#CAC5CD] mt-[58.47px] ml-[20px] rounded-[6px] '>
          <h4 className='absolute top-[-8px] bg-white left-[22px] font-normal text-[#79767D] text-[11px] font-Roboto px-[10px]'>Company Description</h4>
          <textarea placeholder='Company Description' className='w-[97%] mx-[10px] h-[91%] my-[3px] border-none outline-none placeholder:text-[13px] placeholder:font-Roboto placeholder:font-normal p-[13.53px] pl-[21.53px] resize-none'></textarea>
        </div>
        <h4 className='text-[11px] text-[#79767D] ml-[21px] font-Roboto leading-[18px] font-normal h-[25px]'>Please provide a short description of your company <span className='ml-[377px]'>0/8000</span></h4>

        <button className='bg-[#EEC643] py-[10px] px-[22px] rounded-[6px] ml-[19px] mt-[25px] cursor-pointer'>SAVE</button>

      </div>

    </div>
  )
}

export default Body