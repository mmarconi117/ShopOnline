import React, { useState } from 'react'
import RightArrow from '../../../../assets/ICONS/RightArrow.svg'
import editIcon from '../../../../assets/ICONS/editIcon.svg'
import { Link } from 'react-router-dom'
import EditNameModal from './EditNameModal'
import EditEmailModal from './EditEmailModal'
import EditPhoneNumberModal from './EditPhoneNumberModal'
import EditPasswordModal from './EditPasswordModal'


const AccountManagement = () => {
    const [showEditNameModal, setShowEditNameModal] = useState(false)
    const [showEditEmailModal, setShowEditEmailModal] = useState(false)
    const [showEditPhoneNumberModal, setShowPhoneNumberModal] = useState(false)
    const [showEditPasswordModal, setShowPasswordModal] = useState(false)
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
                    <div className="font-bold text-sky-800">Account management</div>
                </div>
                <div className="flex flex-col items-start py-11 pr-20 pl-10 text-2xl font-bold leading-8 bg-gray-50 max-md:px-5">
                    <div className="flex flex-col justify-center px-3.5 py-4 max-w-full rounded-md border border-solid bg-zinc-100 border-stone-300 w-[971px] max-md:pr-5">
                        <div className="flex flex-col pb-2.5 pl-2.5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-px whitespace-nowrap text-zinc-600 max-md:flex-wrap max-md:max-w-full">
                                <div>Name</div>
                                {showEditNameModal && 
                                    <EditNameModal
                                    setShowEditNameModal={setShowEditNameModal}
                                    />
                                }
                                <button onClick={() => setShowEditNameModal(true)}>
                                    <img
                                        loading="lazy"
                                        src={editIcon}
                                        className="shrink-0 w-8 aspect-square"
                                    />
                                </button>
                            </div>
                            <div className="mt-7 text-zinc-800 max-md:max-w-full">JOHN DOE</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-4 py-4 mt-12 max-w-full whitespace-nowrap rounded-md border border-solid border-stone-300 w-[971px] max-md:pr-5 max-md:mt-10">
                        <div className="flex flex-col pb-2.5 pl-2.5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-px text-zinc-600 max-md:flex-wrap max-md:max-w-full">
                                <div>Email</div>
                                {showEditEmailModal && 
                                    <EditEmailModal
                                    setShowEditEmailModal={setShowEditEmailModal}
                                    />
                                }
                                <button
                                    onClick={() => setShowEditEmailModal(true)}
                                >
                                    <img
                                        loading="lazy"
                                        src={editIcon}
                                        className="shrink-0 w-8 aspect-square"
                                    />
                                </button>
                            </div>
                            <div className="mt-7 text-zinc-800 max-md:max-w-full">
                                johndoe@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-4 py-4 mt-12 max-w-full rounded-md border border-solid border-stone-300 w-[971px] max-md:pr-5 max-md:mt-10">
                        <div className="flex flex-col pb-2.5 pl-2.5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between pr-1.5 text-zinc-600 max-md:flex-wrap max-md:max-w-full">
                                <div>Phone number</div>
                                {showEditPhoneNumberModal &&
                                    <EditPhoneNumberModal
                                    setShowEditPhoneNumberModal={setShowPhoneNumberModal}
                                    />
                                }
                                <button onClick={()=> setShowPhoneNumberModal(true)}>
                                    <img
                                        loading="lazy"
                                        src={editIcon}
                                        className="shrink-0 w-8 aspect-square"
                                    />
                                </button>
                            </div>
                            <div className="mt-7 text-black max-md:max-w-full">999-999-9999</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-4 py-4 mt-12 max-w-full whitespace-nowrap rounded-md border border-solid border-stone-300 w-[971px] max-md:pr-5 max-md:mt-10">
                        <div className="flex flex-col pb-2.5 pl-2.5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between text-zinc-600 max-md:flex-wrap max-md:max-w-full">
                                <div>Password</div>
                                {showEditPasswordModal &&
                                    <EditPasswordModal
                                    setShowEditPasswordModal={setShowPasswordModal}
                                    />
                                }
                                <button onClick={()=> setShowPasswordModal(true)}>
                                    <img
                                        loading="lazy"
                                        src={editIcon}
                                        className="shrink-0 w-8 aspect-square"
                                    />
                                </button>
                            </div>
                            <div className="mt-7 text-zinc-800 max-md:max-w-full">*******</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountManagement