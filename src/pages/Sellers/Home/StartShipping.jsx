import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {SET_PAYMENT_DETAILS} from "../../../reducersAndActions/actions"
import { useSelector, useDispatch } from "react-redux";

const StartShipping = ({setShowModalShipping}) => {
    const [isVerified] = useState(false);
    const [formData, setFormData] = useState("Free Shipping");
    const dispatch = useDispatch();
    
    const paymentDetailsdata = useSelector((state) => state.paymentDetailsReducer);
    const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
    const usersData = useSelector((state) => state.loginFormReducer.usersData);
  
    const paymentData = async (e) => {
      e.preventDefault()
      dispatch({ type: SET_PAYMENT_DETAILS, payload: formData });
      console.log('paymentDetail-data-->',paymentDetailsdata)

    };
  
    useEffect(() => {
      document.getElementById('modalShipping').showModal();
   
    }, [])
  
    console.log('formData->',formData)
    return (
        <dialog id="modalShipping" className="rounded-md flex flex-col max-md:max-h-screen gap-5 min-w-full md:min-w-max md:w-[80%] lg:max-w-[1000px] lg:w-[70%] px-5 py-5 bg-[#e3e3e3] border border-5 border-white ">
          <div className="items-stretch flex justify-between gap-5">
            <div className="text-zinc-800 text-base leading-6 whitespace-nowrap">
              Welcome { isAuthenticated && usersData && usersData.name ? (usersData.name) : null},
            </div>
            <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
              <form method="dialog">
                <button className=" bg-white text-zinc-800 rounded-full w-6 h-6 text-base active:bg-red-400 active:text-white" onClick={() => setShowModalShipping(false)}>x</button>
              </form>
            </div>
          </div>
  
          {isVerified && isVerified ? <div className="items-start bg-white flex grow basis-[0%] flex-col mt-10 px-6 py-7 rounded-md max-md:px-5">You have already verified</div> : (<>
  
            <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap">
              Shipping Fee Details
            </div>
  
            <form onSubmit={paymentData}>
  
              <div className="items-start bg-white flex flex-col p-6 gap-3 rounded-md">
                {/* Get yourselves verified */}
                <div className="text-zinc-600 text-lg md:text-xl font-semibold leading-6 self-stretch pb-5">
                  Set shipping fee you want to charge your customer
                </div>


              {/* Free Shipping */}
                <div className="w-full items-stretch flex flex-col gap-2">
                 
                  <input 
                    type="radio" 
                    name="Free Shipping"
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    value="Free Shipping"
                    checked={formData==="Free Shipping"}
                    onChange={(e) => setFormData( e.target.value )}
                  />
                   <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    Free Shipping
                  </label>
                </div>


                {/* Set Shipping Fee */}
                <div className="w-full items-stretch flex flex-col gap-2 mt-5">
                  <input 
                    type="radio" 
                    name="Set Shipping Fee"
                    value="Set Shipping Fee"
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    checked={formData==="Set Shipping Fee"}
                    onChange={(e) => setFormData(e.target.value )}  
                  />
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Set Shipping Fee
                  </label>
                </div>
             
                {/* Buttons */}
                <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5 px-16 md:px-20 ">
                  <button
                    type="button"
                    className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                    onClick={() => setShowModalShipping(false)}
                  >
                    Save
                  </button>
  
                  {/* <button
                    type="submit"
                    className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white text-center text-sm font-semibold  whitespace-nowrap bg-zinc-500 grow justify-center px-8 py-2 rounded-[30px] max-md:px-5"
                  >
                    Submit for review
                  
                  </button> */}
  
                </div>
              </div>
            </form>
          </>
          )}
        </dialog>
    );
  }
  
  StartShipping.propTypes = {
    setShowModalShipping: PropTypes.func.isRequired,
  }

export default StartShipping