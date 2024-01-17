import React from 'react'
import UserIcon from '../../../assets/ICONS/user/user-1.svg'
import ArrowDown from '../../../assets/ICONS/ArrowDown.svg'

function Header() {
  return (
    <div className="justify-center bg-white flex flex-col pl-0 pr-10 py-12 items-end max-md:max-w-full max-md:pl-5">
      <div className="items-stretch flex w-[470px] max-w-full justify-between gap-0 mb-1 max-md:flex-wrap">
        <div className="items-stretch flex justify-between gap-10 max-md:justify-center">
          <div className="text-zinc-600 text-base leading-6 whitespace-nowrap">
            Settings
          </div>
          <div className="text-zinc-600 text-base leading-6">Help</div>
          <div className="text-zinc-600 text-base leading-6 whitespace-nowrap">
            Notifications
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-1.5 max-md:justify-center">
          <img
            loading="lazy"
            src={UserIcon}
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
            John Doe
          </div>
          <img
            loading="lazy"
            src={ArrowDown}
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
