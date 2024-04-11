import phoneImg from '../../../assets/IMAGES/Footer/Contact-Us/Phone/Rectangle-1.jpeg';
import emailImg from '../../../assets/IMAGES/Footer/Contact-Us/Email/Rectangle-1.jpeg';

import { useSelector, useDispatch } from 'react-redux';

import { toggleEmailModal } from '../../../reducersAndActions/actions/emailModalAction';
import EmailModal from '../EmailModal/EmailModal';
const CommunicationOptions = () => {
    const displayEmailModal = useSelector(
        (state) => state.emailModalReducer.displayEmailModal,
    );

    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleEmailModal(!displayEmailModal));
    };

    return (
        <div id="communication-options" className="my-5">
            {displayEmailModal && <EmailModal />}
            <div id="call-us-container" className="flex">
                <div>
                    <div>
                        <p>Call US</p>
                    </div>

                    <div>
                        <p>Give us a call: 1-800-123-4567</p>
                        <p>Monday - Friday 6am - 5pm PST</p>
                        <p>Saturday - Sunday 8am - 2pm PST</p>
                    </div>
                </div>
                <div>
                    <img src={phoneImg} alt="phone line image" />
                </div>
            </div>
            <div id="email-us-container" className="flex">
                <div>
                    <div>
                        <p>Email</p>
                    </div>
                    <div>
                        <button onClick={() => toggle()}>
                            nyshopping@shopping.com
                        </button>
                    </div>
                </div>
                <div>
                    <img src={emailImg} alt="laptop typing image" />
                </div>
            </div>
        </div>
    );
};

export default CommunicationOptions;
