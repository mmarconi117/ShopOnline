import React from 'react'

const LearnAboutSofs = ({ header, details, action }) => {
    return (
        <div className='flex w-[539px] h-[218px] bg-white justify-center items-center gap-[31px] border-t-[4px] border-solid border-t-[#EEC643] rounded-t-[4px] box-border'>
            <div className='w-[176px] h-[156px] bg-[#d9d9d9] cursor-pointer'></div>
            <div className='h-[100%]'>
                <h4 className='text-[25px] font-bold leading-[30px] w-[303px] mt-[27px] font-Roboto '>{header}</h4>
                <h4 className='flex flex-wrap w-[277px] text-[20px] mt-[21px] font-normal leading-[24px] font-Roboto '>{details}</h4>
                <h4 className='text-[20px] mt-[21px] font-normal leading-[24px] font-Roboto underline cursor-pointer'>{action}</h4>
            </div>
        </div>
    )
}

export default LearnAboutSofs