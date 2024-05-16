import React, { useState } from 'react'
import check from '../../../../assets/ICONS/check.svg'
import add from '../../../../assets/ICONS/sellersicons/add.svg'
import logo from '../../../../assets/ICONS/logo.svg'
import { Link } from 'react-router-dom'
import AddCreditCardModal from './AddCreditCardModal'

const Payment = () => {
    const [showAddCardModal, setShowAddCardModal] = useState(false)

    return (
        <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
            <div className="flex flex-col py-14 pr-20 pl-10 bg-gray-50 max-md:px-5">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow leading-[120%] max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-bold text-black max-md:max-w-full">
                                    Saved cards
                                </div>
                                <div className="shrink-0 mt-7 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
                                <div className="flex flex-col justify-center px-10 py-8 mt-7 rounded-md border border-solid bg-neutral-50 border-stone-300 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between pr-10 text-base text-black max-md:pr-5">
                                        <div className="flex flex-col">
                                            <div>John Doe</div>
                                            <div className="mt-2">Card ending 1234</div>
                                            <div className="mt-2">Expiry 4/29</div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 my-auto aspect-[1.89] w-[73px]"
                                        />
                                    </div>
                                    <div className="flex gap-5 justify-between pr-10 mt-11 w-full text-sm whitespace-nowrap max-md:pr-5 max-md:mt-10">
                                        <div className="flex gap-1.5 justify-center px-3 py-0.5 rounded-xl border border-solid border-stone-300 text-zinc-500">
                                            <img
                                                loading="lazy"
                                                src={check}
                                                className="shrink-0 w-4 aspect-square"
                                            />
                                            <div>Default</div>
                                        </div>
                                        <div className="flex gap-4 justify-center py-0.5 text-cyan-600">
                                            <div>Delete</div>
                                            <div>Edit</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col px-10 py-8 mt-12 rounded-md border border-solid border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between pr-10 text-base text-black max-md:pr-5">
                                        <div className="flex flex-col">
                                            <div>John Doe</div>
                                            <div className="mt-2">Card ending 1234</div>
                                            <div className="mt-2">Expiry 4/29</div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 my-auto aspect-[1.89] w-[73px]"
                                        />
                                    </div>
                                    <div className="flex gap-5 justify-between pr-10 mt-11 w-full text-sm max-md:pr-5 max-md:mt-10">
                                        <div className="flex gap-1.5 justify-center px-1.5 py-1 rounded-xl text-zinc-500">
                                            <input type="checkbox" name="" id="" />
                                            <div>Set as default</div>
                                        </div>
                                        <div className="flex gap-4 justify-center py-0.5 text-cyan-600 whitespace-nowrap">
                                            <div>Delete</div>
                                            <div>Edit</div>
                                        </div>
                                    </div>
                                </div>
                                {showAddCardModal && <AddCreditCardModal setShowAddCardModal={setShowAddCardModal} />}
                                <button 
                                    className="flex gap-5 px-7 py-3.5 mt-12 text-base text-black border border-solid border-zinc-600 max-md:flex-wrap max-md:px-5 max-md:mt-10"
                                    onClick={() => setShowAddCardModal(true)}
                                >
                                    <img
                                        loading="lazy"
                                        src={add}
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <span className="flex-auto my-auto">Add new card</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col leading-[120%] max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-bold text-black max-md:max-w-full">
                                    Gift cards
                                </div>
                                <div className="shrink-0 mt-7 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
                                <div className="flex flex-col px-7 py-5 mt-7 rounded-md border border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between pr-11 text-base text-black max-md:pr-5">
                                        <div className="flex flex-col">
                                            <div className="text-xl font-bold">SONNY Gift Card</div>
                                            <div className="mt-2">Balance: $35.23</div>
                                            <div className="mt-2">Expiry 4/29</div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            src={logo}
                                            className="shrink-0 my-auto aspect-square w-[60px]"
                                        />
                                    </div>
                                    <div className="flex gap-1.5 justify-center self-start py-1 mt-16 text-sm rounded-xl text-zinc-500 max-md:mt-10">
                                        <input type="checkbox" name="" id="" />
                                        <div>Use gift card</div>
                                    </div>
                                </div>
                                <Link to='/account/addgiftcard-voucher' className="flex gap-5 px-7 py-3.5 mt-12 text-base text-black border border-solid border-zinc-600 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src={add}
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="flex-auto">Add gift card or voucher</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-2xl font-bold leading-8 text-black max-md:mt-10 max-md:max-w-full">
                    My transactions
                </div>
                <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 w-[1051px]" />
                <Link to='/account/transactions' className="mt-6 text-base font-bold leading-5 text-blue-500 underline max-md:max-w-full">
                    View transactions history
                </Link>
            </div>
        </div>
    )
}

export default Payment;