import React from 'react'
import Signout from '../../../assets/ICONS/Signout.svg'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (

        <div className="flex flex-col items-center w-[19%] max-md:w-full max-md:ml-0">
            <div className="bg-white flex w-full grow flex-col mx-auto pl-10 pr-20 py-10 max-md:px-5">

                <div className="self-stretch flex flex-col mt-2 pl-9 items-end max-md:mt-10 max-md:pl-5">
                    <div className="text-zinc-500 text-center text-base leading-6 whitespace-nowrap">
                        USERNAME
                    </div>
                    <div className="text-zinc-500 text-center text-xs leading-4 self-stretch whitespace-nowrap mt-2.5">
                        XXXXXXXX
                    </div>
                </div>
                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch whitespace-nowrap mt-8 max-md:mr-1 max-md:mt-8">
                    Analytics
                </div>
                <Link to='Overview'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Overview
                    </div>
                </Link>
                <Link to='Payments'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Payments
                    </div>
                </Link>
                <Link to='ActivityFeed'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Activity Feed
                    </div>
                </Link>
                <Link to='RatingsAndReviews'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Ratings & Reviews
                    </div>
                </Link>

                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch whitespace-nowrap mt-8 max-md:mr-1 max-md:mt-8">
                    Product Catalogue
                </div>
                <Link to='ListOfProducts'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        List of products
                    </div>
                </Link>

                <Link to='UploadProduct'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Upload a Product
                    </div>
                </Link>
                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch whitespace-nowrap mt-8 max-md:mr-1 max-md:mt-8">
                    Order Management
                </div>
                <Link to='OrderList'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Order List
                    </div>
                </Link>
                <Link to='ReturnsAndRefunds'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Returns & Refunds
                    </div>
                </Link>
                <Link to='Disputes'>
                    <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3 self-start max-md:ml-2.5">
                        Disputes
                    </div>
                </Link>


                <div className="self-stretch flex justify-between gap-0 mt-32 mb-0 pr-0 items-start max-md:mt-10 max-md:pr-5">
                    <Link to='Signout'>
                        <div className="text-zinc-600 text-sm font-semibold leading-6 grow whitespace-nowrap flex ">
                            Sign out
                            <img
                                loading="lazy"
                                src={Signout}
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full ml-3"
                            />
                        </div>

                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Sidebar