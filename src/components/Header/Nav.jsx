import DropdownButton from "./DropdownButton";
import account from "../../assets/ICONS/Outline/account.svg";
import hamburgerMenu from "../../assets/ICONS/Outline/hamburgerMenu.svg";
import mobileLogo from "../../assets/ICONS/Outline/mobileLogo.svg";
import cart from "../../assets/ICONS/Outline/cart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
    
    const [menu, setMenu] = useState("")
    
    return (
        <div>
            {/* <div className="md:flex  bg-[#E2EFF6] justify-end">
                <button className="bg-inherit">Sell</button>
                <DropdownButton title={"English/US"}></DropdownButton>
                <DropdownButton title={"Help"}></DropdownButton>


                <button className="bg-inherit  flex items-center">
                
                <DropdownButton title={"Account"}></DropdownButton>
                </button>
            </div>

            <div className="justify-between hidden w-full bg-white max-lg:flex">
                <div className="flex items-center gap-6">
                    <img src={hamburgerMenu} alt="" className="w-8 h-8"/>
                    <img src={mobileLogo} alt="" />
                </div>

                <div className="flex gap-6">
                    <button className="text-center font-[Roboto] font-normal text-xs text-gray-600 leading-[16px] w-full">Sign in</button>
                    <img src={account} alt="" />
                    <img src={cart} alt="" />

                </div>
            </div> */}

            <div>
                <ul className="flex bg-[#E3EFF6] justify-end gap-6 pr-3 mt-3">
                    <li onClick={()=> {setMenu("home")}}><Link to="/" style={{textDecoration: 'none'}}>Home</Link>{menu==="home" ? <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]"/> : <></>}</li>
                    <li onClick={()=> {setMenu("sell")}}><Link to="/sellers" style={{textDecoration: 'none'}}>Sell</Link>{menu==="sell" ? <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]"/> : <></>}</li>
                    <li onClick={()=> {setMenu("language")}}><Link to="/language" style={{textDecoration: 'none'}}>English/US</Link>{menu==="language" ? <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]"/> : <></>}</li>
                    <li onClick={()=> {setMenu("help")}}><Link to="/help" style={{textDecoration: 'none'}}>Help</Link>{menu==="help" ? <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]"/> : <></>}</li>
                    <li onClick={()=> {setMenu("account")}}><Link to="/account" style={{textDecoration: 'none'}}>Account</Link>{menu==="account" ? <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]"/> : <></>}</li>
                </ul>
            </div>

        </div>
    )
}