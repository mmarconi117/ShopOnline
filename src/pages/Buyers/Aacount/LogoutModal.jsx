import React from 'react'
import logoutBlue from '../../../assets/ICONS/logoutBlue.svg'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";


const LogoutModal = ({ setShowLogoutModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear("valid_token_buyer");
        dispatch({ type: "BUYERS_SET_AUTHENTICATED", payload: false });
        alert("Logout Successfully");
        navigate("/login");
    };
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className="w-[600px] justify-center items-center flex flex-col bg-white">
                <img
                    loading="lazy"
                    src={logoutBlue}
                    className="mt-20 max-w-full aspect-square w-[200px] max-md:mt-10"
                />
                <div className="mt-10 text-3xl font-bold leading-9 text-stone-950 max-md:mt-10">
                    Logout
                </div>
                <button
                    className="justify-center items-center px-8 py-2 mt-16 w-80 max-w-full text-center bg-amber-300 rounded-md shadow-sm text-zinc-800 max-md:px-5 max-md:mt-10"
                    onClick={handleLogout}
                >
                    Confirm Logout
                </button>
                <button
                    className="justify-center items-center px-8 py-2 mt-9 mb-14 w-80 max-w-full text-center text-sky-800 whitespace-nowrap rounded-md border border-cyan-600 border-solid max-md:px-5 max-md:mb-10"
                    onClick={() => setShowLogoutModal(false)}
                >
                    Cancel
                </button>
            </div>

        </div>
    )
}

export default LogoutModal;