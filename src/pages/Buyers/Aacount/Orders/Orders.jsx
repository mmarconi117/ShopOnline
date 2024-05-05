import React from 'react'
import { Link } from 'react-router-dom'
import arrowDown from "../../../../assets/ICONS/ArrowDown.svg"
import RightArrow from "../../../../assets/ICONS/RightArrow.svg"



const Orders = () => {
    const orderDetails = [
        {
            productimage: '',
            productname: 'FAMARINE Floral Gold Earrings for Women',
            delivered: '1st April 2024'

        },
        {
            productimage: '',
            productname: 'Mens Walkabout Sports Shoes -bl02- Gray',
            delivered: '12th April 2024'

        },
        {
            productimage: '',
            productname: 'Mi color 2 In 1 Fit Me Primer + Setting Spray Fixer',
            delivered: '1st April 2024'

        }
    ]
    return (
        <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
            <div className="flex flex-col px-6 py-8 bg-white rounded-md max-md:px-5">
                <div className="flex gap-5 justify-between items-center pr-7 w-full text-base leading-5 text-zinc-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="self-stretch my-auto">Last 30 days</div>
                    <div className="self-stretch text-2xl font-semibold leading-10 text-center text-stone-950">
                        Orders
                    </div>
                    <div className="flex gap-px self-stretch my-auto">
                        <div className="grow my-auto">Filter orders </div>
                        <img
                            loading="lazy"
                            src={arrowDown}
                            className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                </div>
                {orderDetails && orderDetails.map((item, index)=>(
                    <div className="flex gap-5 p-2.5 mt-12 rounded-md border border-solid border-neutral-400 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
                    <div className="flex justify-center items-center px-3 py-14">
                        <input type="checkbox" name="" id="" />
                    </div>
                    <img
                        loading="lazy"
                        src="..."
                        alt='product image'
                        className="shrink-0 max-w-full aspect-[1.43] w-[217px]"
                    />
                    <div className="flex gap-2 my-auto leading-[120%] text-zinc-800 max-md:flex-wrap">
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-xl font-medium leading-8 max-md:max-w-full">
                                {item.productname}
                            </div>
                            <div className="mt-2 text-base max-md:max-w-full">
                                Delivered on {item.delivered}
                            </div>
                            <Link to="/order-details" className="mt-2 text-sm text-sky-800 underline max-md:max-w-full">
                                View Order Details
                            </Link>
                        </div>
                        <img
                            loading="lazy"
                            src={RightArrow}
                            className="shrink-0 my-auto w-10 aspect-square"
                        />
                    </div>
                </div>
                ))}
                
            </div>
            <div className="flex gap-5 justify-between text-base leading-5 text-center max-w-[875px] text-zinc-700 max-md:flex-wrap">
                <button className="justify-center px-8 py-3.5 whitespace-nowrap bg-amber-300 rounded-md max-md:px-5">
                    Track
                </button>
                <button className="justify-center px-6 py-3.5 rounded-md border border-solid bg-zinc-100 border-stone-300 max-md:px-5">
                    Cancel Order
                </button>
                <button className="justify-center px-3 py-3.5 whitespace-nowrap rounded-md border border-solid bg-zinc-100 border-stone-300">
                    Return/Replace
                </button>
                <button className="justify-center px-8 py-3.5 rounded-md border border-solid bg-zinc-100 border-stone-300 max-md:px-5">
                    Buy again
                </button>
                <button className="justify-center px-8 py-3.5 rounded-md border border-solid bg-zinc-100 border-stone-300 max-md:px-5">
                    Fix issue
                </button>
            </div>
        </div>
    )
}

export default Orders;