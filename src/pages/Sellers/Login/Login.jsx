import google from '../../../assets/ICONS/google.svg';
import apple from '../../../assets/ICONS/apple.svg'
import logo from '../../../assets/ICONS/Outline/LOGO.png';
import { Link, useNavigate } from 'react-router-dom'
import { submitLoginForm, setLoginFormErrors } from '../../../reducersAndActions/actions/LoginFormAction';
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../firebase-config';
import axios from 'axios';

let initialStoreData = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.loginFormReducer.formData) || initialStoreData;
  const formErrors = useSelector((state) => state.loginFormReducer.errors)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setLoginFormErrors(errors));

    if (Object.keys(errors).length === 0) {

      const { email, password } = storeData
      const user = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          return user;
          // alert("Login Successful")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
        });

      try {
        const validToken = user.accessToken;
        const response = await axios.get('http://localhost:8000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${validToken}`
          }
        });
        if (response.data.role === "seller") {
          const usersData = {
            id: response.data.id,
            name: response.data.name,
            profile_picture: response.data.profile_picture,
            email: response.data.email,
          }

          localStorage.setItem('valid_token_seller', validToken);
          dispatch({ type: 'SELLERS_SET_USERS_DATA', payload: usersData });
          dispatch({ type: "SELLERS_SET_AUTHENTICATED", payload: true })
          navigate('/sellers');
          dispatch({ type: 'LOGIN_SUBMIT_FORM', payload: initialStoreData });
          dispatch(setLoginFormErrors({}));
        } else {
          alert("Your account is not a sellers account.")
        }

      } catch (error) {
        dispatch(setLoginFormErrors(error));
      }
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch({ type: 'LOGIN_SUBMIT_FORM', payload: { [fieldName]: value } });
  };


  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-10 md:px-40">
      <div className="flex w-full md:w-[705px] max-w-full flex-col items-stretch">
        <div className="self-center">
          <img src={logo} className="object-contain object-center" />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
            <label className="text-gray-900 text-sm font-medium leading-6 grow whitespace-nowrap">
              Email <span className="text-red-600"> * </span>
            </label>

            <input
              type="text"
              className="items-stretch border border-[color:var(--Greyscale-300,#E9EAEC)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
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
              className="items-stretch border border-[color:var(--Greyscale-300,#E9EAEC)] flex flex-col justify-center mt-2.5 px-5 py-4 rounded-xl border-solid max-md:max-w-full"
              placeholder='Input your password'
              value={storeData.password}
              onChange={(e) => [handleInputChange(e, 'password'), formErrors.password = ""]}
              name="password"
            />
            {formErrors.password && <p className='text-red-600 mt-2'>{formErrors.password}</p>}

          </div>

          <button
            type='submit'
            className="ease-in-out duration-200 hover:text-white hover:bg-[#1e1564] text-stone-950 text-center text-base font-semibold leading-6 whitespace-nowrap justify-center items-center w-[50%] max-w-full mt-12 px-16 py-4 rounded-2xl border border-[color:var(--Greyscale-300,#E9EAEC)] max-md:mt-10 max-md:px-5">
            Log In
          </button>
          {formErrors.message && <p className='text-red-600 mt-2'>{formErrors.message}</p>}
        </form>
        <div className="items-center flex gap-4 mt-4 py-2.5 justify-center">
          <div className="bg-gray-400 w-[25%] shrink-0 h-px" />
          <span className="text-slate-500 text-center text-sm font-medium leading-6">
            Or login with
          </span>
          <div className="bg-gray-400 w-[25%] shrink-0 h-px" />
        </div>
        <div className="items-center flex flex-col md:flex-row justify-start md:justify-center gap-4 mt-4">
          <button
            type='button'
            className="w-[75%] md:w-[50%] justify-center border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-3 py-4 rounded-xl border-solid items-start">
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
            className="w-[75%] md:w-[50%] justify-center border border-[color:var(--Greyscale-300,#E9EAEC)] flex gap-4 py-4 rounded-xl border-solid items-start">
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
        <div className="self-center text-emerald-500 text-sm font-medium leading-6 mt-4 max-md:max-w-full">
          <span className="text-slate-400">
            don't have an account?
            <Link to="/sellers/signup" className='text-[#27a375] focus:text-[#258e69] outline-none'> Create Account</Link>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Login;
