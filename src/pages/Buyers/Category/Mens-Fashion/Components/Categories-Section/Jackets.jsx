import img1 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-1.jpeg";
import img2 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-2.jpeg";
import img3 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-3.jpeg";
import img4 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-4.jpeg";
import img5 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-5.jpeg";
import img6 from "../../../../../../assets/IMAGES/Men's-category/Jackets&Coats/Rectangle-6.jpeg";

const Jackets = () => {
    const imgList = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img1,
            cost: 120
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img2,
            cost: 120
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img3,
            cost: 120
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img4,
            cost: 120
        },
        {
            id: 5,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img5,
            cost: 120
        },
        {
            id: 6,
            description: "Lorem ipsum dolor sit amet, dolor sit amet, consectetur",
            img: img6,
            cost: 120
        }
    ];

    const options = imgList.map((item, index) => {
        return (
            <div
                key={item.id}
                className="bg-white p-2 rounded-xl mr-5 hover:cursor-pointer"
            >
                <div>
                    <div className="">
                        {/* fetch image here */}
                        <img src={item.img} />
                    </div>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div className="flex">
                    <span>From</span>
                    <p>${item.cost}</p>
                </div>
            </div>
        );
    });
    return (
        <div
            id="jackets&coats"
            className="w-5/6 mx-auto my-16"
        >
            <div className="my-5">
                <p className="text-2xl font-bold">Jackets & Coats</p>
            </div>
            <div className="flex justify-between">{options}</div>
        </div>
    );
};

export default Jackets;
