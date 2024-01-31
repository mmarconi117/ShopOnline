import google from '../../../assets/ICONS/google.svg'
import apple from '../../../assets/ICONS/apple.svg'
import signupImage from '../../../assets/ICONS/signupImage.svg'
import { submitForm, setFormErrors } from '../../../reducersAndActions/actions/SignupFormAction';
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';


let initialStoreData = {
  name: '',
  workEmail: '',
  legalBusinessName: '',
  password: '',
};


function Signup() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.signupFormReducer.formData) || initialStoreData;
  const formErrors = useSelector((state) => state.signupFormReducer.errors)

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setFormErrors(errors));

    if (Object.keys(errors).length === 0) {
  
      dispatch(submitForm(storeData));
      dispatch({ type: 'SIGNUP_SUBMIT_FORM', payload: initialStoreData });
      console.log('Store data:',storeData);
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch({ type: 'SIGNUP_SUBMIT_FORM', payload: { [fieldName]: value } });
  };
  

  return (
    <div className="bg-white">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="items-center flex grow flex-col justify-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[484px] max-w-full flex-col items-stretch mt-16 mb-5 max-md:mt-10">
              <span className="text-gray-900 text-3xl font-bold leading-10 max-md:max-w-full">
                Sell your products easily starting from now!
              </span>
              <span className="text-gray-900 text-lg leading-7 mt-4 max-md:max-w-full">
                Get started for free today!
              </span>
              <form onSubmit={handleSubmit}>
                <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
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

                <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                  <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                    Work Email <span className="text-red-600"> * </span>
                  </label>

                  <input
                    type="email"
                    className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                    placeholder='example@company.com'
                    value={storeData.workEmail}
                    onChange={(e) => [handleInputChange(e, 'workEmail'), formErrors.workEmail=""]}
                    name="workEmail"

                  />
                  {formErrors.workEmail && <p className='text-red-600 mt-2'>{formErrors.workEmail}</p>}
                </div>
                <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                  <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
                    Legal business name <span className="text-red-600"> * </span>
                  </label>

                  <input
                    type="text"
                    className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
                    placeholder='Shop online new york'
                    value={storeData.legalBusinessName}
                    onChange={(e) => [handleInputChange(e, 'legalBusinessName'), formErrors.legalBusinessName=""]}
                    name="legalBusinessName"

                  />
                  {formErrors.legalBusinessName && <p className='text-red-600 mt-2'>{formErrors.legalBusinessName}</p>}
                </div>
                <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
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
                  className="w-full text-[#A0AEC0] text-center text-base font-bold leading-6 tracking-wide whitespace-nowrap justify-center items-center bg-[#F1F2F4] mt-5 px-16 py-4 rounded-xl max-md:max-w-full max-md:px-5">
                  Create Account
                </button>
              </form>

              <div className=" w-full justify-center items-stretch flex gap-4 mt-4 px-0.5 py-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center bg-gray-100 self-center flex w-[25%] shrink-0 h-px flex-col my-auto" />
                <span className="text-slate-500 text-center text-sm font-medium leading-6">
                  Or register with
                </span>
                <div className="items-center bg-gray-100 self-center flex w-[25%] shrink-0 h-px flex-col my-auto" />
              </div>
              <div className="items-stretch flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                <button
                  type='button'
                  className="justify-between border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-3 px-20 py-4 rounded-xl border-solid items-start max-md:px-5">
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
                  className="justify-between border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-4 px-20 py-4 rounded-xl border-solid items-start max-md:px-5">
                  <img
                    loading="lazy"
                    src={apple}
                    className="aspect-[0.91] object-contain object-center w-5 fill-gray-900 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-900 text-center text-base font-medium leading-6 tracking-wide self-stretch">
                    Apple
                  </div>
                </button>
              </div>
              <div className="text-emerald-500 text-sm font-medium leading-6 mt-4 max-md:max-w-full">
                <span className="text-slate-400">Already have an account?</span>
              </div>
              <span className="justify-center items-stretch flex gap-2.5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-slate-400 text-sm font-medium leading-6 grow whitespace-nowrap">
                  © 2023 Humanline. All Rights Reserved.
                </div>
                <div className="text-gray-900 text-sm font-medium leading-6">
                  Terms & Conditions
                </div>
                <div className="text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">
                  Privacy Policy
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
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
    </div>
  )
}

export default Signup;