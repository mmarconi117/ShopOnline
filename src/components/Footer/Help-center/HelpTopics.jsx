import rightArrow from '../../../assets/ICONS/RightArrowLine.svg';

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
            <a href={item.url} key={index}>
                {item.name}
            </a>
        );
    });
    return (
        <div id="help-center" className="my-5">
            <div>
                <p>Suggested Help Topics</p>
            </div>
            <div>
                <div>{topics}</div>
                <div>
                    <p>More </p>
                    <img className="w-6 h-6" src={rightArrow} />
                </div>
            </div>
        </div>
    );
};

export default HelpTopics;