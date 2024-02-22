import Footer from "../../components/Footer/Footer";
import yellowchat from "../../assets/ICONS/yellowchat.svg"
import notify from "../../assets/ICONS/notify.svg"
import myaccout from "../../assets/ICONS/myaccout.svg"
import order from "../../assets/ICONS/order.svg"
import Payonline from "../../assets/ICONS/Payonline.svg"
import pending from "../../assets/ICONS/pending.svg"
import voucher from "../../assets/ICONS/voucher.svg"
import saved from "../../assets/ICONS/voucher.svg"
import Recently from "../../assets/ICONS/Recently.svg"
import logoutred from "../../assets/ICONS/logoutred.svg"
import { useDispatch, useSelector } from "react-redux";
import { setDisplayFeedbackModal } from "../../reducersAndActions/actions/feedbackAction";
import FeedbackModal from "./FeedbackModal";

import arrowDown from "../../assets/ICONS/ArrowDown.svg"
import { useState } from "react"



const Help = () => {
  const dispatch = useDispatch();
  const { displayFeedbackModal } = useSelector(
    (state) => state.feedbackReducer
  );
  const handleFeedback = () => {
    dispatch(setDisplayFeedbackModal(true));
  };
  const [dropDown, setDropDown] = useState(false)
  const showMenu = () => {
    setDropDown((prev) => !prev)
  }
  return (
    <div className={`relative min-h-max w-full p-6 pt-9 sm:p-12 sm:pt-[72px]`}>
      {displayFeedbackModal && <FeedbackModal />}
      <div className="hidden lg:block absolute w-[68px] right-0 bottom-[10px] lg:bottom-[50%]">
        <img src={yellowchat} alt="chat-icon" className="object-contain shrink-0"/>
      </div>
      <div className="gap-5 flex flex-col lg:flex-row items-stretch lg:justify-center lg:items-start">
        <div className={`flex lg:hidden justify-between items-center bg-white px-8 py-5 ${dropDown ? "mb-[-20px]" : ""} grow-0`}>
          <div>Menu</div>
          <div onClick={showMenu}><img src={arrowDown} alt="arrow icon" /></div>
        </div>
        {/* Sidebar/ Dropdown Menu */}
        <div className={`${dropDown ? "max-lg:flex" : "max-lg:hidden"} flex bg-white flex-col gap-5 items-stretch min-h-max min-w-max w-full lg:w-[340px] px-8 pt-5 pb-9 grow-0`}>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={myaccout} alt=""
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">My account</a>
              </div>
          </div>
          <div className="hidden lg:block w-full h-[0.5px] bg-gray-400"/>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={order} alt="order-icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Orders</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={Payonline} alt="payment-icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Payments</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={pending} alt="reviews-icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Pending Reviews</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={voucher} alt="voucher-icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Voucher</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={saved} alt="saved-items icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Saved Items</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={Recently} alt="recently-viewed icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Recently Viewed</a>
              </div>
          </div>
          <div className="flex items-stretch justify-start gap-4">
              <img
                src={notify} alt="notification icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="/account">Notifications</a>
              </div>
          </div>
          <div className="hidden lg:block w-full h-[0.5px] bg-gray-400"/>

          <div className="text-zinc-800 text-base font-medium leading-6">
            <a href="">Account Management</a>
          </div>
          <div className="text-zinc-800 text-base font-medium leading-6">
            <a href="">Edit Shipping address</a>
          </div>
          <div className="text-zinc-800 text-base font-medium leading-6">
            <a href="">Digital service and device Support</a>
          </div>
          <div className="text-zinc-800 text-base font-medium leading-6">
            <a href="">Customer Service</a>
          </div>
          <div className="hidden lg:block w-full h-[0.5px] bg-gray-400"/>
          <div className="justify-between items-stretch flex gap-3.5 mx-auto">
            <img src={logoutred} alt="logout icon" />
            <div className="text-red-400 text-base font-medium leading-6">LOGOUT</div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col items-stretch lg:w-full grow gap-7">
          <div className="bg-white flex flex-col justify-center items-center px-16 py-8 gap-7">
            <div className="text-neutral-800 text-center text-lg sm:text-2xl leading-8 whitespace-nowrap">
              Need help? Let us help you!
            </div>
            <div className="flex flex-col items-stretch">
              <div className="text-neutral-800 text-center text-base sm:text-2xl leading-8 self-stretch whitespace-nowrap">
                Give us a call: 1-800-123-4567
              </div>
              <div className="text-neutral-800 text-center text-base sm:text-2xl leading-8 max-md:max-w-full">
                Email us: nyshopping@shopping.com
              </div>
              <div className="text-neutral-800 text-center text-base sm:text-2xl leading-8 self-center whitespace-nowrap">
              Monday - Friday 6am - 5pm PST
              </div>
              <div className="text-neutral-800 text-center text-base sm:text-2xl leading-8 self-center whitespace-nowrap">
              Saturday - Sunday 8am - 2pm PST
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 font-Roboto text-zinc-800 max-w-[1000px] lg:pr-[72px]">
            <div className="text-xl lg:text-2xl 2xl:text-4xl font-medium leading-10">See frequently asked question on popular Topics</div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Account</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Payments & Refunds</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Orders, Shipping & Tracking</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Product</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Returns & Exchanges</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="pr-8">Frequently asked question on Marketing Inquiries</div>
                <div className=" min-w-4">
                  <img src={arrowDown} alt="arrow-icon"  className="object-contain"/>
                </div>
              </div>
            </div>
            <button
              onClick={handleFeedback}
              className="text-cyan-600 text-center text-xl leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Color-Styles-Primary-color-blue-T1000,#2284B6)] self-center mt-28 px-12 py-4 rounded-md border-solid max-md:mt-10 max-md:px-5"
            >
              Give us feedback
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Help;
