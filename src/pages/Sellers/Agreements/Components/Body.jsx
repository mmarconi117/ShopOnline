import React from 'react'
import rightArrow from "../../../../assets/ICONS/sellersicons/rightArrow.svg"



const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0] pb-[83px]'>
      <div className='flex'>
        <h4 className='text-[20px] font-Roboto text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 mr-[28.5px] ml-[28.5px] text-[#938f96] h-31px pt-1 box-border '>Admininistrator Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px]  cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-Roboto font-medium mt-5 ml-[28.5px] text-[#0F1111] w-[297px] h-31px pt-1 box-border '>Agreements</h4>
      </div>
      <h2 className='text-[25px] font-semibold mt-[22px] mb-[33px] leading-[30px] text-[black] ml-[27px] font-Roboto'>Agreements</h2>
      <div className='w-[1187px] bg-white ml-[27px] pl-[22px] border-t-4 border-solid border-[#EEC643] rounded-t-[4px] rounded-b-[4px] pb-[35px] '>
        <h2 className='mt-[23px] text-[25px] text-[#000000] font-Roboto font-bold mb-[33px]'>SONNY Seller Agreements</h2>
        <table> 
          <tr className='text-[22px]'>
            <th className='pb-[5px] font-semibold text-left'>Agreements</th>
            <th className='pl-[59px] font-semibold text-left'>Version</th>
            <th className='pl-[111px] font-semibold text-left'>Date of applicability</th>
            <th className='pl-[135px] font-semibold text-left pr-[117px]'>Actions</th>
          </tr>
          <tr className=' border-b-[1px] border-t-[1px] border-[#CAC5CD]'>
            <td className='pl-[8px]  w-[341px] py-[18px] text-[24px] font-Roboto'>COMPREHENSIVE SONNY MARKETPLACE PROGRAM</td>
            <td className='pl-[59px] text-left text-[24px] font-normal'>20400</td>
            <td className='pl-[111px] text-[24px] font-normal'>July 7, 2023</td>
            <td className=''><div className='ml-[135px]  text-[24px] font-normal w-[113px] underline cursor-pointer'>Download</div></td>
          </tr>

        </table>
      </div>
      
    </div>
  )
}

export default Body