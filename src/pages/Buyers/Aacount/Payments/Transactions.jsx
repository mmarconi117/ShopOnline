import React, { useEffect } from 'react'
import RightArrow from '../../../../assets/ICONS/RightArrow.svg'

const Transactions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
            <div className="flex flex-col">
                <div className="flex gap-5 self-start px-5 text-xl leading-6 max-md:flex-wrap">
                    <div className="text-neutral-400">My Account</div>
                    <img
                        loading="lazy"
                        src={RightArrow}
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="text-zinc-700">Payments</div>
                    <img
                        loading="lazy"
                        src={RightArrow}
                        className="shrink-0 w-6 aspect-square"
                    />
                    <div className="font-bold text-sky-800">Transactions</div>
                </div>
                <div className="flex flex-col pb-10 mt-9 w-full bg-white max-md:max-w-full">
                    <div className="px-5 w-full max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-base leading-5 text-black">
                                    <div className="justify-center items-start p-2.5 whitespace-nowrap bg-zinc-200 max-md:pr-5">
                                        Date
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        April 21, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        April 18, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        April 9, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        March 26, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        March 12, 2014
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        March 5, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        February 27, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        February 10, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        January 31, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        January 19, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        January 7, 2024
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        December 24, 2023
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-base leading-5 text-black">
                                    <div className="justify-center items-start p-2.5 bg-zinc-200 max-md:pr-5">
                                        Order number
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678625615651
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678763726783
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678723657236
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678536253852
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678725735253
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678627536253
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678676761262
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678279738623
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678287543377
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678872966555
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Refund #12345678232725557
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Order #12345678231217267
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-base leading-5 text-black">
                                    <div className="justify-center items-start p-2.5 bg-zinc-200 max-md:pr-5">
                                        Card number
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr credit card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr credit card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        SONNY reward card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr credit card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr credit card ****
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">
                                        Starr credit card ****
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-base font-bold leading-5 text-zinc-800">
                                    <div className="justify-center items-start p-2.5 text-black whitespace-nowrap bg-zinc-200 max-md:pr-5">
                                        Amount
                                    </div>
                                    <div className="justify-center p-2.5 bg-white">- $54.36</div>
                                    <div className="justify-center p-2.5 bg-white">- $54.36</div>
                                    <div className="justify-center p-2.5 bg-white">- $88.12</div>
                                    <div className="justify-center p-2.5 bg-white">- $32.36</div>
                                    <div className="justify-center p-2.5 bg-white">- $12.36</div>
                                    <div className="justify-center p-2.5 bg-white">- $54.23</div>
                                    <div className="justify-center p-2.5 bg-white">- $98.36</div>
                                    <div className="justify-center p-2.5 bg-white">- $31.23</div>
                                    <div className="justify-center p-2.5 bg-white">- $34.15</div>
                                    <div className="justify-center p-2.5 bg-white">- $39.65</div>
                                    <div className="justify-center p-2.5 bg-white">+ $39.65</div>
                                    <div className="justify-center p-2.5 bg-white">- $39.65</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 self-center mt-11 w-full text-base font-bold leading-5 text-center whitespace-nowrap max-w-[970px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <button className="flex flex-1 gap-2 justify-center px-8 py-3 rounded-md border border-sky-800 border-solid text-zinc-400 max-md:px-5">
                            
                            <div className="my-auto">Back</div>
                        </button>
                        <button className="flex flex-1 gap-2 justify-center px-8 py-3 bg-amber-300 rounded-md text-zinc-700 max-md:px-5">
                            <div className="my-auto">Next</div>
                            <img
                                loading="lazy"
                                src={RightArrow}
                                className="shrink-0 w-6 aspect-square"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;