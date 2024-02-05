
import LOGO from "../../assets/ICONS/Outline/LOGO.png";
import search from "../../assets/ICONS/Outline/search.svg";
import Nav from "./Nav";
import Menu from '../Menu/Menu'
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <Nav />
      
      <div className="flex items-start justify-center gap-6 mt-6 mb-6">
        <img src={LOGO} className="hidden lg:flex"></img>
        <div className="w-[352px] mt-2 h-12 rounded border border-[#012e72] justify-between items-center inline-flex">
          <input
            type="text"
            placeholder="Search Items"
            className=" text-xl font-normal font-['Roboto'] leading-normal w-full h-full"
          />
          <div className="w-10 self-stretch p-2.5 bg-[#fe560d] rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-1.5 flex">
            <img src={search} className="flex w-fit h-fit bg-[012e72]" />
            
          </div>
        </div>
          <Link to='/cart' className="mx-5" style={{ textDecoration: 'none' }}>
            <PiShoppingCartDuotone className="mt-3 w-12 h-12 text-[#001c43]" />
          </Link>
      </div>
        {/* <Menu /> */}
      {/* <p className="flex items-center justify-center">
        Take the good times on the go, get the&nbsp;
        <Link to='/app'><button className="text-orange-500 text-2xl font-500">APP&nbsp;</button></Link>{" "}
        now!!!
      </p> */}
    </div>
  );
}