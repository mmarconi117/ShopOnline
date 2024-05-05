import React from 'react'
import RightArrow from "../../../assets/ICONS/RightArrow.svg"

import Ratings from '../../../assets/ICONS/Ratings.svg'
import { Link } from 'react-router-dom'

const WishList = () => {
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
                    <div className="font-bold text-sky-800">Wish List</div>
                </div>
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                    <input type="text" className="flex gap-2.5 py-2.5 pr-2.5 pl-5 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400" placeholder='Search item' />

                    <div className="justify-center p-2.5 text-2xl leading-8 text-center border border-solid border-zinc-300 text-zinc-700">
                        Filter & Sort
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-5 justify-between max-md:flex-wrap">
                    <div className="flex flex-col justify-center w-full px-2.5 pt-2.5 pb-4 bg-white rounded-md max-w-[252px]">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="w-full aspect-[1.04]"
                        />
                        <span className="flex flex-col mt-4 text-base font-medium leading-6 text-stone-950">
                            Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher
                            With 5-Liter Built-in Water Tank{" "}
                        </span>
                        <div className="flex gap-1.5 justify-between mt-2 text-sm leading-5 whitespace-nowrap">
                            <div className="font-semibold text-center text-sky-800">Remove</div>
                            <div className="flex gap-2 text-zinc-600">
                                <img
                                    loading="lazy"
                                    src={Ratings}
                                    className="shrink-0 max-w-full aspect-[5.26] w-[107px]"
                                />
                                <div>123</div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between px-px py-0.5 mt-2 w-full">
                            <div className="text-sm font-semibold leading-5 text-sky-800">$120</div>
                            <div className="flex gap-1.5 self-start text-xs leading-4 text-center text-red-400">

                                <div className="my-auto">232 items left</div>
                            </div>
                        </div>
                        <button className="justify-center self-center px-8 py-1.5 mt-8 text-base font-bold tracking-normal leading-6 text-center bg-amber-300 rounded-md text-zinc-700">
                            Add to Cart
                        </button>
                    </div>

            </div>
        </div>
    )
}

export default WishList