import React from 'react'
import rightArrow from "../../../../assets/ICONS/sellersicons/rightArrow.svg"
import email from "../../../../assets/ICONS/sellersicons/email.svg"
import sms from "../../../../assets/ICONS/sellersicons/sms.svg"
import add from "../../../../assets/ICONS/sellersicons/add.svg"
import mark from "../../../../assets/ICONS/sellersicons/mark.svg"


const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0]'>
      <div className='bg-[#F0F0F0]'>
        <div className='flex'>
          <h4 className='text-[20px] font-body text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
          <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
          <h4 className='text-[20px] font-body font-medium mt-5 ml-[35.5px] text-[#0F1111] w-[297px] h-31px pt-1 box-border '>Users</h4>
        </div>
        <div className='flex justify-between items-center mt-[22px] mb-[52px] ml-[27px] mr-[40px]'>
          <h2 className='text-[25px] font-semibold  leading-[30px] text-[black]  font-body'>Manage Users</h2>
          <div className='flex gap-[26px]'>
            <button className='px-[30px] py-[14px] border border-[#EEC643] rounded-[5px] text-[12px]'>Cancel</button>
            <button className='px-[30px] py-[14px] border-none bg-[#EEC643] rounded-[5px] text-[12px] font-semibold'>Save</button>
          </div>
        </div>
        <div className='w-[1159px] pb-[26px] bg-white ml-[27px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] '>
          <h4 className='flex justify-center mt-[26px] text-[20px] pb-[26px] border-b-[1px] border-[#CAC5CD] font-normal mb-[26px]'>Contact Infomation</h4>
          <div className='flex gap-[72px]'>
            <div className='ml-[23.38px]'>
              <div className='flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px] w-[419.625px] '>
                <img src={email} />
                <input className='w-[359px] box-border border-none outline-none ' placeholder='Email' />
              </div>
              <div className='flex gap-2.5 mt-[9px] justify-center items-center w-[92px]'>
                <img className='cursor-pointer' src={add} />
                <h4 className='text-[10px]'>Add Another</h4>
              </div>
            </div>
            <div>
              <div className='flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px] w-[248px] '>
                <img src={sms} />
                <input className='w-[173px] box-border border-none outline-none ' placeholder='SMS' />
              </div>
              <div className='flex gap-2.5 mt-[9px] justify-center items-center w-[92px]'>
                <img className='cursor-pointer' src={add} />
                <h4 className='text-[10px]'>Add Another</h4>
              </div>

            </div>

            <div>
              <div className='relative flex gap-[25px] p-[10px] border border-[#CAC5CD] rounded-[6px] w-[248px]'>
                <h4 className='absolute w-[102px] flex justify-center top-[-8px] bg-white left-[22.04px] font-normal text-[#79767D] text-[10px] font-body px-[5px]'>Frequency</h4>
                <select className='pr-[160px] outline-none'>
                  <option>Instant</option>
                </select>
                <input type="file" id="custom-file-input" className="hidden" />
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='bg-[#F0F0F0] mt-[32px]'>
        <div className='w-[1159px] pb-[26px] bg-white ml-[27px]  rounded-t-[4px] rounded-b-[4px]  '>
          <h4 className='flex justify-center mt-[26px] text-[20px] py-[26px] border-b-[1px] border-[#CAC5CD] font-normal mb-[26px]'>Notification List</h4>
          <div className='px-[32px] flex flex-col gap-[26px]'>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Merchant Order Notifications</h4>
              </div>
              <h4 className='text-base'>Receive notification each time buyers purchases your product</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Return Reminders Notifications</h4>
              </div>
              <h4 className='text-base'>The return Notifications contains information about initiated Item</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Claims Notifications</h4>
              </div>
              <h4 className='text-base'>Notifications about charges being disputed by buyers</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Listing Created</h4>
              </div>
              <h4 className='text-base'>Receive notification when you created listing.</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Listing Closed</h4>
              </div>
              <h4 className='text-base'>Receive notification whenever one of your listing closes. This might happened Because of lack of inventory, expiration or something else.</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Canceled Order Report</h4>
              </div>
              <h4 className='text-base'>Receive notification when buyer canceled order.</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Completed Order Report</h4>
              </div>
              <h4 className='text-base'>Receive notification about all the items which is sold and paid.</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Damage Product Report</h4>
              </div>
              <h4 className='text-base'>Receive notification about all the items which is sold damage. </h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Business Updates</h4>
              </div>
              <h4 className='text-base'>Receive notification about all new business changes (like New features , promotions opportunities )and policy updates</h4>
            </div>
            <div>
              <div className='flex gap-[6px] items-center'>
                <img src={mark} />
                <h4 className='text-[20px] '>Technical Notifications</h4>
              </div>
              <h4 className='text-base'>Schedule changes or outages that may have impact on your seller account or your business. </h4>
            </div>

          </div>
        </div>
        
      </div>

      <div className='bg-[#F0F0F0] mt-[32px] pb-[24px]'>
        <div className='w-[1159px] pb-[26px] bg-white ml-[27px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] '>
          <h4 className='flex justify-center mt-[26px] text-[20px] pb-[26px] border-b-[1px] border-[#CAC5CD] font-normal mb-[26px]'>Others Notification</h4>
          <div className='px-[32px]'>
            <h4 className='text-[20px] '>Emergency Contact</h4>
            <h4 className='text-base'>Seller support may contact you in emergencys</h4>
          </div>

          <div className='flex gap-[80px] pt-[26px]'>
            <div className='flex gap-[6px] items-center px-[32px] '>
              <img src={mark} />
              <h4 className='text-[13px] '>Return Reminders Notifications</h4>
            </div>

            <div className='flex'>
              <div className='border-solid border-[1px] px-2.5 py-[4px] border-[#AEA9B1] rounded-[4px]'>
                <input className='w-[274px] h-[16px] border-none outline-none' placeholder='Number'/>
              </div>
              <div className='flex gap-2.5 justify-center items-center w-[92px]'>
                <img className='cursor-pointer' src={add} />
                <h4 className='text-[10px]'>Add Another</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>

  )
}

export default Body