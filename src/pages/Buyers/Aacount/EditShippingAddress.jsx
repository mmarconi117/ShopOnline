import React from 'react'
import RightArrow from '../../../assets/ICONS/RightArrow.svg'
import check from '../../../assets/ICONS/check.svg'
import addIcon from '../../../assets/ICONS/sellersicons/add.svg'
import { Link } from 'react-router-dom'


const EditShippingAddress = () => {
    return (
        <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
            <div className="flex flex-col">
                <div className="flex gap-5 self-start px-5 text-xl leading-6 max-md:flex-wrap">
                    <div className="text-neutral-400">
                        <Link to="/account">My Account</Link>
                    </div>
                    <img
                        loading="lazy"
                        src={RightArrow}
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="font-bold text-sky-800">Edit shipping address</div>
                </div>
                <div className="flex flex-col items-start pt-11 pr-20 pb-20 pl-10 bg-gray-50 max-md:px-5">
                    <div className="text-2xl font-bold leading-8 text-zinc-800 max-md:max-w-full">
                        Saved addresses
                    </div>
                    <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 w-[948px]" />
                    <div className="self-center mt-7 w-full max-w-[948px] max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-base leading-5 max-md:mt-10">
                                    <div className="flex flex-col justify-end px-9 py-7 w-full rounded-md border border-solid bg-neutral-50 border-stone-300 max-md:px-5">
                                        <div className="font-bold tracking-normal text-black leading-[150%]">
                                            Home
                                        </div>
                                        <div className="mt-2 text-black max-md:mr-2.5">
                                            14853 Towne Junctions Suite 021 Port Erinland, Missouri, 74474-3984  Contact no. - (430) 268-7457
                                        </div>
                                        <div className="flex gap-5 justify-between px-px mt-5 w-full text-sm whitespace-nowrap">
                                            <button className="flex gap-1.5 justify-center px-3 py-0.5 rounded-xl border border-solid border-stone-300 text-zinc-500">
                                                <img
                                                    loading="lazy"
                                                    src={check}
                                                    className="shrink-0 w-4 aspect-square"
                                                />
                                                <div>Default</div>
                                            </button>
                                            <div className="flex gap-4 justify-center py-0.5 text-cyan-600">
                                                <button>Delete</button>
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-9 py-7 mt-12 rounded-md border border-solid border-stone-300 max-md:px-5 max-md:mt-10">
                                        <div className="font-bold tracking-normal text-black leading-[150%]">
                                            Work
                                        </div>
                                        <div className="mt-2 text-black">793 Enid Dam Gulgowskimouth, Illinois, 69076 Contact no. - 760-817-3722</div>
                                        
                                        <div className="flex gap-5 justify-between px-px mt-5 w-full text-sm">
                                            <div className="flex gap-1.5 justify-center px-1.5 py-1 rounded-xl text-zinc-500">
                                                <input type="checkbox" name="" id="" />
                                                <div>Set as default</div>
                                            </div>
                                            <div className="flex gap-4 justify-center py-0.5 text-cyan-600 whitespace-nowrap">
                                                <button>Delete</button>
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex justify-center items-center px-16 py-16 w-full text-base font-bold tracking-normal leading-6 text-black rounded-md border border-solid bg-neutral-50 border-stone-300 max-md:px-5 max-md:mt-10">
                                    <button className="flex flex-col max-w-full w-full">
                                        <img
                                            loading="lazy"
                                            src={addIcon}
                                            className="self-center aspect-square w-[30px]"
                                        />
                                        <div className="mt-2 self-center">Add new address</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditShippingAddress