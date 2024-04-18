import callUsImg from '../../../assets/IMAGES/Footer/Call-us/Rectangle-1.jpeg';
import emailUs from '../../../assets/IMAGES/Footer/email-us/Rectangle-1.jpeg';
import phoneIcon from '../../../assets/ICONS/Phone.svg';
import messageImage from '../../../assets/ICONS/MessageUs.svg';
import emailIcon from '../../../assets/ICONS/Email.svg';
import messageIcon from '../../../assets/ICONS/MessageIcon.svg';
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
        {
            description: 'Message us',
            icon: messageIcon,
            img: messageImage,
        },
    ];

    const toggle = () => {
        dispatch(toggleEmailModal(!displayEmailModal));
    };

    const commOptions = items.map((item, index) => {
        return (
            <div key={index} className="option-container flex flex-col items-center space-y-4 p-10">
                <div className="bg-[#e9f0f5] p-16 rounded-lg">
                    <img
                        src={item.img}
                        className="w-80 h-60"
                        alt={item.description}
                    />
                </div>
                <div className="flex items-center justify-center bg-white px-10 py-3 rounded-lg shadow-lg">
                    <img
                        className="w-6 h-6 mr-2"
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
            <div className="p-4">
            <p className="text-4xl font-bold" style={{ color: 'rgb(0, 26, 255)' }}>Need Help? We are here for you.</p>
            </div>
            {displayEmailModal && <EmailModal />}
            <div className='flex justify-center space-x-4'>{commOptions}</div>
        </div>
    );
};

export default CommunicationOptions;
