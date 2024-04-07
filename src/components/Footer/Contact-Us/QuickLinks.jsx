import rightArrow from '../../../assets/ICONS/RightArrow.svg';

const QuickLinks = () => {
    const items = [
        {
            name: 'Track Order',
            icon: rightArrow,
            link: '/orders',
        },
        {
            name: 'Help Page',
            icon: rightArrow,
            link: '/help-center',
        },
        {
            name: "FAQ's",
            icon: rightArrow,
            link: '/faqs',
        },
    ];

    const options = items.map((item, index) => {
        return (
            <div className="flex" key={index}>
                <div>
                    <a href={item.link}>{item.name}</a>
                </div>
                <div>
                    <img src={item.icon} />
                </div>
            </div>
        );
    });

    return (
        <div id="quick-links-component" className="my-5">
            <div>
                <div>
                    <p> Quick Links!</p>
                </div>
                <div>
                    <p>Please check out our help page & FAQ's</p>
                </div>
            </div>
            <div className="flex">{options}</div>
        </div>
    );
};

export default QuickLinks;
