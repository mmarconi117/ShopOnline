import { useSelector } from 'react-redux';

import ticket from '../../assets/ICONS/ticket.svg';
import logOut from '../../assets/ICONS/logoutred.svg';
import Heart from '../../assets/ICONS/Heart.svg';
import orders from '../../assets/ICONS/order.svg';
import clock from '../../assets/ICONS/clock.svg';
import document from '../../assets/ICONS/document.svg';
import notification from '../../assets/ICONS/Notification.svg';
import paymentIcon from '../../assets/ICONS/paymentIcon.svg';
import user from '../../assets/ICONS/user.png';
import leftArrow from '../../assets/ICONS/LeftArrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogoutModal from '../../pages/Buyers/Aacount/LogoutModal';


const Sidebar = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    return (
        
            <div className="w-full self-stretch lg:w-[20%] flex flex-col lg:gap-5 p-2 lg:px-8 lg:pt-5 lg:pb-[35px] min-w-max bg-white text-base font-medium">
                <div className="flex justify-between lg:justify-start items-start lg:pb-5 lg:border-b border-[#938F96] border-solid">
                    <div className="flex justify-center items-center gap-[14px]">
                        <span className="hidden lg:inline-block">
                            <img
                                src={user}
                                alt="user-icon"
                                className="w-6 h-6"
                            />
                        </span>
                        <Link to="/account">My account</Link>
                    </div>
                    <span>
                        <img
                            className="lg:hidden w-6 h-6"
                            src={leftArrow}
                            alt="user-icon"
                        />
                    </span>
                </div>
                <div className="hidden lg:flex gap-[14px] items-start">
                    <span>
                        <img src={orders} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="orders">Orders</Link>
                </div>
                
                <div className="hidden lg:flex gap-[14px] items-start">
                    <span>
                        <img src={paymentIcon} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="payments">Payments</Link>
                </div>
                <div className="hidden lg:flex gap-[14px] items-start">
                    <span>
                        <img src={document} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="pendingreviews">Pending Reviews</Link>
                </div>
                <div className="hidden lg:flex gap-[14px] items-start">
                    <span>
                        <img src={Heart} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="wishList">Wish List</Link>
                </div>
                <div className="hidden lg:flex gap-[14px] items-start">
                    <span>
                        <img src={clock} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="recentlyViewed">Recently Viewed</Link>
                </div>
                <div className="hidden lg:flex gap-[14px] items-start pb-5 border-b border-[#938F96] border-solid">
                    <span>
                        <img src={notification} alt="" className="w-6 h-6" />
                    </span>
                    <Link to="notifications">Notifications</Link>
                </div>
                <div className="hidden lg:block">
                    <Link to="accountManagement">Account Management</Link>
                </div>
                <div className="hidden lg:block">
                    <Link to="editShippingAddress">Edit Shipping address</Link>
                </div>
                <div className="hidden lg:block pb-5 border-b border-[#938F96] border-solid">
                    <Link to="customer-service">Customer Service</Link>
                </div>
                {showLogoutModal && <LogoutModal setShowLogoutModal={setShowLogoutModal}/>}
                <button 
                    className="hidden lg:flex items-start justify-center gap-[14px]"
                    onClick={() => setShowLogoutModal(true)}
                >
                        <img
                            src={logOut}
                            alt="logout icon"
                            className="w-6 h-6"
                        />
                    <div className="text-[#E46962]">LOGOUT</div>
                </button>
            </div>
    );
};

export default Sidebar;
