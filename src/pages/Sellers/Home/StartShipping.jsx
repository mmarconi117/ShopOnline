import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {SET_SHIPPING_DETAILS} from "../../../reducersAndActions/actions"
import { useSelector, useDispatch } from "react-redux";

const StartShipping = ({setShowModalShipping}) => {
    const [isVerified] = useState(false);
    const [formData, setFormData] = useState(
        {
          selectedMethod:"Free Shipping",
          packageWeight:0,
          packageDimensions:0,
          DeliveryTime:0,
          TransportationCharge:0,
          shippingCostTotal:0
        }
      );
    const [formError,setFormError]=useState({
      selectedMethod:'',
      packageWeight:'',
          packageDimensions:'',
          DeliveryTime:'',
          TransportationCharge:'',
          shippingCostTotal:''
    })
    const dispatch = useDispatch();

    
    const shipmentDetailsdata = useSelector((state) => state.paymentDetailsReducer);
    const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
    const usersData = useSelector((state) => state.loginFormReducer.usersData);
  
    const inititalState= {
      selectedMethod:"Free Shipping",
      packageWeight:0,
      packageDimensions:0,
      DeliveryTime:0,
      TransportationCharge:0,
      shippingCostTotal:0
    }
    
    const shippingData = async (e) => {
      e.preventDefault()
      let inputError=
      {
          selectedMethod:'',
          packageWeight:'',
          packageDimensions:'',
          DeliveryTime:'',
          TransportationCharge:'',
          shippingCostTotal:''
      }

      if(formData===null){
        setFormError({
          ...inputError, 
          selectedMethod:"Please select a method"
        }
        );
        return
      }else{
        dispatch({ type: SET_SHIPPING_DETAILS, payload: formData });
        setFormData(inititalState)
        setShowModalShipping(false)
      }
    };


  
    useEffect(() => {
      document.getElementById('modalShipping').showModal();
   
    }, [])
  
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
  
            <form onSubmit={shippingData}>
  
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
                    checked={formData.selectedMethod==="Free Shipping"}
                    onChange={(e) => setFormData( {selectedMethod:e.target.value} )}
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
                    checked={formData.selectedMethod==="Set Shipping Fee"}
                    onChange={(e) => setFormData({selectedMethod:e.target.value} )}  
                  />
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Set Shipping Fee
                  </label>
                  <ul>
                    <li>Weight of the Package</li>
                    <li>Package Dimension</li>
                    <li>Delivery Times for Shipping</li>
                    <li>Trasportation Charge</li>
                  </ul>
                  <p className="error-message">{formError.selectedMethod}</p>

                </div>
             
                {/* Buttons */}
                <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5 px-16 md:px-20 ">
                  <button
                    type="submit"
                    className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                  >
                    Save
                  </button>
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