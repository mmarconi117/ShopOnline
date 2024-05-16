import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated } from "../../reducersAndActions/actions/BuyersLoginFormAction";
import DropdownCard from '../Header/DropDownCard'
export default function Nav() {
  const [menu, setMenu] = useState("");
  const isAuthenticated = useSelector(
    (state) => state.buyersLoginFormReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to handle user logout
    localStorage.clear("valid_token_buyer");
    dispatch({ type: "BUYERS_SET_AUTHENTICATED", payload: false });

    navigate("/");
    // Additional logout logic, e.g., clearing user data from state or local storage
  };

  return (
    <ul className="text-[#b7b9ba] w-full py-2 px-10 bg-[#001c43] h-16 flex justify-between items-center">
      {/* For small screens */}
      <li className="sm:hidden flex justify-center w-full ">
        <Link to="/" className="text-white mr-6">
          Home
        </Link>
        <Link
          to="/sellers/login"
          className={`cursor-pointer ${
            isAuthenticated
              ? "pointer-events-none opacity-50 cursor-not-allowed text-gray-400"
              : "opacity-100 text-white"
          } mr-6`}
        >
          Sell
        </Link>
        {/* <Link to="/language" className="text-white mr-6">
          English/US
        </Link> */}
        <DropdownCard />
        <Link to="/help" className="text-white mr-6">
          Help
        </Link>
        {isAuthenticated ? (
          <Link to="/account" className="text-white mr-6">
            Account
          </Link>
        ) : null}
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </li>

      {/* For screens larger than sm */}
      <li className="hidden sm:flex justify-center w-full">
        <Link to="/" className="text-white mr-6">
          Home
        </Link>
        <Link
          to="/sellers/login"
          className={`cursor-pointer ${
            isAuthenticated
              ? "pointer-events-none opacity-50 cursor-not-allowed text-gray-400"
              : "opacity-100 text-white"
          } mr-6`}
        >
          Sell
        </Link>
        {/* <Link to="/language" className="text-white mr-6">
          English/US
        </Link> */}
         <DropdownCard  />
        <Link to="/help" className="text-white mr-6">
          Help
        </Link>
        {isAuthenticated ? (
          <Link to="/account" className="text-white mr-6">
            Account
          </Link>
        ) : null}
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </li>
    </ul>
  );
}
