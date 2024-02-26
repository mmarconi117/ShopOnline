import facebook from "../../../assets/ICONS/socials/facebook.svg";
import twitter from "../../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../../assets/ICONS/socials/instagram.svg";
import { Link } from "react-router-dom";

import {submitForm, setFormErrors } from '../../../reducersAndActions/actions/BuyersSignupFormAction' 
import { useSelector, useDispatch } from 'react-redux';
import { validateForm } from './formValidation';
import axios from "axios";


let initialStoreData = {
  name: '',
  email: '',
  password: '',
  conPassword: '',
};

const SignupPage = () => {
  const socialMedia = [facebook, instagram, linkedin, twitter];

  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.buyersSignupFormReducer.formData);
  const formErrors = useSelector((state) => state.buyersSignupFormReducer.errors)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(storeData);
    dispatch(setFormErrors(errors));

    if (Object.keys(errors).length === 0 && storeData !==0) {

          dispatch(submitForm(storeData));
          if (storeData.staySignedIn) {
            localStorage.setItem('userData', JSON.stringify(storeData.email));
          }
          const userData = {
            name: storeData.name,
            email: storeData.email,
            password: storeData.password,            
            role: storeData.role
          }
          try {
            const response = await axios.post('http://localhost:8000/signup', userData);
      
            console.log('Signup successful:', response.data);
            // Clear form data after successful signup
            dispatch({ type: 'BUYERS_SIGNUP_FORM', payload: initialStoreData });
      
          } catch (error) {        
            console.error('Signup error:', error);
            console.log('Signup error: ', errorInfo.message)
          }        
    }
    
  };

  const handleInputChange = (e, fieldName) => {
    const { value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    dispatch({ type: 'BUYERS_SIGNUP_FORM', payload: { [fieldName]: inputValue } });
  };

  return (
    <div className="flex flex-col items-center mb-8 font-['Roboto']">
      <div className="flex flex-col gap-4 p-4 text-center">
        <span className="font-semibold">Welcome to SONNY</span>
      </div>
      <div className="flex flex-col max-w-[704px] w-full border-[0.5px] border-[#938F96] p-10 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="First and last name"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.name}
              onChange={(e) => [handleInputChange(e, 'name'), formErrors.name=""]}
            />
            {formErrors.name && <p className='text-red-600 mt-2'>{formErrors.name}</p>}

          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.email}
              onChange={(e) => [handleInputChange(e, 'email'), formErrors.email=""]}
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
              placeholder="Enter password"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.password}
              onChange={(e) => [handleInputChange(e, 'password'), formErrors.password=""]}
            />
            {formErrors.password && <p className='text-red-600 mt-2'>{formErrors.password}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirm_password" className="font-semibold">
              Re-enter password
            </label>
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm password"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
              value={storeData.conPassword}
              onChange={(e) => [handleInputChange(e, 'conPassword'), formErrors.conPassword=""]}
            />
            {formErrors.conPassword && <p className='text-red-600 mt-2'>{formErrors.conPassword}</p>}
          </div>

          <div className="flex gap-2">
          <input
          type="checkbox"
          name="staySignedIn"
          id="staySignedIn"
          checked={storeData.staySignedIn}
          onChange={(e) => handleInputChange(e, 'staySignedIn')}
        />
        <label htmlFor="staySignedIn">Stay signed in</label>
          </div>

          <button
            type="submit"
            className="bg-[#EEC643] px-8 py-4 max-w-[472px] w-full mx-auto mt-8 rounded-md"
          >
            Create
          </button>
        </form>

        <div className="py-8 text-center">
          Already have an account?
          <Link to="/login" className="p-2 underline text">
            Log in
          </Link>
        </div>

        <div>
          <div className="flex items-center">
            <div className="flex-1 h-px bg-[#938F96]"></div>
            <div className="mx-4 text-sm">or create with</div>
            <div className="flex-1 h-px bg-[#938F96]"></div>
          </div>
          <div className="flex justify-center py-10 gap-9">
           {socialMedia.map((media,i)=>{
              return <img key={i} src={media}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
