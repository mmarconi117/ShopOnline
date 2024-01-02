
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState("");

  return (
    <div>
      <div>
        <ul className="flex bg-[#E3EFF6] justify-end gap-6 pr-3 mt-3">
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
            <Link to="/sellers" style={{ textDecoration: "none" }}>
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
          <li
            onClick={() => {
              setMenu("account");
            }}
          >
            <Link to="/account" style={{ textDecoration: "none" }}>
              {" "}
               Account
            </Link>
            {menu === "account" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
