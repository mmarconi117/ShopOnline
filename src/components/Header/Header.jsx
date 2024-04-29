import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../assets/ICONS/Outline/LOGO.png";
import searchIcon from "../../assets/ICONS/Outline/search.svg";
import Nav from "./Nav";
import Menu from '../Menu/Menu';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { setSearchQuery } from '../../reducersAndActions/actions/searchAction';
//import axios from 'axios' //Add this when connected to backend
//import { useEffect } from 'react';
import Modal from './Modal';

const Header = ({ menuIsOpened, setMenuIsOpened }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cartReducer.carts);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
   // const [routeNames, setRouteNames] = useState([]);
   

    //Replace to this when connected to backend.
    /* useEffect(() => {
     const fetchRouteNames = async () => {
         try {
             const response = await axios.get('https://localhost:8000/api/products');
             setRouteNames(response.data.routeNames);
         } catch (error) {
             console.error('Failed to fetch route names: ', error);
         }
     };

     fetchRouteNames();
 }, []); 
 */

    // Simulated route names. Remove when connected to backend
    const routeNames = ['mensFashion', 'womensFashion', 'electronics', 'home', 'cart', 'checkout', "computersAndOffice", "phonesAndAccessories", "jewelryAndWatches" + 
        "furniture ", "bagsAndShoes", "kidsAndToys", "toolsAndHomeImprovement", "automotive", "digitalMedia", "outdoorsAndSports", "homePetsAndAppliances", "help" ];

    const totalItemsInCart = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(search));

        // Check if the search term matches or partially matches any route names
        const matchedRoute = routeNames.find(route => route.toLowerCase().includes(search.toLowerCase()));
        if (matchedRoute) {
            navigate(`/${matchedRoute}`); // Redirect to the matched route
        } else {
            // Handle no match found: stay on the current page or show a search result message
            setShowModal(true); //Show modal if no results are found
        }
    };
    const menuHandler = () => {
        setMenuIsOpen(false)
    }
    return (
        <>
            <div onClick={menuHandler}>
                <Nav />
                <div className="flex items-center justify-center gap-6 my-5 px-5">
                    <img src={LOGO} alt="Logo" className="hidden lg:flex" />
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
                        {totalItemsInCart > -1 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} content="No products found." />
            <Menu menuIsOpen={menuIsOpen} handler={setMenuIsOpen}/>
        </>
    );
};

export default Header;