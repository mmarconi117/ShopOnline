import React from 'react'
import svg from "../../Assets/logo.svg"
import search from "../../Assets/search.svg"
import notification from "../../Assets/notification.svg"
import user from "../../Assets/user.svg"
import downArrow from "../../Assets/downArrow.svg"

const TopBar = () => {
  return (
    <div className='w-full flex h-[102px]'>
      <img className='w-[277px] h-[70px] mt-[28px] ml-[18px] mr-[47px] mb-[4px]' src={svg}></img>

      <div className='flex gap-[284px]'>
        <div className='w-[373px] h-[46px] border-[1px] border-solid border-[#EEC643] rounded-[5px] mt-[41px] mr-0 mb-[15px] ml-0 flex items-center py-[11px] px-[16px] box-border bg-[#FAFAFA]'>
          <img className='w-[24PX] h-[24px] mr-[20px] cursor-pointer' src={search} />
          <input className='w-[100%] h-[19px] border-none outline-none bg-[#FAFAFA] text-[16px] font-body placeholder-style ' placeholder='Search here...' />
        </div>

        <div className='flex justify-end items-center w-[473px] h-[42px] box-border mt-[44px] mb-[16px] gap-[63px] mr-[40px]'>
          <div className='flex gap-[52px] w-[290px] h-[42px] justify-end items-center'>
            <h4 className=' cursor-pointer font-body'>Settings</h4>
            <h4 className='text-[#605d64] text-[16px] font-medium font-body cursor-pointer'>Help</h4>
            <div className='relative bg-[#EEC643] w-[42px] h-[42px] border-[0.5px] border-solid border-[#e7e7e7] rounded-[50%] flex justify-center items-center cursor-pointer'>
              <img className='notification__icon' src={notification} />
              <div className='absolute top-[9px] right-[9px]'>
                <div className='relative bg-[#b3261e] w-[11px] h-[11px] rounded-[50%] flex items-center '>
                  <h4 className='text-[13px] w-[8px] h-[16px] absolute text-white top-[-3.5px] left-[1px] font-normal font-body '>4</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center w-[120px] h-[24px]'>
            <img className="w-[18px] h-[19px] cursor-pointer" src={user} />
            <h4 className='mr-[9.33px] ml-[9px] cursor-pointer font-body '>John Doe</h4>
            <img className='w-[9.33px] h-[4.67px] mt-[5px] cursor-pointer' src={downArrow} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default TopBar