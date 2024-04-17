import phoneImg from "../../../assets/IMAGES/Footer/Contact-Us/Phone/Rectangle-1.jpeg";
import emailImg from "../../../assets/IMAGES/Footer/Contact-Us/Email/Rectangle-1.jpeg";

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
    <div
      id="communication-options"
      className="my-5 p-10 flex flex-col gap-10 items-center justify-center"
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
  );
};

export default CommunicationOptions;
