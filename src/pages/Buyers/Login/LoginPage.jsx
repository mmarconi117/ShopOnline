import facebook from "../../../assets/ICONS/socials/facebook.svg";
import twitter from "../../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../../assets/ICONS/socials/instagram.svg";
import arrow from "../../../assets/ICONS/ArrowDown.svg"

import { Link, useNavigate } from 'react-router-dom'
import { submitBuyersLoginForm, setBuyersLoginFormErrors } from '../../../reducersAndActions/actions/BuyersLoginFormAction';
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';
import axios from 'axios';

let initialStoreData = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const socialMedia = [facebook, instagram, linkedin, twitter];
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.buyersLoginFormReducer.formData) || initialStoreData;
  const formErrors = useSelector((state) => state.buyersLoginFormReducer.errors)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setBuyersLoginFormErrors(errors));

    if (Object.keys(errors).length === 0) {      
      try {
        const response = await axios.post('http://localhost:8000/login', storeData);

          if (response.data.user.role === "buyer") {
            
              const userData = {
                id: response.data.user.id,
                name: response.data.user.name,
                profile_picture: response.data.user.profile_picture,
                email: response.data.user.email,
              }
              dispatch(submitBuyersLoginForm(userData));
              localStorage.setItem('valid_token', response.data.validToken);
              navigate('/');
              dispatch({ type: 'BUYERS_LOGIN_SUBMIT_FORM', payload: initialStoreData });
              dispatch(setBuyersLoginFormErrors({}));
              clearLocalStorage();
          }else{
            alert("Your account is not a buyers account.")
          }   

      } catch (error) {
        dispatch(setBuyersLoginFormErrors(error));
      }
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch({ type: 'BUYERS_LOGIN_SUBMIT_FORM', payload: { [fieldName]: value } });
  };

  const clearLocalStorage = () => {
    const validToken = localStorage.getItem('valid_token');
  
    if (validToken) {
      const clearTime = 24 * 60 * 60 * 1000;
      setTimeout(() => {
        localStorage.removeItem('valid_token');
      }, clearTime);
    }
  };

  return (
    <div className="flex flex-col items-center font-Roboto pb-10 gap-5">
      <div className='h-8 flex bg-[#2284B6] justify-between px-3 md:px-5 items-center w-full'>
        <div className='text-white text-sm md:text-base'>Get up to 50% off from stores!</div>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <p className='text-white text-sm md:text-base'>USD</p>
            <img src={arrow} alt="down arrow" />
          </div>
          <div className='flex gap-1 items-center'>
            <p className='text-white text-sm md:text-base'>English</p>
            <img src={arrow} alt="down arrow" />
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center'>
        <div className='text-3xl leading-[52px] font-semibold text-[#2284B6]'>LOGO</div>
        <h2 className='text-xl font-medium'>Welcome to XXXX</h2>
        <p className='text-center'>Type your e-mail or password to login to your account.</p>
      </div>
      
      
      <div className="flex flex-col max-w-[704px] w-full md:border-[0.5px] border-[#938F96] p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.email}
              onChange={(e) => [handleInputChange(e, 'email'), formErrors.email = ""]}
            />
            {formErrors.email && <p className='text-red-600 mt-2'>{formErrors.email}</p>}

          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.password}
              onChange={(e) => [handleInputChange(e, 'password'), formErrors.password = ""]}
            />
            {formErrors.password && <p className='text-red-600 mt-2'>{formErrors.password}</p>}

          </div>

          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <span>Stay signed in</span>
          </div>

          <button
            type="submit"
            className="bg-[#EEC643] px-8 py-4 max-w-[704px] w-full mx-auto mt-8 rounded-md"
          >
            Log in
          </button>
        </form>

        <div className="py-8 text-center">
          Dont have an account?{" "}
          <Link to="/signup" className="p-2 underline text-[#1F2070]">
            Sign up
          </Link>
        </div>

        <div>
          <div className="flex items-center">
            <div className="flex-1 h-px bg-[#938F96]"></div>
            <div className="mx-4 text-sm font-['Roboto']">or continue with</div>
            <div className="flex-1 h-px bg-[#938F96]"></div>
          </div>
          <div className="flex justify-center py-10 gap-9">
            {socialMedia.map((media,i)=>{
              return <img key={i} src={media} className=' cursor-pointer'/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
