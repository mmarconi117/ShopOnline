import img from '../../../assets/IMAGES/Recent-purchases/Rectangle-1.jpeg';
import img2 from '../../../assets/IMAGES/Recent-purchases/Rectangle-2.jpeg';
import img3 from '../../../assets/IMAGES/Recent-purchases/Rectangle-3.jpeg';
import img4 from '../../../assets/IMAGES/Recent-purchases/Rectangle-4.jpeg';

const RecentPurchases = () => {
    const purchases = [
        {
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 120,
            purchasedDate: 'Jan 25 2024',
            img: img,
        },
        {
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 120,
            purchasedDate: 'Jan 25 2024',
            img: img2,
        },
        {
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 120,
            purchasedDate: 'Jan 25 2024',
            img: img3,
        },
        {
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 120,
            purchasedDate: 'Jan 25 2024',
            img: img4,
        },
    ];
    const recentPurchases = purchases.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <img src={item.img} alt="last purchased item" />
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>from</p>
                    <p>${item.cost}</p>
                </div>
                <div>
                    <span>Last Purchased on {item.purchasedDate}</span>
                </div>
            </div>
        );
    });
    return (
        <div id="recent-purchases" className="my-5">
            <div>
                <p>Do you want help with your recent purchase?</p>
            </div>
            <div>{recentPurchases}</div>
        </div>
    );
};

export default RecentPurchases;
