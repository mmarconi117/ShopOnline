import { useEffect, useState } from "react";
import eye from '../../../assets/ICONS/eye.svg'
import PropTypes from "prop-types";
import { SET_BUSINESS_DETAILS } from "../../../reducersAndActions/actions";
import { useSelector, useDispatch } from "react-redux";


function GetVerified({ setShowModal }) {
  const [isVerified] = useState(false);
  const [formData, setFormData] = useState({
    countryOfIncorporation: '',
    taxid: '',
    businessName: '',
    businessAddress: '',
    state: '',
    city: '',
    postalCode: '',
    contactNumber: '',
    websiteUrl: '',
    grossValue: '',
    performingcategory: '',
    displayName: '',
    customerServiceNumber: '',
    customerServiceEmail: '',
    termsAndconditions: false,

  });
  const [formError,setFormError]=useState({
    countryOfIncorporation: '',
    taxid: '',
    businessName: '',
    businessAddress: '',
    state: '',
    city: '',
    postalCode: '',
    contactNumber: '',
    websiteUrl: '',
    grossValue: '',
    performingcategory: '',
    displayName: '',
    customerServiceNumber: '',
    customerServiceEmail: '',
    termsAndconditions: false,

  })
  const dispatch = useDispatch();
  
  const businessDetailsdata = useSelector((state) => state.businessDetailsReducer);
  const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
  const usersData = useSelector((state) => state.loginFormReducer.usersData);

  
  let inititalState={
    countryOfIncorporation: '',
    taxid: '',
    businessName: '',
    businessAddress: '',
    state: '',
    city: '',
    postalCode: '',
    contactNumber: '',
    websiteUrl: '',
    grossValue: '',
    performingcategory: '',
    displayName: '',
    customerServiceNumber: '',
    customerServiceEmail: '',
    termsAndconditions: false,
  }

  const businessData = (e) => {
    e.preventDefault()
    let inputError={
      countryOfIncorporation: '',
      taxid: '',
      businessName: '',
      businessAddress: '',
      state: '',
      city: '',
      postalCode: '',
      contactNumber: '',
      websiteUrl: '',
      grossValue: '',
      performingcategory: '',
      displayName: '',
      customerServiceNumber: '',
      customerServiceEmail: '',
      termsAndconditions: '',
    }
    if(!formData.countryOfIncorporation
      && !formData.taxid 
      && !formData.businessName 
      && !formData.businessAddress 
      && !formData.state 
      && !formData.city
      && !formData.postalCode
      && !formData.contactNumber
      && !formData.websiteUrl
      && !formData.grossValue
      && !formData.displayName
      && !formData.customerServiceNumber
      && !formData.customerServiceEmail
      && formData.termsAndconditions===false
      ){
      console.log('empty please fill');
      setFormError({
        ...inputError, 
        countryOfIncorporation: 'Please fill this section',
        taxid: 'Please fill this section',
        businessName: 'Please fill this section',
        businessAddress: 'Please fill this section',
        state: 'Please fill this section',
        city: 'Please fill this section',
        postalCode: 'Please fill this section',
        contactNumber: 'Please fill this section',
        websiteUrl: 'Please fill this section',
        grossValue: 'Please fill this section',
        performingcategory: 'Please fill this section',
        displayName: 'Please fill this section',
        customerServiceNumber: 'Please fill this section',
        customerServiceEmail: 'Please fill this section',
        termsAndconditions: 'Please agree to this term',
      }
      );
      return
  }

  if(!formData.countryOfIncorporation){
    console.log('empty please fill');
    setFormError({
      ...inputError, 
      countryOfIncorporation: 'Please fill this section',
    }
    );
    return
  }

  if(!formData.taxid){
    setFormError({
      ...inputError, 
      taxid: 'Please fill this section',
    }
    );
    return
  }

  if(!formData.businessName ){
    setFormError({
      ...inputError, 
      businessName: 'Please fill this section',
    }
    );
    return
  }

  if(!formData.businessAddress){
    setFormError({
        ...inputError, 
        businessAddress: 'Please fill this section',
      }
    );
    return
  }

  if(!formData.state ){
    console.log('empty please fill');
    setFormError({
        ...inputError, 
        state: 'Please fill this section',
      }
    );
    return
  }

  if(!formData.city){
    setFormError({
      ...inputError, 
      city: 'Please fill this section',
      
    }
    );
    return
  }
  if(!formData.postalCode){
    setFormError({
      ...inputError, 
      postalCode: 'Please fill this section',
      
    }
    );
    return
  }

  if(!formData.contactNumber){
    console.log('empty please fill');
    setFormError({
      ...inputError, 
      contactNumber: 'Please fill this section',
    }
    );
    return
  }

  if(!formData.websiteUrl){
    console.log('empty please fill');
      setFormError({
        ...inputError, 
        websiteUrl: 'Please fill this section',
      }
    );
    return
  }

  if(!formData.grossValue){
    setFormError({
        ...inputError, 
        grossValue: 'Please fill this section',
      }
    );
    return
  }

  if(!formData.displayName){
    setFormError({
        ...inputError, 
        displayName: 'Please fill this section',
      }
    );
    return
  }

  if(!formData.customerServiceNumber){
      setFormError({
        ...inputError, 
        customerServiceNumber: 'Please fill this section',
      }
    );
    return
  }
  
  if(!formData.customerServiceEmail){
      setFormError({
        ...inputError, 
        customerServiceEmail: 'Please fill this section',
      }
    );
    return
  }
  
  if(formData.termsAndconditions===false){
      setFormError({
        ...inputError, 
        termsAndconditions: 'Please agree to this term',
      }
    );
    return
  }
  
  else {
    dispatch({ type: SET_BUSINESS_DETAILS, payload: formData });
    console.log('businessDetail-data-->',businessDetailsdata);
    setFormData(inititalState);
    setShowModal(false)
  }
    
};

  useEffect(() => {
    document.getElementById('modal').showModal();
 
  }, [])


  const handleChangeURL = (e) => {
    const { value } = e.target;
    console.log('value change->',value)

      setFormData({ ...formData, 
        websiteUrl:
        value
      }
      );

        
  }

  console.log('formData->',formData)

  return (
      <dialog id="modal" className="rounded-md flex flex-col max-md:max-h-screen gap-5 min-w-full md:min-w-max md:w-[80%] lg:max-w-[1000px] lg:w-[70%] px-5 py-5 bg-[#e3e3e3] border border-5 border-white ">
        <div className="items-stretch flex justify-between gap-5">
          <div className="text-zinc-800 text-base leading-6 whitespace-nowrap">
            Welcome { isAuthenticated && usersData && usersData.name ? (usersData.name) : null},
          </div>
          <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
            <form method="dialog">
              <button className=" bg-white text-zinc-800 rounded-full w-6 h-6 text-base active:bg-red-400 active:text-white" onClick={() => setShowModal(false)}>x</button>
            </form>
          </div>
        </div>

        {isVerified && isVerified ? <div className="items-start bg-white flex grow basis-[0%] flex-col mt-10 px-6 py-7 rounded-md max-md:px-5">You have already verified</div> : (<>

          <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap">
            Get Verified!
          </div>

          <form onSubmit={businessData}>

            <div className="items-start bg-white flex flex-col p-6 gap-3 rounded-md">
              {/* Get yourselves verified */}
              <div className="text-zinc-600 text-lg md:text-xl font-semibold leading-6 self-stretch pb-5">
                Get yourself verified and start your business as a seller
              </div>
              {/* Country/ Tax ID */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5 mt-5">
                <div className="grow items-stretch flex flex-col gap-6">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    Country/Region of incorporation
                  </label>
                  <div className="rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4">
                    <select 
                    className="w-full py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 outline-none"
                    value={formData.countryOfIncorporation}
                    onChange={(e) => setFormData({ ...formData, countryOfIncorporation: e.target.value })}

                    >
                      <option value="">Select Country</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                  <p className="error-message">{formError.countryOfIncorporation}</p>

                </div>
                <div className="grow items-stretch flex flex-col gap-6">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    US Tax ID (TIN)
                  </label>
                  <input 
                  type="text" 
                  className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                  value={formData.taxid}
                  onChange={(e) => setFormData({ ...formData, taxid: e.target.value })}
                  />
                  <p className="error-message">{formError.taxid}</p>

                </div>
              </div>
              {/* Tax Policy */}
              <div className="text-zinc-600 text-xs leading-5 self-stretch whitespace-nowrap mt-5">
                Your U.S. Tax classification isW9
              </div>
              {/* Line */}
              <div className="bg-zinc-100 self-stretch h-px" />

              {/* Business Details title */}
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap">
                Business Details
              </div>
              {/* Legal Business name */}
              <div className="w-full items-stretch flex flex-col gap-2">
                <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Legal business name
                </label>

                <input 
                  type="text" 
                  className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
                <p className="error-message">{formError.businessName}</p>

              </div>
              {/* Business Address */}
              <div className="w-full items-stretch flex flex-col gap-2 mt-5">
                
                <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                Business address
                </label>

                <input 
                  type="text" 
                  className="w-full py-3 px-5 text-sm items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] border-solid" 
                  value={formData.businessAddress}
                  onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}  
                />
                <p className="error-message">{formError.businessAddress}</p>

              </div>
              {/* Country/ State  */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    Country/Region
                  </label>

                  <div className="rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4">
                    <select 
                    className="w-full py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}

                    >
                      <option value="">Select Country</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                  <p className="error-message">{formError.country}</p>

                </div>
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    State
                  </label>

                  <div className="rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4">
                    <select 
                    className="w-full py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 outline-none"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    >
                      <option value="">Select State</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </div>
                  <p className="error-message">{formError.state}</p>

                </div>
              </div>
              {/* City/ ZipCode */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  City
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4" 
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}  
                  />
                <p className="error-message">{formError.city}</p>

                </div>
      
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                Postal/Zip code
                </label>

                <input 
                  type="text" 
                  className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}  
                />
                <p className="error-message">{formError.postalCode}</p>
                </div>
              </div>
              {/* Contact number/ website url */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Primary contact number
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} 
                  />
                  <p className="error-message">{formError.contactNumber}</p>

                </div>
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap"
                    htmlFor="urlInput">
                    Website URL
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    placeholder="http://www.example.com" 
                    value={formData.websiteUrl}
                    pattern="^(https?:\/\/)?([\w\-]*\.)*[\w\-]+(\/[\w\- .\/?%&=]*)?$"
                    onChange={handleChangeURL}
                  />
                      <p className="error-message">{formError.websiteUrl}</p>

                </div>
              </div>
              {/* GMV/ Highest performing cat. */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">
                <div className="grow basis-[50%] items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Yearly gross merchandise value (GMV)
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    value={formData.grossValue}
                    onChange={(e) => setFormData({ ...formData, grossValue: e.target.value })} 
                  />
                                    <p className="error-message">{formError.grossValue}</p>

                </div>
                <div className="grow basis-[50%] items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Highest performing category
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    value={formData.performingcategory}
                    onChange={(e) => setFormData({ ...formData, performingcategory: e.target.value })}  
                  />
                                    <p className="error-message">{formError.performingcategory}</p>

                </div>
              </div>
              {/* Line */}
              <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-6" />
              {/* Seller Profile title */}
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap mt-5">
                Seller profile
              </div>
              {/* Seller profile subtitle */}
              <div className="text-zinc-600 text-xs leading-5 self-stretch mt-2.5">
                This info is public. We share it to build your trust with customers.
              </div>
              {/* Display name */}
              <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                
                <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                Display name on Website
                </label>

                <input 
                  type="text" 
                  className="w-full h-10 justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 flex-col mt-2 border-solid pl-5"
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })} 
                />
                                  <p className="error-message">{formError.displayName}</p>

              </div>
              {/* Phone no./ Email */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5">
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Customer service phone number
                  </label>

                  <input 
                    type="text" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    value={formData.customerServiceNumber}
                    onChange={(e) => setFormData({ ...formData, customerServiceNumber: e.target.value })} 
                  />
                                    <p className="error-message">{formError.customerServiceNumber}</p>

                </div>
                <div className="grow items-stretch flex flex-col gap-2 mt-5">
                  <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                  Customer service email address.
                  </label>

                  <input 
                    type="email" 
                    className="w-full py-3 border-solid text-zinc-500 text-sm font-semibold leading-4 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] px-4"
                    value={formData.customerServiceEmail}
                    onChange={(e) => setFormData({ ...formData, customerServiceEmail: e.target.value })} 
                  />
                                    <p className="error-message">{formError.customerServiceEmail}</p>

                </div>
              </div>
              {/* Term and conditions */}
              <div className="justify-center items-center flex gap-2 mt-6 p-0 self-start">
                <input 
                  type="checkbox" 
                  className="" 
                  checked={formData.termsAndconditions}
                  onChange={(e) => setFormData({ ...formData, termsAndconditions: e.target.checked })}  
                />
                <div className="text-black text-base self-center whitespace-nowrap">
                  I agree to the terms & conditions
                </div>
                <p className="error-message">{formError.termsAndconditions}</p>

              </div>
              {/* Line */}
              <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8" />
              {/* Buttons */}
              <div className="justify-between items-stretch self-stretch flex flex-col md:flex-row gap-5 px-16 md:px-20 ">
                <button
                  type="button"
                  className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                  onClick={() => setShowModal(false)}
                >
                  Save & close
                </button>

                <button
                  type="submit"
                  className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white text-center text-sm font-semibold  whitespace-nowrap bg-zinc-500 grow justify-center px-8 py-2 rounded-[30px] max-md:px-5"
                >
                  Submit for review
                
                </button>

              </div>
            </div>
          </form>
        </>
        )}
      </dialog>
  );
}

GetVerified.propTypes = {
  setShowModal: PropTypes.func.isRequired,
}

export default GetVerified;
