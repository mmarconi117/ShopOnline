import React from 'react'

const GiftCardModal = ({ setShowGiftCardModal }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button
                    className='text-white text-xl place-self-end'
                    onClick={() => setShowGiftCardModal(false)}
                >
                    X
                </button>
                <div className='bg-white p-5 rounded'>
                    <div className="flex flex-col px-5 text-base font-bold leading-5 text-black max-w-[703px]">
                        <div className="w-full text-3xl max-md:max-w-full">Redeem gift card</div>
                        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
                            Enter claim code
                        </div>
                        <input type="text" className="mt-4 w-full border border-black border-solid min-h-[50px] max-md:max-w-full" />
                        <button className="justify-center self-start px-8 py-3.5 mt-12 text-center bg-amber-300 rounded-md text-zinc-700 max-md:px-5 max-md:mt-10">
                            Apply to gift card balance
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCardModal;