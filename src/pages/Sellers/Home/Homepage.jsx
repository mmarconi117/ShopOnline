
import { useState } from 'react'
import GetVerifiedIcon from '../../../assets/ICONS/GetVerifide.svg'
import Paid from '../../../assets/ICONS/Paid.svg'
import Shipping from '../../../assets/ICONS/Shipping.svg'
import GetVerified from './GetVerified'
import GetPaid from './GetPaid'
import { set } from 'react-hook-form'


function Homepage() {
    const [showModal, setShowModal] = useState(false);
    console.log('showModal->',showModal)

    return (
        <div className="self-center flex max-w-full flex-col items-stretch p-10 pb-20 gap-10">
            <div className="flex flex-col justify-start items-start gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center max-w-full ">
                <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap">
                    Follow these 3 easy steps to start selling!
                </div>
                <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
                    Learn more
                </div>
            </div>

            <div className="max-w-full flex flex-col justify-start xl:flex-row xl:justify-between items-stretch gap-5">
                     {/* {showModal && <GetVerified setShowModal={setShowModal} />} */}
                <div className="relative xl:max-w-[290px] bg-white flex grow px-10 py-4 rounded-md items-stretch">
                    {showModal && <GetVerified setShowModal={setShowModal} />}

                    <div className=" text-black text-left text-base leading-6 grow-0 absolute top-5 left-5">
                        1.
                    </div>
                    <div className="flex grow flex-col justify-between items-center gap-3 sm:gap-6">
                        <img
                            loading="lazy"
                            src={GetVerifiedIcon}
                            className="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
                        />
                        <p className="text-zinc-700 text-center text-[16px] leading-6">
                            Add your business info to complete our quick-check verification
                        </p>

                        <button
                            className="text-zinc-700 text-center text-sm font-semibold leading-6 whitespace-nowrap items-stretch border-[color:var(--color-styles-neutral-600,#79767D)] self-center justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                            onClick={() => setShowModal(true)}
                        >
                            Get verified
                        </button>

                    </div>
                </div>

                <div className="relative xl:max-w-[290px] bg-white flex grow px-10 py-4 rounded-md items-stretch">
                {showModal && <GetPaid setShowModal={setShowModal} />}

                    <div className="text-black text-left text-base leading-6 grow-0 absolute top-5 left-5">
                        2.
                    </div>
                    <div className="flex grow flex-col justify-between items-center gap-3 sm:gap-6">
                        <img
                            loading="lazy"
                            src={Paid}
                            className="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
                        />
                        <p className="text-zinc-700 text-center text-[16px] leading-6">
                            Tell us where to send your payments. No setup, subscription or monthly fees.
                        </p>
                        <button 
                            className="text-zinc-700 text-center text-sm font-semibold leading-6 whitespace-nowrap items-stretch border-[color:var(--color-styles-neutral-600,#79767D)] self-center justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                            onClick={() => setShowModal(true)}

                        >
                            Get paid
                        </button>
                    </div>
                </div>
                <div className="relative xl:max-w-[290px] bg-white flex grow px-10 py-4 rounded-md items-stretch">
                    <div className="text-black text-left text-base leading-6 grow-0 absolute top-5 left-5">
                        3.
                    </div>
                    <div className="flex grow flex-col justify-between items-center gap-3 sm:gap-6">
                        <img
                            loading="lazy"
                            src={Shipping}
                            className="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
                        />
                        <p className="text-zinc-700 text-center text-[16px] leading-6">
                            Select the best shipping price and partners for your budget.
                        </p>
                        <button className="text-zinc-700 text-center text-sm font-semibold leading-6 whitespace-nowrap items-stretch border-[color:var(--color-styles-neutral-600,#79767D)] self-center justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5">
                            Start shipping
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col justify-center items-center mt-10 px-16 py-12 rounded-md max-md:max-w-full max-md:px-5">
                <div className="flex w-[400px] max-w-full flex-col items-stretch mt-7 mb-6">
                    <div className="text-zinc-800 text-2xl font-semibold leading-10 self-center whitespace-nowrap">
                        Become a Seller Now!
                    </div>
                    <div className="text-zinc-500 text-center text-sm leading-6 mt-5">
                        Access millions of customers, boost sales, build trust,
                        simplify operations, and stay ahead of the competition.
                    </div>
                    <div className="text-zinc-600 text-base font-medium leading-6 self-center whitespace-nowrap mt-8">
                        Build your catalogue
                    </div>
                </div>
            </div>
        </div>








    )
}

export default Homepage