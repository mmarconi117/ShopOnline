import React from 'react'
import rightArrow from "../../../../assets/ICONS/sellersicons/rightArrow.svg"
import email from "../../../../assets/ICONS/sellersicons/email.svg"
import sms from "../../../../assets/ICONS/sellersicons/sms.svg"
import add from "../../../../assets/ICONS/sellersicons/add.svg"
import mark from "../../../../assets/ICONS/sellersicons/mark.svg"


const Body = () => {
  return (
    <div className='bg-[rgb(240,240,240)] flex flex-col items-stretch py-5 px-7 gap-5'>
      <div className='bg-[#F0F0F0] flex flex-col justify-between items-stretch gap-6 sm:gap-3'>
        <div className='flex justify-start items-center gap-5'>
          <h4 className='text-base sm:text-xl text-[#938f96] font-medium'>Settings</h4>
          <img className='w-[6px] h-[10px] cursor-pointer' src={rightArrow} />
          <h4 className='text-base sm:text-xl font-medium text-[#0F1111]'>Users</h4>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <h2 className='text-xl sm:text-2xl font-semibold text-[black]'>Manage Users</h2>
          <div className='flex gap-4 sm:gap-[26px]'>
            <button className='px-[30px] py-[14px] border border-[#EEC643] rounded-[5px] text-[12px]'>Cancel</button>
            <button className='px-[30px] py-[14px] border-none bg-[#EEC643] rounded-[5px] text-[12px] font-semibold'>Save</button>
          </div>
        </div>
        <div className='pb-[26px] bg-white border-t-4 border-solid border-[#EEC643] rounded'>
          <h4 className='flex justify-center mt-[26px] text-[20px] pb-[26px] border-b-[1px] border-[#CAC5CD] font-normal mb-[26px]'>Contact Infomation</h4>
          <div className='flex flex-col xl:flex-row items-stretch xl:justify-between px-5 sm:px-10 xl:px-5 gap-2 2xl:gap-6'>

            <div className='flex flex-col gap-2'>
              <div className='flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px]'>
                <img src={email} />
                <input className='xl:w-[359px] border-none outline-none ' placeholder='Email' />
              </div>
              <div className='flex gap-2.5 justify-start items-center'>
                <img className='cursor-pointer' src={add} />
                <h4 className='text-[10px]'>Add Another</h4>
              </div>
            </div>
            <div className='flex flex-col gap-2 min-w-max'>
              <div className='flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px]'>
                <img src={sms} />
                <input className='w-[173px] border-none outline-none ' placeholder='SMS' />
              </div>
              <div className='flex gap-2.5 justify-start items-center '>
                <img className='cursor-pointer' src={add} />
                <h4 className='text-[10px]'>Add Another</h4>
              </div>

            </div>

            <div className='flex flex-col gap-2'>
              <div className='relative flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px]'>
                <h4 className='absolute flex justify-center top-[-8px] bg-white left-[22.04px] font-normal text-[#79767D] text-[10px] font-body px-[5px]'>Frequency</h4>
                <select className='pr-[160px] outline-none'>
                  <option>Instant</option>
                </select>
                <input type="file" id="custom-file-input" className="hidden" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='pb-[26px] bg-white rounded'>
        <h4 className='flex justify-center text-[20px] py-[26px] border-b-[1px] border-[#CAC5CD] font-normal mb-[26px]'>Notification List</h4>
        <div className='px-8 flex flex-col gap-[26px]'>
          <div c className='flex flex-col gap-2 'lassName='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Merchant Order Notifications</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification each time buyers purchases your product</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Return Reminders Notifications</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>The return Notifications contains information about initiated Item</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Claims Notifications</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Notifications about charges being disputed by buyers</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Listing Created</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification when you created listing.</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Listing Closed</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification whenever one of your listing closes. This might happened Because of lack of inventory, expiration or something else.</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Canceled Order Report</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification when buyer canceled order.</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Completed Order Report</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification about all the items which is sold and paid.</h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Damage Product Report</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification about all the items which is sold damage. </h4>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Business Updates</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Receive notification about all new business changes (like New features , promotions opportunities )and policy updates</h4>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-[6px] items-start sm:items-center'>
              <img src={mark} />
              <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Technical Notifications</h4>
            </div>
            <h4 className='text-xs sm:text-sm xl:text-base'>Schedule changes or outages that may have impact on your seller account or your business. </h4>
          </div>

        </div>
      </div>
        
      <div className='pb-6 bg-white border-t-4 border-solid border-[#EEC643] rounded'>
        <h4 className='flex justify-center items-center text-[20px] py-6 mb-6 border-b-[1px] border-[#CAC5CD] font-normal'>Others Notification</h4>
        <div className='px-8'>
          <h4 className='text-base sm:text-lg xl:text-[20px] font-medium xl:font-semibold'>Emergency Contact</h4>
          <h4 className='text-xs sm:text-sm xl:text-base'>Seller support may contact you in emergencys</h4>
        </div>

        <div className='px-8 flex flex-col lg:flex-row justify-between lg:justify-start gap-10 pt-[26px]'>
          <div className='flex gap-[6px] items-center '>
            <img src={mark} />
            <h4 className='text-xs sm:text-sm xl:text-base whitespace-nowrap '>Return Reminders Notifications</h4>
          </div>

          <div className='flex gap-3'>
            <div className='border-solid border-[1px] px-2.5 py-[4px] border-[#AEA9B1] rounded-[4px]'>
              <input className='lg:min-w-[274px] h-[16px] border-none outline-none' placeholder='Number'/>
            </div>
            <div className='flex gap-2.5 justify-center items-center'>
              <img className='cursor-pointer' src={add} />
              <h4 className='hidden sm:block text-[10px] whitespace-nowrap'>Add Another</h4>
            </div>
          </div>
        </div>
      </div>

      
    </div>

  )
}

export default Body