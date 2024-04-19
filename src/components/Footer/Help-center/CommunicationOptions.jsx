import callUsImg from '../../../assets/IMAGES/Footer/Call-us/Rectangle-1.jpeg';
import emailUs from '../../../assets/IMAGES/Footer/email-us/Rectangle-1.jpeg';
import phoneIcon from '../../../assets/ICONS/Phone.svg';
import emailIcon from '../../../assets/ICONS/Email.svg';
import EmailModal from '../EmailModal/EmailModal';

import { useSelector, useDispatch } from 'react-redux';

import { toggleEmailModal } from '../../../reducersAndActions/actions/emailModalAction';

const CommunicationOptions = () => {
    const displayEmailModal = useSelector(
        (state) => state.emailModalReducer.displayEmailModal,
    );

    const dispatch = useDispatch();

    const items = [
        {
            description: 'Call Us',
            icon: phoneIcon,
            img: callUsImg,
        },
        {
            description: 'Email',
            icon: emailIcon,
            img: emailUs,
        },
    ];

    const toggle = () => {
        dispatch(toggleEmailModal(!displayEmailModal));
    };

    const commOptions = items.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <img
                        src={item.img}
                        className="w-80 h-60"
                        alt={item.description}
                    />
                </div>
                <div className="flex my-5">
                    <img
                        className="w-6 h-6"
                        src={item.icon}
                        alt={item.description}
                    />
                    <button onClick={() => toggle()}>{item.description}</button>
                </div>
            </div>
        );
    });

    return (
        <div id="help-center-comunnication-options">
            <div>
                <p>Need Help? We are here for you.</p>
            </div>
            {displayEmailModal && <EmailModal />}
            <div>{commOptions}</div>
        </div>
    );
};

export default CommunicationOptions;