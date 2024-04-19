import img from "../../../assets/IMAGES/Recent-purchases/Rectangle-1.svg";
import img2 from "../../../assets/IMAGES/Recent-purchases/Rectangle-2.jpeg";
import img3 from "../../../assets/IMAGES/Recent-purchases/Rectangle-3.jpeg";
import img4 from "../../../assets/IMAGES/Recent-purchases/Rectangle-4.jpeg";

const RecentPurchases = () => {
  const purchases = [
    {
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 120,
      purchasedDate: "Jan 25 2024",
      img: img,
    },
    {
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 120,
      purchasedDate: "Jan 25 2024",
      img: img2,
    },
    {
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 120,
      purchasedDate: "Jan 25 2024",
      img: img3,
    },
    {
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 120,
      purchasedDate: "Jan 25 2024",
      img: img4,
    },
  ];
  const recentPurchases = purchases.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-white px-10 text-left relative py-20 flex flex-col items-center"
      >
        <div className="mb-4">
          <img
            src={item.img}
            alt="last purchased item"
            className="inset-0  md:w-[213px] w-full h-[300px]"
          />
        </div>
        <div className="  ">
          <div className="">
            <p>{item.description}</p>
          </div>

          <br />

          <div>
            <p>
              from <span className="text-blue-800 font-bold text-[24px]">${item.cost}</span>
            </p>
          </div>
          <br />
          <div>
            <span className="font-bold">Last Purchased on {item.purchasedDate}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      id="recent-purchases"
      className="my-5 flex justify-center items-center"
    >
      <div className="flex gap-5 p-10">{recentPurchases}</div>
    </div>
  );
};

export default RecentPurchases;
