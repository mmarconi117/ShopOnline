
import LOGO from "../../assets/ICONS/Outline/LOGO.png";
import search from "../../assets/ICONS/Outline/search.svg";
import Nav from "./Nav";
import Menu from '../Menu/Menu'
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header({menuIsOpened, setMenuIsOpened}) {
  const isAuthenticated = useSelector((state) => state.buyersLoginFormReducer.isAuthenticated)
  const usersData = useSelector((state) => state.buyersLoginFormReducer.usersData)


  return (
    <>
    <div >
      <Nav />
      <div className="flex items-center justify-center gap-6 my-5 px-5">
        <img src={LOGO} className="hidden lg:flex"></img>
        <div className="w-[352px] bg-white h-10 min-[390px]:h-12 rounded border border-[#012e72] justify-between items-center inline-flex">
          <input
            type="text"
            placeholder="Search Items"
            className=" text-xl font-normal px-2 font-Roboto outline-none leading-normal w-full h-full"
          />
          <div className="w-10 self-stretch p-2.5 bg-[#fe560d] rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-1.5 flex">
            <img src={search} className="flex w-fit h-fit bg-[012e72]" />
            
          </div>
        </div>
          <Link to='/cart' className="mx-5" style={{ textDecoration: 'none' }}>
            <PiShoppingCartDuotone className="w-12 h-12 text-[#001c43]" />
          </Link>
          <div className="hidden sm:flex">
            {isAuthenticated && usersData && usersData.name ? <p className="font-bold text-[#001c43]">Welcome, {usersData.name}</p> : null}
            
          </div>
      </div>
      {/* <p className="flex items-center justify-center">
        Take the good times on the go, get the&nbsp;
        <Link to='/app'><button className="text-orange-500 text-2xl font-500">APP&nbsp;</button></Link>{" "}
        now!!!
      </p> */}
    </div>
    <Menu />
    </>
  );
}