
import yellowchat from "../../../assets/ICONS/yellowchat.svg"
import { useDispatch, useSelector } from "react-redux";
import { setDisplayFeedbackModal } from "../../../reducersAndActions/actions/feedbackAction";
import FeedbackModal from "../FeedbackModal";

import arrowDown from "../../../assets/ICONS/ArrowDown.svg"
import { useState } from "react"



const CustomerService = () => {
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

export default CustomerService;
