import React from 'react'
import RightArrow from "../../../assets/ICONS/RightArrow.svg"

import Ratings from '../../../assets/ICONS/Ratings.svg'
import { Link } from 'react-router-dom'

const RecentlyViewed = () => {
  return (
    <div className='w-full lg:w-[70%] flex flex-col lg:gap-14'>
            <div className="w-full flex gap-5 justify-between max-md:flex-wrap">
                <div className="flex flex-1 gap-5 p-2 text-xl leading-6">
                    <Link to='/account' className="text-neutral-400">My Account</Link>
                    <img
                        loading="lazy"
                        src={RightArrow}
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="font-bold text-sky-800">Recently Viewed</div>
                </div>
                
            </div>
            <div className="w-full flex gap-5 justify-between max-md:flex-wrap">
                    <div className="flex flex-col justify-center w-full px-2.5 pt-2.5 pb-4 bg-white rounded-md max-w-[252px]">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="w-full aspect-[1.04]"
                        />
                        <span className="flex flex-col mt-4 text-base leading-6 text-stone-950">
                        Lorem ipsum dolor sit amet,  dolor sit amet, consectetur
                        </span>
                        
                        <div className="flex gap-5 justify-start px-px py-0.5 mt-2 w-full">
                            <span>from</span>
                            <span className="text-sm font-semibold leading-5 text-sky-800">$120</span>
                            
                        </div>
                        
                    </div>

            </div>
        </div>
  )
}

export default RecentlyViewed