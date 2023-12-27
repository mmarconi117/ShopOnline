import React, {useId, forwardRef} from 'react'

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectInput = forwardRef (function SelectInput({
    options = [],
    label,
    clasName = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full items-stretch flex grow basis-[0%] flex-col mt-6'>
        {label && <label htmlFor={id} className='text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap'>{label}</label>}
        <select 
            {...props} 
            ref={ref} 
            className={`justify-between items-center w-full h-12 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-[14px] font-semibold leading-4 whitespace-nowrap my-auto ${clasName}`}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
})

export default SelectInput;