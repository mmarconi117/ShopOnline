import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using it for navigation
import UserIcon from '../../../assets/ICONS/user/user-1.svg';
import ArrowDown from '../../../assets/ICONS/ArrowDown.svg';
import logo from '../../../assets/ICONS/Outline/LOGO.png';
import { useSelector } from 'react-redux';

function Header(props) {
  const isAuthenticated = useSelector((state) => state.loginFormReducer.isAuthenticated)
  const usersData = useSelector((state) => state.loginFormReducer.usersData);

  return (
    <div className="fixed z-10 top-0 w-full bg-white justify-between flex items-center py-6">
      <div className='hidden md:block pl-8'>
        <Link to="/sellers" >
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='flex md:hidden justify-center items-center pl-16'>
        <button className='flex flex-col gap-1.5 w-8 active:px-0.5' onClick={props.onClick}>
          <div className='w-full h-1 bg-black' />
          <div className='w-full h-1 bg-black' />
          <div className='w-full h-1 bg-black' />
        </button>
      </div>
      <div className="items-stretch hidden sm:flex justify-between gap-5 pr-4 md:gap-10 md:pr-8">
        <div className="items-stretch flex justify-between gap-5 md:gap-10 max-md:justify-center">
          <Link to="/" className="text-zinc-600 text-base leading-6 whitespace-nowrap">
            Home
          </Link>
          <Link to="/sellers/onlinefulfillment" className="text-zinc-600 text-base leading-6 whitespace-nowrap">
            Settings
          </Link>
          <Link to="/sellers/helppage" className="text-zinc-600 text-base leading-6">
            Help
          </Link>
          <Link to="/sellers/notificationsettings" className="text-zinc-600 text-base leading-6 whitespace-nowrap">
            Notifications
          </Link>
        </div>
        <div className="flex items-stretch justify-between gap-1.5 max-md:justify-center">
          <img
            loading="lazy"
            src={UserIcon}
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-zinc-900 whitespace-nowrap text-base font-medium leading-6 self-center my-auto">
            {isAuthenticated && usersData && usersData.name ? (usersData.name) : null}
          </div>
          <img
            loading="lazy"
            src={ArrowDown}
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
