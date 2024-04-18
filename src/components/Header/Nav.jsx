import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Nav.css";
import { setAuthenticated } from "../../reducersAndActions/actions/BuyersLoginFormAction";

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
    <ul className=" text-[#b7b9ba]  gap-3   py-2 px-10 nav-container ">
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
          style={{
            textDecoration: "none",
            color: isAuthenticated ? "gray" : "",
          }}
          className={`cursor-pointer ${
            isAuthenticated
              ? "pointer-events-none opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
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
        <Link to="/language">English/US</Link>
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
        <Link to="/help">Help</Link>
        {menu === "help" ? (
          <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
        ) : (
          <></>
        )}
      </li>
      <li>
       
          {isAuthenticated ? <Link to="/account">Account</Link> : <></>}
        
        {/* no dropdwn */}
       </li>
       <li>
          {isAuthenticated && (
            <>
              <button onClick={handleLogout}>Logout</button>
              {/* Add other menu items as needed */}
            </>
          )}
          {!isAuthenticated && <Link to="/login">Login</Link>}
       
      </li>
    </ul>
  );
}

{
  /* <Link to="/settings">Settings</Link>
<Link to="/info">Info</Link>
<Link to="/orders">Orders</Link> */
}

// orders page not done
// info page not done
