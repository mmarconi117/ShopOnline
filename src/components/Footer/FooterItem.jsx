import React from 'react'

const FooterItem = ({title,link}) => {
  return (
    <a href={link} className="text-[#1D1B20] text-base font-normal leading-[120%] font-[Roboto] flex flex-1 w-full">{title}</a>
  )
}

export default FooterItem