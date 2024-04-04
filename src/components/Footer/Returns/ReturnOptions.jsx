import delivery from '../../../assets/ICONS/delivery.svg';
import user from '../../../assets/ICONS/user/user-1.svg';
import questionIcon from '../../../assets/ICONS/Question.svg';
import exchange from '../../../assets/ICONS/Exchange.svg';

const ReturnOptions = () => {
    const items = [
        {
            title: 'Returns',
            icon: delivery,
            description:
                'Items purchased on our e-commerce website can be returned within 30 days from the shipping date by mail, with refunds processed back to your original payment method.',
        },
        {
            title: 'Exchange',
            icon: exchange,
            description:
                "If you've received a product that doesn't quite meet your expectations, exchange any product purchased on our website within 30 days from the shipping date – because your satisfaction matters.",
        },
        {
            title: 'Returns FAQs',
            icon: questionIcon,
            description:
                'Got any questions about returns?  Find quick answers to the most common queries regarding returns and exchanges on our website. Explore our user-friendly FAQs for swift solutions to return inquiries.',
        },
        {
            title: 'Contact us',
            icon: user,
            description:
                'Facing issues with returns or refunds? Reach out via email, phone, or chat for personalized assistance and prompt problem resolution. We are here to help you !',
        },
    ];
    const returnsDescription = items.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <img className="w-6 h-6" src={item.icon} />
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>{item.title}</p>
                </div>
            </div>
        );
    });
    return (
        <div id="return-options-component">
            <div>{returnsDescription}</div>
        </div>
    );
};

export default ReturnOptions;
