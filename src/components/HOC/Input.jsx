import React, {forwardRef} from 'react'

const Input = forwardRef(function Input({
    lable,
    type='text',
    className= '',
    ...props
},ref){
    return(
        <div className='w-full items-stretch flex grow basis-[0%] flex-col mt-6'>
            {
                lable && 
                <label
                htmlFor={lable} 
                className='text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap'                
                >
                    {lable}
                </label>
            }
            <input
            type={type}
            className={`w-full h-12 justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 flex-col mt-2 border-solid max-md:max-w-full pl-5 ${className}`}
            ref={ref}
            {...props}
            
            />
        </div>
    )
})

export default Input