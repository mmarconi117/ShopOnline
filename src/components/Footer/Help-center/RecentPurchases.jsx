import img from '../../../assets/IMAGES/Recent-purchases/Rectangle-1.jpeg';
import img2 from '../../../assets/IMAGES/Recent-purchases/Rectangle-2.jpeg';
import img3 from '../../../assets/IMAGES/Recent-purchases/Rectangle-3.jpeg';
import img4 from '../../../assets/IMAGES/Recent-purchases/Rectangle-4.jpeg';
import './RecentPurchases.css'; 

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
            <div key={index} className="purchase-item">
                <div className="image-container">
                    <div  className='relative min-h-[400px] flex items-center justify-center w-full'>
                    <img src={item.img} alt="last purchased item" width={400} height={600} className="inset-0 absolute md:w-[213px] w-[350px] h-[500px] "/>
                    </div>
                    
                    <div className="text-container mt-10">
                        <p>{item.description}</p>
                        <br />
                        <p>
                            from <span className="cost">${item.cost}</span>
                        </p>
                        <br />
                        <span className='font-bold'>Last Purchased on {item.purchasedDate}</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="recent-purchases" className="my-5 p-10">
           
                <p className="help-text ">
                    Do you want help with your recent purchase?
                </p>
            
            <div className="image-row mt-9">{recentPurchases}</div>
        </div>
    );
};

export default RecentPurchases;
