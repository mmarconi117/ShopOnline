import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {SET_PAYMENT_DETAILS} from "../../../reducersAndActions/actions"
import { useSelector, useDispatch } from "react-redux";

const GetPaid = ({setShowModalPaid}) => {
    const [isVerified] = useState(false);
    const [formData, setFormData] = useState({
      accountHolderName:'',
      accountNumber:'',
      reenterAccountNumber:'',
      IFSCCode:'',
      accountType:'',
      sucess:''
    });
    const [formError,setFormError]=useState({
      accountHolderName:'',
      accountNumber:'',
      reenterAccountNumber:'',
      IFSCCode:'',
      accountType:''

    })

    const dispatch = useDispatch();
    
    const paymentDetailsdata = useSelector((state) => state.paymentDetailsReducer);
    const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
    const usersData = useSelector((state) => state.loginFormReducer.usersData);
  
    const paymentData = async (e) => {

 
      e.preventDefault();

      let inputError={
        accountHolderName:'',
        accountNumber:'',
        reenterAccountNumber:'',
        IFSCCode:'',
        accountType:''
      }
      
      if(!formData.accountHolderName&& !formData.accountNumber && !formData.reenterAccountNumber && !formData.IFSCCode && !formData.accountType){
          console.log('empty please fill');
          setFormError({
            ...inputError, 
            accountHolderName:'Empty',
            accountNumber:'Empty',
            reenterAccountNumber:'Empty',
            IFSCCode:'Empty',
            accountType:'Empty'
          }
          );
          return
      }

      if(!formData.accountHolderName){
        setFormError({
          ...inputError, 
            accountHolderName:'Empty',
          
          }
        );
        return
      }
      if( !formData.accountNumber){
        setFormError({
          ...inputError, 
       
            accountNumber:'Empty',
          }
        );
        return
    }
    if( !formData.reenterAccountNumber){
      setFormError({
        ...inputError, 
     
          reenterAccountNumber:'Empty',
        }
      );
      return
  }

  if( !formData.IFSCCode){
    setFormError({
      ...inputError, 
   
        IFSCCode:'Empty',
      }
    );
    return
  }

  if( !formData.accountType){
    setFormError({
      ...inputError, 
   
        accountType:'Empty',
      }
    );
    return
}
    /////check if account numbers match//
if(formData.accountNumber !== formData.reenterAccountNumber){
      setFormError({
        ...inputError, 
          reenterAccountNumber:'Account Numbers do not match',
 
        }
      );
      return
  }else{
    dispatch({ type: SET_PAYMENT_DETAILS, payload: formData });
    console.log('paymentDetail-data-->',paymentDetailsdata);
    setShowModalPaid(false)


  }
  
       

      
        
        

    
    };


  
    useEffect(() => {
      document.getElementById('modalPaid').showModal();
   
    }, [])
  
    console.log('formData->',formData)
    return (
        <dialog id="modalPaid" className="rounded-md flex flex-col max-md:max-h-screen gap-5 min-w-full md:min-w-max md:w-[80%] lg:max-w-[1000px] lg:w-[70%] px-5 py-5 bg-[#e3e3e3] border border-5 border-white ">
          <div className="items-stretch flex justify-between gap-5">
            <div className="text-zinc-800 text-base leading-6 whitespace-nowrap">
              Welcome { isAuthenticated && usersData && usersData.name ? (usersData.name) : null},
            </div>
            <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
              <form method="dialog">
                <button className=" bg-white text-zinc-800 rounded-full w-6 h-6 text-base active:bg-red-400 active:text-white" onClick={() => setShowModalPaid(false)}>x</button>
              </form>
            </div>
          </div>
  
          {isVerified && isVerified ? <div className="items-start bg-white flex grow basis-[0%] flex-col mt-10 px-6 py-7 rounded-md max-md:px-5">You have already verified</div> : (<>
  
            <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap">
              Get Paid
            </div>
  
            <form onSubmit={paymentData}>
  
              <div className="items-start bg-white flex flex-col p-6 gap-3 rounded-md">
                {/* Get yourselves verified */}
                <div className="text-zinc-600 text-lg md:text-xl font-semibold leading-6 self-stretch pb-5">
                  Enter your bank details and get paid
                </div>

                <div className="w-full items-stretch flex flex-col gap-2">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    Account Holder Name
                  </label>
  
                  <input 
                    type="text" 
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    value={formData.accountHolderName}
                    onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
                  />
                  <p className="error-message">{formError.accountHolderName}</p>
                </div>


                {/* Account Holder Number */}
                <div className="w-full items-stretch flex flex-col gap-2 mt-5">
                  
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Account Number
                  </label>
  
                  <input 
                    type="text" 
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}  
                  />
                                    <p className="error-message">{formError.accountNumber}</p>

                </div>

                {/*reenter Account Holder Number */}
                <div className="w-full items-stretch flex flex-col gap-2 mt-5">
                  
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Re-enter Account Number
                  </label>
  
                  <input 
                    type="text" 
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    value={formData.reenterAccountNumber}
                    onChange={(e) => setFormData({ ...formData, reenterAccountNumber: e.target.value })
                    }  
                  />
                  <p className="error-message">{formError.reenterAccountNumber}</p>

                </div>

                {/* IFSC Code */}
                <div className="w-full items-stretch flex flex-col gap-2 mt-5">
                  
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  IFSC Code
                  </label>
  
                  <input 
                    type="text" 
                    className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                    value={formData.IFSCCode}
                    onChange={(e) => setFormData({ ...formData, IFSCCode: e.target.value })}  
                  />
                  <p className="error-message">{formError.IFSCCode}</p>

                </div>


                {/*Account Type  */}
                <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">

                  <div className="grow items-stretch flex flex-col gap-2 mt-5">
                    <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                      Account Type
                    </label>
  
                    <div className="rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4">
                      <select 
                      className="w-full py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 outline-none"
                      value={formData.accountType}
                      onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                      >
                        <option value="">Select Your Account Type</option>
                        <option value="Checking">Checking</option>
                        <option value="Saving">Saving</option>
                      </select>
                    </div>
                    <p className="error-message">{formError.accountType}</p>

                  </div>
                </div>
                {/* Buttons */}
                <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5 px-16 md:px-20 ">
                  <button
                    type="submit"
                    className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
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
  
  GetPaid.propTypes = {
    setShowModalPaid: PropTypes.func.isRequired,
  }

export default GetPaid