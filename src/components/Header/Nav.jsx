import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from '../../reducersAndActions/actions/BuyersLoginFormAction';


export default function Nav() {
  const [menu, setMenu] = useState("");
  const isAuthenticated = useSelector((state) => state.buyersLoginFormReducer.isAuthenticated)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to handle user logout
    localStorage.clear('valid_token')
    dispatch(setAuthenticated(false));
    
    navigate('/')
    // Additional logout logic, e.g., clearing user data from state or local storage
  };

  return (
        <ul className="flex bg-[#001c43] text-[#b7b9ba] justify-between gap-3 sm:justify-end sm:gap-10  py-2 px-3 ">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            {menu === "home" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("sell");
            }}
          >
            <Link 
              to="/sellers/login" 
              style={{ textDecoration: "none", color: isAuthenticated ? 'gray' : '' }}
              className={`cursor-pointer ${isAuthenticated ? 'pointer-events-none opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
              Sell
            </Link>
            {menu === "sell" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("language");
            }}
          >
            <Link to="/language" style={{ textDecoration: "none" }}>
              English/US
            </Link>
            {menu === "language" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("help");
            }}
          >
            <Link to="/help" style={{ textDecoration: "none" }}>
              Help
            </Link>
            {menu === "help" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <div style={{ position: "relative", display: "flex" }}>
              <button className="dropbtn">
                {isAuthenticated ? "Account" : ""}
              </button>
              <div className="flex gap-4 dropdown-content">
                {isAuthenticated && (
                  <>
                    <Link to="/settings">Settings</Link>
                    <Link to="/info">Info</Link>
                    <Link to="/orders">Orders</Link>
                    <button onClick={handleLogout}>Logout</button>
                    {/* Add other menu items as needed */}
                  </>
                )}
                {!isAuthenticated && <Link to="/login">Login</Link>}
              </div>
            </div>
          </li>
        </ul>
  );
}
