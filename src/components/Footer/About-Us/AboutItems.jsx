import img from '../../../assets/IMAGES/Footer/About-Us/Rectangle-1.jpeg';
import img2 from '../../../assets/IMAGES/Footer/About-Us/Rectangle-2.jpeg';
import img3 from '../../../assets/IMAGES/Footer/About-Us/Rectangle-3.jpeg';

const AboutItems = () => {
    const items = [
        {
            title: 'Founding Story',
            description:
                'A founder’s story is the story of the origins of the brand. It tells the tale of the originator of the brand and his or her journey in bringing it to life as a product or service and then sharing it with the public. The most famous founder’s stories are iconic. People know these stories well and through generations: Famous Amos and his aunt’s recipe for cookies with chocolate chips and pecans, Colonel Sanders and his secret recipe for fried chicken that birthed Kentucky Fried Chicken (now KFC), Ben & Jerry and their signature ice creams made in funky flavors in Vermont. A founder’s story is the story of the origins of the brand. It tells the tale of the originator of the brand and his or her journey in bringing it to life as a product or service and then sharing it with the public. The most famous founder’s stories are iconic. People know these stories well and through generations: Famous Amos and his aunt’s recipe for cookies with chocolate chips and pecans, Colonel Sanders and his secret recipe for fried chicken that birthed Kentucky Fried Chicken (now KFC), Ben & Jerry and their signature ice creams made in funky flavors in Vermont.',
            img: img,
        },
        {
            title: 'Investors',
            description:
                'An investor is an individual that puts money into an entity such as a business for a financial return. The main goal of any investor is to minimize risk and maximize return. It is in contrast with a speculator who is willing to invest in a risky asset with the hopes of getting a higher profit. There are many types of investors out there. Some invest in startups hoping that the company will grow and prosper; they are also referred to as venture capitalists. In addition, there are those who put their money into a business in exchange for part ownership in the company. Some also invest in the stock market in return for dividend payments. An investor is an individual that puts money into an entity such as a business for a financial return. The main goal of any investor is to minimize risk and maximize return. It is in contrast with a speculator who is willing to invest in a risky asset with the hopes of getting a higher profit. There are many types of investors out there. Some invest in startups hoping that the company will grow and prosper; they are also referred to as venture capitalists. In addition, there are those who put their money into a business in exchange for part ownership in the company. Some also invest in the stock market in return for dividend payments.',
            img: img2,
        },
        {
            title: 'Founder & CEO',
            description:
                'An investor is an individual that puts money into an entity such as a business for a financial return. The main goal of any investor is to minimize risk and maximize return. It is in contrast with a speculator who is willing to invest in a risky asset with the hopes of getting a higher profit. There are many types of investors out there. Some invest in startups hoping that the company will grow and prosper; they are also referred to as venture capitalists. In addition, there are those who put their money into a business in exchange for part ownership in the company. Some also invest in the stock market in return for dividend payments. An investor is an individual that puts money into an entity such as a business for a financial return. The main goal of any investor is to minimize risk and maximize return. It is in contrast with a speculator who is willing to invest in a risky asset with the hopes of getting a higher profit. There are many types of investors out there. Some invest in startups hoping that the company will grow and prosper; they are also referred to as venture capitalists. In addition, there are those who put their money into a business in exchange for part ownership in the company. Some also invest in the stock market in return for dividend payments.',
            img: img3,
        },
    ];

    const sections = items.map((item, index) => {
        return (
            <div className="flex" key={index}>
                <div>
                    <img src={item.img} alt={item.title} />
                </div>
                <div>
                    <div>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="about-items-section" className="my-10">
            <div>{sections}</div>
        </div>
    );
};

export default AboutItems;
