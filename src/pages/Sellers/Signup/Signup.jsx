import axios from 'axios'
import google from '../../../assets/ICONS/google.svg'
import apple from '../../../assets/ICONS/apple.svg'
import signupImage from '../../../assets/ICONS/signupImage.svg'
import { submitForm, setFormErrors } from '../../../reducersAndActions/actions/SignupFormAction';
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


let initialStoreData = {
  name: '',
  workEmail: '',
  business_name: '',
  password: '',
  role: 'seller',
};


function Signup() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.signupFormReducer.formData) || initialStoreData;
  const formErrors = useSelector((state) => state.signupFormReducer.errors)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setFormErrors(errors));

    if (Object.keys(errors).length === 0) {
  
      dispatch(submitForm(storeData));
      try {
        const response = await axios.post('http://localhost:8000/api/auth/signup', storeData);
  
        console.log('Signup successful:', response.data);
        dispatch({ type: 'SIGNUP_SUBMIT_FORM', payload: initialStoreData });
  
      } catch (error) {        
        console.error('Signup error:', error);
        console.log('Signup error: ', errorInfo.message)
      }
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch({ type: 'SIGNUP_SUBMIT_FORM', payload: { [fieldName]: value } });
  };

  useEffect(() => {
    console.log(storeData)
  }, [])
  
  

  return (
      <div className="bg-white flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0 grow">
        <div className="flex flex-col gap-4 items-stretch w-full lg:w-[50%] p-8 sm:p-20 md:p-[60px] lg:p-[80px] xl:p-[120px]">
          <div className='flex flex-col gap-4 items-stretch'>
            <div className="text-gray-900 text-3xl font-bold leading-10 max-md:max-w-full text-center lg:text-left">
              Sell your products easily starting from now!
            </div>
            <div className="text-gray-900 text-lg leading-7 mt-4 max-md:max-w-full">
              Get started for free today!
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-stretch gap-4'>
              <div className="w-full items-stretch flex grow basis-[0%] flex-col">
                <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                  Name <span className="text-red-600"> * </span>
                </label>

                <input
                  type="text"
                  className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                  placeholder='Input your full name'
                  value={storeData.name}
                  onChange={(e) => [handleInputChange(e, 'name'), formErrors.name=""]}
                  name="name"

                />
                {formErrors.name && <p className='text-red-600 mt-2'>{formErrors.name}</p>}
              </div>

              <div className="w-full items-stretch flex grow basis-[0%] flex-col">
                <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                  Work Email <span className="text-red-600"> * </span>
                </label>

                <input
                  type="email"
                  className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                  placeholder='example@company.com'
                  value={storeData.email}
                  onChange={(e) => [handleInputChange(e, 'email'), formErrors.email=""]}
                  name="email"

                />
                {formErrors.email && <p className='text-red-600 mt-2'>{formErrors.email}</p>}
              </div>
              <div className="w-full items-stretch flex grow basis-[0%] flex-col">
                <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                  Legal business name <span className="text-red-600"> * </span>
                </label>

                <input
                  type="text"
                  className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                  placeholder='Shop online new york'
                  value={storeData.business_name}
                  onChange={(e) => [handleInputChange(e, 'business_name'), formErrors.business_name=""]}
                  name="business_name"

                />
                {formErrors.business_name && <p className='text-red-600 mt-2'>{formErrors.business_name}</p>}
              </div>
              <div className="w-full items-stretch flex grow basis-[0%] flex-col">
                <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                  Password <span className="text-red-600"> * </span>
                </label>

                <input
                  type="password"
                  className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                  placeholder='Input your password account'
                  value={storeData.password}
                  onChange={(e) => [handleInputChange(e, 'password'), formErrors.password=""]}
                  name="password"
                />
                {formErrors.password && <p className='text-red-600 mt-2'>{formErrors.password}</p>}
              </div>
              <button
                type='submit'
                className="self-center ease-in-out duration-200 text-[#A0AEC0] text-center text-base font-bold leading-6 tracking-wide whitespace-nowrap justify-center items-center hover:bg-[#1e1564] hover:text-[#F1F2F4] bg-[#F1F2F4] mt-5 px-16 py-4 rounded-xl max-md:max-w-full">
                Create Account
              </button>
            </form>
            <div className="justify-center items-center flex px-0.5 py-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-gray-100 grow h-px" />
              <span className=" text-slate-500 text-center text-sm font-medium leading-6 px-10 grow-0">
                Or register with
              </span>
              <div className="bg-gray-100 grow h-px" />
            </div>
            <div className="items-stretch flex flex-col sm:flex-row justify-between gap-4">
              <button
                type='button'
                className="grow justify-center border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-3 px-20 lg:px-2 xl:px-4 py-4 rounded-xl border-solid items-center">
                <img
                  loading="lazy"
                  src={google}
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-900 text-center text-base font-medium leading-6 tracking-wide self-stretch">
                  Google
                </div>
              </button>

              <button
                type='button'
                className="grow justify-center border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-3 px-20 lg:px-2 xl:px-4 py-4 rounded-xl border-solid items-center">
                <img
                  loading="lazy"
                  src={apple}
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="px-[5px] text-gray-900 text-center text-base font-medium leading-6 tracking-wide self-stretch">
                  Apple 
                </div>
              </button>
            </div>
            <div className="text-sm font-medium leading-6 text-center">
              <span className="text-slate-400">
                Already have an account? <Link to="/sellers/login" className='text-[#27A376]'>Login</Link>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-slate-400 text-sm font-medium leading-6 grow whitespace-nowrap">
                © 2023 Humanline. All Rights Reserved.
              </div>
              <div className='flex justify-center items-center gap-5'>
                <div className="text-gray-900 text-[11px] font-medium leading-6">
                  Terms & Conditions
                </div>
                <div className="text-gray-900 text-[11px] font-medium leading-6 whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div> 
        
        <div className="hidden lg:flex flex-col items-stretch w-[50%]">
          <div className="bg-amber-300 grow w-full max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                <div className="flex-col w-full  fill-[linear-gradient(180deg,#BB951A_-0.92%,#FFF_117.89%)] mix-blend-multiply overflow-hidden relative flex min-h-[779px] pl-20 py-12 items-end max-md:max-w-full max-md:pl-5">
                  <img
                    loading="lazy"
                    src={signupImage}
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <span className="relative w-full  flex text-stone-950 text-3xl font-semibold leading-[52px] mt-2.5 max-md:max-w-full">
                    Welcome to Shop Online New York
                  </span>
                  <div className="relative text-stone-950 text-lg leading-7 mt-4  max-md:max-w-full max-md:mb-10">
                    Sell and make money at ease.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-white flex w-[616px] shrink-0 max-w-full h-[768px] flex-col mt-64 mx-auto rounded-2xl max-md:mt-10" />
              </div>
            </div>
          </div>
        </div>
  </div>
  )
  }

export default Signup
