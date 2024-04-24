import callUsImg from "../../../assets/IMAGES/Footer/Call-us/Rectangle-1.svg";
import emailUs from "../../../assets/IMAGES/Footer/email-us/Rectangle-1.svg";
import phoneIcon from "../../../assets/ICONS/Phone.svg";
import messageImage from "../../../assets/ICONS/MessageUs.svg";
import emailIcon from "../../../assets/ICONS/Email.svg";
import messageIcon from "../../../assets/ICONS/MessageIcon.svg";
import EmailModal from "../EmailModal/EmailModal";

import { useSelector, useDispatch } from "react-redux";

import { toggleEmailModal } from "../../../reducersAndActions/actions/emailModalAction";

const CommunicationOptions = () => {
  const displayEmailModal = useSelector(
    (state) => state.emailModalReducer.displayEmailModal
  );

  const dispatch = useDispatch();

  const items = [
    {
      description: "Call Us",
      icon: phoneIcon,
      img: callUsImg,
    },
    {
      description: "Email",
      icon: emailIcon,
      img: emailUs,
    },
    {
      description: "Message us",
      icon: messageIcon,
      img: messageImage,
    },
  ];

  const toggle = () => {
    dispatch(toggleEmailModal(!displayEmailModal));
  };

  const commOptions = items.map((item, index) => {
    return (
      <div
        key={index}
        className="option-container flex flex-col w-full items-center max-w-[25vw] "
      >
        <div className="bg-[#e9f0f5] rounded-lg w-full mx-4 gap-6 aspect-square flex-col px-10  hidden md:flex items-center justify-center p-10  md:m-10">
          <img
            src={item.img}
            width={260}
            height={172}
            className=" w-[172px] h-[172px] "
            alt={item.description}
          />
          <div className="hidden w-[172px] md:flex aspect-square  md:aspect-auto items-center justify-center bg-white px-2 py-2 shadow-lg  rounded-lg  md:flex-row md:items-start md:justify-center md:py-1  lg:flex-row lg:items-start lg:justify-center lg:py-1 ">
            <img
              className="w-6 h-6 mr-3  md:mb-3"
              src={item.icon}
              alt={item.description}
            />
            <button onClick={() => toggle()}>{item.description}</button>
          </div>
        </div>
        <div className="flex aspect-square md:hidden  w-full md:aspect-auto items-center justify-center bg-white px-8 py-8 shadow-lg  rounded-lg  md:flex-row md:items-start md:justify-center md:py-3  ">
          <img
            className="w-6 h-6 mr-3  md:mb-3"
            src={item.icon}
            alt={item.description}
          />
          <button onClick={() => toggle()}>{item.description}</button>
        </div>
      </div>
    );
  });

  return (
    <div
      id="help-center-comunnication-options"
      className="px-12 w-full flex justify-center items-start flex-col mb-10 "
    >
      <p className="font-bold text-blue-700 text-[24px] mb-10">
        Need Help? We are here for you.
      </p>
      {displayEmailModal && <EmailModal />}
      <div className="grid grid-cols-3 gap-10 w-full  justify-center items-center md:gap-16 ">
        {commOptions}
      </div>
    </div>
  );
};

export default CommunicationOptions;
