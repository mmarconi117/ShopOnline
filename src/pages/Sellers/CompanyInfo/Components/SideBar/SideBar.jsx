import React from 'react'
import userProfile from "../../Assets/userProfile.svg"
import doubleArrow from "../../Assets/doubleArrow.svg"
import signOut from "../../Assets/signOut.svg"


const SideBar = () => {
  return (
    <div className='w-[283px]'>
      <div className='pt-[16px] mb-[43px] flex gap-[39.66px] w-full justify-center items-center '>
        <div className='flex gap-[20px] w-full p-0 ml-[28px] items-center'>
          <img className='w-[40px] h-[40px]' src={userProfile} />
          <div className='w-[115px]'>
            <h4 className='text-[20px] w-full leading-[24px] font-medium font-Roboto'>Hello, Name</h4>
            <h4 className='text-[12px] w-full font-normal text-[#1d1b20] font-body'>ID: XXXXXXXXX</h4>
          </div>
        </div>
        <img className='w-[16px] h-[16px] mr-[22.7px] cursor-pointer' src={doubleArrow} />
      </div>

      <div className='flex flex-col gap-[16px] '>
        <div>
          <h4 className='text-[15px] font-semibold w-full h-[38px] pt-[10px] pr-[10px] pb-[10px] pl-[49px] box-border font-body'>Analytics</h4>
          <div>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Overview</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Payments</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Activity Feed</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Ratings & Reviews</h4>
          </div>
        </div>

        <div>
          <h4 className='text-[15px] font-semibold w-full h-[38px] pt-[10px] pr-[10px] pb-[10px] pl-[49px] box-border font-body'>Products Catalogue</h4>
          <div>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>List of Products</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Upload a Product</h4>
          </div>
        </div>

        <div>
          <h4 className='text-[15px] font-semibold w-full h-[38px] pt-[10px] pr-[10px] pb-[10px] pl-[49px] box-border font-body'>Order Management</h4>
          <div>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Order List</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Returns & Refunds</h4>
            <h4 className='text-[13px] leading-[16px] font-normal text-[#48464c] w-full h-[30px] box-border pl-[69px] pt-[7px] pb-[7px] font-body cursor-pointer '>Disputes</h4>
          </div>
        </div>
      </div>

      <div className='flex gap-[14px] items-center ml-[40px] mt-[246px] cursor-pointer'>
        <h4 className='text-[14px] font-semibold text-[#0f1111] font-body cursor-pointer '>Sign Out</h4>
        <img className='w-[17px] h-[16px] cursor-pointer' src={signOut} />
      </div>
    </div>
  )
}

export default SideBar