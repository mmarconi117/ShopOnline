import rightArrow from '../../../assets/ICONS/RightArrowLine.svg';
import './HelpTopics.css'; 

const HelpTopics = () => {
    const items = [
        {
            name: 'Getting Started',
            url: '',
        },
        {
            name: 'Ordering & Checkout',
            url: '',
        },
        {
            name: 'Shipping & Delivery',
            url: '',
        },
        {
            name: 'Returns & Exchanges',
            url: '',
        },
        {
            name: 'Your Account',
            url: '/account',
        },
        {
            name: 'Product Information',
            url: '',
        },
        {
            name: "FAQ'S",
            url: '',
        },
    ];

    const topics = items.map((item, index) => {
        return (
            <a href={item.url} key={index} className="topic-item">
                {item.name}
            </a>
        );
    });

    return (
        <div id="help-center" className="my-5 bg-[#BBBBBB2]">
            <div className="suggested-help-topics">
                <p className="suggested-help-text text-[32px]">Suggested Help Topics</p>
            </div>
            <div className="topics-container">
                <div className="topics-grid">
                    {topics}
                    <div className="more-topics">
                        <p>More </p>
                        <img className="arrow-icon h-[50px] w-[20px]" src={rightArrow} alt="Right Arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpTopics;
