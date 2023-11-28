import React from 'react'

const InfoSection = ({title,children}) => {
  return (
    <div className="flex flex-col items-start gap-6">
        <div className="text-[#09618E] text-xl font-bold leading-[120%] font-[Roboto]">{title}</div>
        <div className="flex flex-col items-start gap-2">
            {children}
        </div>
    </div>
  )
}

export default InfoSection