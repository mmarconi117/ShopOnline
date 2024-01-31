import React from 'react'


const AddYourDetails = ({ header, details }) => {
  return (
    <div className='w-[317px] h-[221px] bg-[#fff] box-border border-t-4 border-solid border-t-[#EEC643] rounded-t-[4px] pt-0 pl-[19px] pb-0 pr-[18px] relative'>
      <h4 className='text-[25px] font-bold leading-[30px] w-[120px] mt-[21px] font-Roboto text-black'>{header}</h4>
      <h4 className='flex flex-wrap w-[280px] h-[61px] text-[20px] mt-[21px] font-normal leading-[24px] font-Roboto '>{details}</h4>
      <div className='w-full flex justify-center'>
        <button className='w-[244px] h-[51px] bg-[#EEC643] border-none rounded-[40px] box-border text-[20px] font-bold leading-[24px] absolute bottom-[25px] font-Roboto cursor-pointer'>Add contact details</button>
      </div>

    </div>
  )
}

export default AddYourDetails