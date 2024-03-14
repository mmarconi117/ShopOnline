import React from 'react'
import Signout from '../../../assets/ICONS/Signout.svg'
import profile from '../../../assets/ICONS/Group.svg'
import pointers from '../../../assets/ICONS/twoPointers.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Sidebar(props) {
    const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
    const usersData = useSelector((state) => state.loginFormReducer.usersData);


    return (
        // Come back and fix the width of the outermost container
        <div className={`max-md:fixed top-0 ${props.showBarIsTrue ? "max-md:z-10 left-0 max-md:mt-[72px] h-full" : "left-[-280px]"} flex flex-col grow-0 justify-start items-start min-w-max bg-white`}>
            <div className=" flex flex-col w-full items-center justify-start grow mt-4">
                <div className='flex justify-start gap-4 items-center pl-3 pr-1.5 lg:pl-8 lg:pr-4'>
                    <div className=''>
                        <img src={profile} alt="profile icon" className='object-contain w-12 h-12'/>
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                        <div className="text-zinc-500 text-center text-base leading-6 whitespace-nowrap">
                            Hello, { isAuthenticated && usersData && usersData.name ? (usersData.name) : null}

                        </div>
                        <div className="text-zinc-500 text-center text-xs leading-4 whitespace-nowrap">
                            ID: XXXXXXXX
                        </div>
                    </div>
                    <div>
                        <img src={pointers} alt="pointers" className='object-contain w-6 h-6 ml-8'/>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className="text-neutral-800 text-base font-bold leading-6 whitespace-nowrap mt-8">
                        Analytics
                    </div>
                    <Link to='Overview'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Overview
                        </div>
                    </Link>
                    <Link to='Payments'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Payments
                        </div>
                    </Link>
                    <Link to='ActivityFeed'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Activity Feed
                        </div>
                    </Link>
                    <Link to='RatingsAndReviews'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Ratings & Reviews
                        </div>
                    </Link>   
                </div>
                <div className='flex flex-col items-start'>
                    <div className="text-neutral-800 text-base font-bold leading-6 whitespace-nowrap mt-8">
                        Product Catalogue
                    </div>
                    <Link to='ListOfProducts'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            List of products
                        </div>
                    </Link>

                    <Link to='UploadProduct'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Upload a Product
                        </div>
                    </Link>   
                </div>
                <div className='flex flex-col items-start'>
                    <div className="text-neutral-800 text-base font-bold leading-6 whitespace-nowrap mt-8">
                        Order Management
                    </div>
                    <Link to='OrderList'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Order List
                        </div>
                    </Link>
                    <Link to='ReturnsAndRefunds'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Returns & Refunds
                        </div>
                    </Link>
                    <Link to='Disputes'>
                        <div className="text-zinc-600 text-sm leading-4 whitespace-nowrap ml-6 mt-3">
                            Disputes
                        </div>
                    </Link>
                </div>

                <div className="flex self-stretch mt-[248px] pl-11 lg:pl-16 mb-9">
                    <Link to='Signout'>
                        <div className="text-[#0F1111] text-sm font-semibold leading-6 grow whitespace-nowrap flex ">
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