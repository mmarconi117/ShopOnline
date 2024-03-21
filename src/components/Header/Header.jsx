import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LOGO from "../../assets/ICONS/Outline/LOGO.png";
import searchIcon from "../../assets/ICONS/Outline/search.svg";
import Nav from "./Nav";
import Menu from '../Menu/Menu';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { setSearchQuery } from '../../reducersAndActions/actions/searchAction';

const Header = ({ menuIsOpened, setMenuIsOpened }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate
    const cartItems = useSelector(state => state.cartReducer.carts);
    // Calculate the total number of items in the cart
    const totalItemsInCart = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(search));
        navigate(`/search?query=${encodeURIComponent(search)}`); // Redirect to search results
    };

    return (
        <>
            <div>
                <Nav />
                <div className="flex items-center justify-center gap-6 my-5 px-5">
                    <img src={LOGO} className="hidden lg:flex" alt="Logo"></img>
                    <form onSubmit={handleSearchSubmit} className="w-[352px] bg-white h-10 min-[390px]:h-12 rounded border border-[#012e72] justify-between items-center inline-flex">
                        <input
                            type="text"
                            placeholder="Search Items"
                            className="text-xl font-normal px-2 font-Roboto outline-none leading-normal w-full h-full"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="w-10 self-stretch p-2.5 bg-[#fe560d] rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-1.5 flex">
                            <img src={searchIcon} alt="Search" className="flex w-fit h-fit" />
                        </button>
                    </form>
                    <Link to='/cart' className="mx-5 relative" style={{ textDecoration: 'none' }}>
                        <PiShoppingCartDuotone className="w-12 h-12 text-[#001c43]" />
                        {/* Display the total number of items in the cart */}
                        {totalItemsInCart > -1 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <Menu />
        </>
    );
};

export default Header;
