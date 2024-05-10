import React, { useState } from 'react'
import giftCard from '../../../../assets/ICONS/giftCard.svg'
import Voucher from '../../../../assets/ICONS/voucher.svg'
import GiftCardModal from './GiftCardModal'
import VoucherCardModal from './VoucherCardModal'
import ReloadBalanceModal from './ReloadBalanceModal'

const AddGiftCardorVoucher = () => {
    const [showGiftCardModal, setShowGiftCardModal] = useState(false)
    const [showVoucherCardModal, setShowVoucherCardModal] = useState(false)
    const [showReloadBalanceModal, setShowReloadBalanceModal] = useState(false)
    return (
        <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
            <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[890px] max-md:max-w-full">
                    <div className="px-16 py-14 rounded-md border border-black border-solid max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-12 py-6 mx-auto w-full text-xl font-bold leading-6 text-white bg-sky-950 max-md:px-5 max-md:mt-10">
                                    <div className="flex gap-3.5">
                                        <img
                                            loading="lazy"
                                            src={giftCard}
                                            className="shrink-0 w-8 aspect-square"
                                        />
                                        <div className="my-auto">Gift card</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                                <div className="flex gap-5 justify-between self-stretch my-auto text-base leading-5 text-center text-sky-800 max-md:mt-10">
                                {showGiftCardModal && <GiftCardModal setShowGiftCardModal={setShowGiftCardModal} />}
                                    <button 
                                        className="justify-center px-8 py-2 rounded-md border border-sky-800 border-solid max-md:px-5"
                                        onClick={() => setShowGiftCardModal(true)}
                                    >
                                        Redeem card
                                    </button>
                                    {showReloadBalanceModal && <ReloadBalanceModal setShowReloadBalanceModal={setShowReloadBalanceModal} />}
                                    <button 
                                        className="justify-center px-8 py-2 rounded-md border border-sky-800 border-solid max-md:px-5"
                                        onClick={() => setShowReloadBalanceModal(true)}
                                    >
                                        Reload balance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-16 py-14 mt-14 rounded-md border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-12 py-6 mx-auto w-full text-xl font-bold leading-6 text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:mt-10">
                                    <div className="flex gap-3.5">
                                        <img
                                            loading="lazy"
                                            src={Voucher}
                                            className="shrink-0 w-8 aspect-square"
                                        />
                                        <div className="my-auto">Voucher</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                            {showVoucherCardModal && <VoucherCardModal setShowVoucherCardModal={setShowVoucherCardModal} />}
                                <button 
                                    className="justify-center self-stretch px-7 py-2 my-auto text-base leading-5 text-center text-sky-800 rounded-md border border-sky-800 border-solid max-md:px-5 max-md:mt-10"
                                    onClick={() => setShowVoucherCardModal(true)}
                                >
                                    Redeem a voucher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGiftCardorVoucher;