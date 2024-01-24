import React from 'react'

const PaymentMethod = ({method}) => {
  return (
    <div className='w-[708px] h-[204px] border-solid border-[#79767D] border-[1px] rounded-[6px] pl-[21px] pt-[22px]'>
        <div className='flex gap-[233px]'>
              <div className='w-[301px] h-[82px] bg-[#D9D9D9] '></div>
              <div className='flex justify-center items-center'>
                  <button className='py-[10px] px-[22px] bg-[#EEC643] border-none cursor-pointer rounded-[6px] font-Roboto box-border text-[#79767D] font-normal '>SET UP</button>
              </div>    
        </div>
        <h4 className='mt-[19px] font-Roboto text-base font-normal text-[#000000]'>Want to get paid through {method}? Set up a new or existing accoun</h4>
    </div>
  )
}

export default PaymentMethod