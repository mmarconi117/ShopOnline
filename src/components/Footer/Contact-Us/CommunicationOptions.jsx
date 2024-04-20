import phoneImg from "../../../assets/IMAGES/Footer/Contact-Us/Phone/Rectangle-1.jpeg";
import emailImg from "../../../assets/IMAGES/Footer/Contact-Us/Email/Rectangle-1.jpeg";
import Emailicon from "../../../assets/ICONS/sellersicons/email.svg";
import Chaticon from "../../../assets/ICONS/MessageIcon.svg";
import Phoneicon from "../../../assets/ICONS/Phone.svg";

import { useSelector, useDispatch } from "react-redux";

import { toggleEmailModal } from "../../../reducersAndActions/actions/emailModalAction";
import EmailModal from "../EmailModal/EmailModal";
const CommunicationOptions = () => {
  const displayEmailModal = useSelector(
    (state) => state.emailModalReducer.displayEmailModal
  );

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleEmailModal(!displayEmailModal));
  };

  return (
    <div>
      <div
        id="communication-options"
        className=" hidden my-5 p-10 sm:flex flex-col gap-10 items-center justify-center"
      >
        {displayEmailModal && <EmailModal />}
        <div
          id="call-us-container"
          className="flex max-[515px]:flex-col max-[515px]:h-auto h-32 md:h-48 w-full justify-end gap-10 md:gap-48 items-center border-0 bg-white"
        >
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className=" text-blue-800 font-semibold max-[515px]:p-2">
                Call US
              </p>
            </div>

            <div className="max-[515px]:p-2">
              <p className="mb-2">Give us a call: 1-800-123-4567</p>
              <p>Monday - Friday 6am - 5pm PST</p>
              <p>Saturday - Sunday 8am - 2pm PST</p>
            </div>
          </div>
          <div className="max-[515px]:w-full">
            <img
              src={phoneImg}
              alt="phone line image"
              className="md:h-48 h-32 w-32 md:w-48 object-cover max-[515px]:w-full"
            />
          </div>
        </div>
        <div
          id="email-us-container"
          className="flex max-[515px]:flex-col max-[515px]:h-auto h-32 md:h-48 w-full justify-end gap-10 md:gap-48 items-center border-0 bg-white"
        >
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="text-blue-800 font-semibold max-[515px]:pt-2">
                Email
              </p>
            </div>
            <div>
              <button onClick={() => toggle()}>nyshopping@shopping.com</button>
            </div>
          </div>
          <div className="max-[515px]:w-full">
            <img
              src={emailImg}
              alt="laptop typing image"
              className="w-32 md:w-48 h-32 md:h-48 object-cover max-[515px]:w-full"
            />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className=" sm:hidden flex flex-col p-5  ">
        <div className="header text-center mb-5">
          <h5>Get in touch</h5>
          <p className="text-gray-500 font-semibold">
            Our friendly team is always here to chat.
          </p>
        </div>
        <div className="contact-options  flex flex-col gap-7">
          <div className="email flex flex-col items-center gap-2 p-2 bg-gray-200 shadow-sm">
            <img
              src={Emailicon}
              alt="email icon"
              className="w-12 h-12 bg-gray-300 rounded-full p-2"
            />
            <h2 className="font-bold">Email us</h2>
            <p className="text-gray-500 font-semibold">
              Our friendly team is here to help
            </p>
            <p className="text-blue-300 font-semibold">
              nyshopping@shopping.com
            </p>
          </div>
          <div className="chat flex flex-col items-center gap-2 p-2 bg-gray-200 shadow-sm">
            <img
              src={Chaticon}
              alt="email icon"
              className="w-12 h-12 bg-gray-300 rounded-full p-2 "
            />
            <h2 className="font-bold">Chat with us</h2>
            <p className="text-gray-500 font-semibold">Leave us a message</p>
            <p className="text-blue-300 font-semibold">100 Smith Street</p>
            <p className="text-blue-300 font-semibold">
              Collingwood VIC 3066 AU
            </p>
          </div>
          <div className="call flex flex-col items-center gap-2 p-2 bg-gray-200 shadow-sm">
            <img
              src={Phoneicon}
              alt="email icon"
              className="w-12 h-12 bg-gray-300 rounded-full p-2"
            />
            <h2 className="font-bold">Call US</h2>
            <p className="text-gray-500 font-semibold">
              Mon-Fri from 8am to 5pm
            </p>

            <p className="text-blue-300 font-semibold">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationOptions;
