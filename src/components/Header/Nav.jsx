import DropdownButton from "./DropdownButton"
import app from "../../assets/ICONS/Outline/Mask.svg"
import heart from "../../assets/ICONS/Outline/heart.svg"
import account from "../../assets/ICONS/Outline/account.svg"
import hamburgerMenu from "../../assets/ICONS/Outline/hamburgerMenu.svg"
import mobileLogo from "../../assets/ICONS/Outline/mobileLogo.svg"
import cart from "../../assets/ICONS/Outline/cart.svg"


export default function Nav() {
    return (
        <div>
            <div className="hidden lg:flex  bg-[#E2EFF6] justify-between pl-80 w-full">
                <button className="bg-inherit text-[#79767D]">Sell on SONNY</button>
                <DropdownButton title={"Help"}></DropdownButton>
                <button className="bg-inherit text-[#79767D]">Buyer Protection</button>
                <button className="bg-inherit text-[#79767D] flex self-center gap-2">
                    <img src={app}></img>
                    App
                </button>
                <DropdownButton title={"/English/US"}></DropdownButton>

                <button className="bg-inherit text-[#79767D] flex self-center gap-2">
                    <img src={heart}></img>
                    Wish List
                </button>
                <button className="bg-inherit text-[#79767D] flex items-center">
                <img src={account}></img>
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
            </div>
        </div>
    )
}