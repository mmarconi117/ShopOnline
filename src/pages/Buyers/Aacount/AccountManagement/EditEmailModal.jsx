import React from 'react'
import closeBtn from '../../../../assets/ICONS/closeBtn.svg'


const EditEmailModal = ({ setShowEditEmailModal }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className="flex flex-col items-center pb-20 text-base font-bold leading-5 bg-white w-[499px] text-zinc-800">
                <div className="flex flex-col justify-center self-stretch px-9 py-3.5 w-full text-xl bg-zinc-200 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                        <div className="my-auto">Edit email</div>
                        <button onClick={() => setShowEditEmailModal(false)}>
                            <img
                                loading="lazy"
                                src={closeBtn}
                                className="shrink-0 w-8 aspect-square"
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-[388px] self-start justify-center px-16 py-3 mt-12 max-md:mt-10">Email Id</div>
                <input type='text'
                    className="justify-center px-5 py-3 mt-3.5 w-full whitespace-nowrap rounded-md border border-solid border-stone-300 max-w-[388px] text-slate-500"
                    placeholder='johndoe@gmail.com'
                />

                <div className="w-full max-w-[388px] self-start justify-center px-16 py-3 mt-12 max-md:mt-10">Password</div>
                <input type='password'
                    className="justify-center px-5 py-3 mt-3.5 w-full whitespace-nowrap rounded-md border border-solid border-stone-300 max-w-[388px] text-slate-500"
                    placeholder='******'
                />


                <button className="justify-center items-center px-8 py-2.5 mt-16 max-w-full text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-700 w-[188px] max-md:px-5 max-md:mt-10">
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditEmailModal;