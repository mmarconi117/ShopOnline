import React from 'react'
import closeBtn from '../../../../assets/ICONS/closeBtn.svg'

const AddCreditCardModal = ({ setShowAddCardModal }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='flex flex-col h-screen mt-10 bg-white max-w-[580px] overflow-y-scroll'>
                <div className="flex gap-1 items-start pt-6 pr-3.5 pb-11 pl-10 max-md:flex-wrap max-md:pl-5">
                    <div className="flex flex-col grow shrink-0 self-end mt-5 basis-0 leading-[120%] w-fit max-md:max-w-full">
                        <div className="text-base font-bold text-black max-md:max-w-full">
                            Add Credit Card
                        </div>
                        <input type='text'
                            className="flex gap-2.5 justify-between px-4 py-2.5 mt-6 text-base rounded border border-solid border-zinc-400 text-zinc-500 max-md:flex-wrap max-md:max-w-full"
                            placeholder='Card type'
                        />
                        <input type='number'
                            className="flex gap-2.5 justify-between px-4 py-2.5 mt-9 text-base rounded border border-solid border-zinc-400 text-zinc-500 max-md:flex-wrap max-md:max-w-full"
                            placeholder='Card number'
                        />
                        <div className="flex gap-5 justify-between mt-9 text-base text-zinc-500 max-md:flex-wrap">

                            <select className="flex gap-2.5 justify-between px-4 py-2.5 rounded border border-solid border-zinc-400">
                                <option selected value="">Exp month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>

                            </select>
                            <select className="flex gap-2.5 justify-between px-4 py-2.5 rounded border border-solid border-slate-400">
                                <option selected value="">Exp year</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>

                            </select>
                        </div>
                        <div className="mt-12 text-base font-bold text-black max-md:mt-10 max-md:max-w-full">
                            Billing address
                        </div>
                        <input
                            type='text'
                            className="justify-center items-start py-2.5 pr-2.5 pl-5 mt-6 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
                            placeholder='Full name'
                        />
                        <input
                            type='text'
                            className="justify-center items-start py-2.5 pr-2.5 pl-5 mt-6 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
                            placeholder='Street address'
                        />
                        <input
                            type='text'
                            className="justify-center items-start py-2.5 pr-2.5 pl-5 mt-6 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
                            placeholder='Apt number'
                        />
                        <input
                            type='text'
                            className="justify-center items-start py-2.5 pr-2.5 pl-5 mt-6 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
                            placeholder='Town/City'
                        />
                        <div className="flex gap-5 justify-between mt-9 w-full text-base text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                            <select className="flex gap-2.5 justify-between px-4 py-2.5 whitespace-nowrap rounded border border-solid border-zinc-400">
                                <option selected disabled value="" className="my-auto">State</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                            </select>
                            <input type='number' className="justify-center items-start px-4 py-2.5 rounded border border-solid border-slate-400 max-md:pr-5" placeholder='Zip code' />

                        </div>
                        <input
                            type='number'
                            className="justify-center items-start py-2.5 pr-2.5 pl-5 mt-6 text-base leading-6 rounded border border-solid border-zinc-400 text-neutral-400 max-md:pr-5 max-md:max-w-full"
                            placeholder='Phone number'
                        />

                        <div className="flex gap-5 justify-between mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-2 justify-center self-start p-2 mt-1 text-sm text-stone-950">
                                <input type="checkbox" name="" id="" />
                                <div>Set as default card</div>
                            </div>
                            <button className="justify-center px-8 py-3.5 text-base text-center bg-amber-300 rounded-md text-zinc-700 max-md:px-5">
                                Save card
                            </button>
                        </div>
                    </div>
                    <button
                        className="flex flex-col self-start max-md:hidden"
                        onClick={() => setShowAddCardModal(false)}
                    >
                        <img
                            loading="lazy"
                            src={closeBtn}
                            className="self-center w-6 aspect-square"
                        />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddCreditCardModal;