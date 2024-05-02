import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const AacountLayout = () => {
  return (
    <div className="w-full flex flex-col gap-4 self-center px-4 pt-6 lg:flex-row lg:justify-center lg:items-start lg:gap-[25px] font-Roboto">
        <Sidebar />
        <Outlet />            
    </div>
  )
}

export default AacountLayout;