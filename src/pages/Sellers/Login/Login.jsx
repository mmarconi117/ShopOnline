import google from '../../../assets/ICONS/google.svg'
import apple from '../../../assets/ICONS/apple.svg'
import logo from '../../../assets/ICONS/Outline/LOGO.png';
import { Link } from 'react-router-dom'
import { submitLoginForm, setLoginFormErrors } from '../../../reducersAndActions/actions/LoginFormAction';
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';

let initialStoreData = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.loginFormReducer.formData) || initialStoreData;
  const formErrors = useSelector((state) => state.loginFormReducer.errors)

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setLoginFormErrors(errors));

    if (Object.keys(errors).length === 0) {

      dispatch(submitLoginForm(storeData));
      dispatch({ type: 'LOGIN_SUBMIT_FORM', payload: initialStoreData });
      console.log('Store data:', storeData);
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch({ type: 'LOGIN_SUBMIT_FORM', payload: { [fieldName]: value } });
  };


  return (
    <div className=" bg-white flex flex-col justify-center items-center max-md:px-5">
      <div className="flex w-[705px] max-w-full flex-col items-stretch">
        <div className="self-center">
          <img src={logo} className="object-contain object-center" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
            <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
              Email <span className="text-red-600"> * </span>
            </label>

            <input
              type="text"
              className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
              placeholder='example@company.com'
              value={storeData.email}
              onChange={(e) => [handleInputChange(e, 'email'), formErrors.email = ""]}
              name="workEmail"

            />
            {formErrors.email && <p className='text-red-600 mt-2'>{formErrors.email}</p>}
          </div>

          <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
            <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
              Password <span className="text-red-600"> * </span>
            </label>

            <input
              type="password"
              className="items-stretch border border-[color:var(--Primary-Base,#27A376)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
              placeholder='Input your password'
              value={storeData.password}
              onChange={(e) => [handleInputChange(e, 'password'), formErrors.password = ""]}
              name="password"
            />
            {formErrors.password && <p className='text-red-600 mt-2'>{formErrors.password}</p>}

          </div>

          <button
            type='submit'
            className="text-stone-950 text-center text-base font-semibold leading-6 whitespace-nowrap justify-center items-center self-center w-[463px] max-w-full mt-12 px-16 py-4 rounded-2xl border border-[color:var(--Primary-Base,#27A376)] max-md:mt-10 max-md:px-5">
            Log In
          </button>
        </form>
        <div className=" w-full justify-center items-stretch flex gap-4 mt-4 px-0.5 py-2.5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-center bg-gray-100 self-center flex w-[25%] shrink-0 h-px flex-col my-auto" />
          <span className="text-slate-500 text-center text-sm font-medium leading-6">
            Or login with
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
          <span className="text-slate-400">
            don't have an account?
            <Link to="/sellers/signup"> Create Account</Link>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Login;
