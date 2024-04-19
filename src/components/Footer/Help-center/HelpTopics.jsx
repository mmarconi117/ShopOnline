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
            <a href={item.url} key={index} className="text-blue-700 font-bold p-5 m-5 border border-gray-300 bg-white flex justify-center items-center h-full w-full">
                {item.name}
            </a>
        );
    });
    return (
        <div id="help-center" className="my-5 text-center">
            <div>
                <p className="text-blue-700 font-bold text-[24px]">Suggested Help Topics</p>
            </div>
            <div className="topics-container">
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-10 p-10 text-[20px]">
                    {topics}
                    <div className="mt-5 flex justify-center items-center border border-gray-300 bg-white text-blue-700 font-bold  p-10 h-full w-full">
                        <p>More </p>
                        <img className="w-6 h-4 ml-2" src={rightArrow} alt="Right Arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpTopics;
