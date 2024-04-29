import img from "../../../assets/IMAGES/Recent-purchases/Rectangle-1.svg";
import img2 from "../../../assets/IMAGES/Recent-purchases/Rectangle-2.svg";
import img3 from "../../../assets/IMAGES/Recent-purchases/Rectangle-3.svg";
import img4 from "../../../assets/IMAGES/Recent-purchases/Rectangle-4.svg";

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

  const defaultView = (
    <div id="recent-purchases" className="flex justify-center items-center gap-5">
      {purchases.map((item, index) => (
        <div
          key={index}
          className="bg-white px-10 text-left relative py-4 xl:py-20 flex flex-col items-center w-full md:w-1/2"
        >
          <div className="mb-4">
            <img
              src={item.img}
              alt="last purchased item"
              className="inset-0 md:w-[213px] w-full h-[300px]"
            />
          </div>
          <div className="  ">
            <div className="">
              <p>{item.description}</p>
            </div>
            <br />
            <div>
              <p>
                from{" "}
                <span className="text-blue-800 font-bold text-[24px]">
                  ${item.cost}
                </span>
              </p>
            </div>
            <br />
            <div>
              <span className="font-bold">
                Last Purchased on {item.purchasedDate}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const mobileView = (
    <div id="recent-purchases" className="my-5 flex justify-center items-center flex-col gap-5">
      {[...Array(Math.ceil(purchases.length / 2))].map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-5">
          {purchases.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
            <div
              key={index}
              className="bg-white md:px-10  px-8 py-5  text-left relative md:py-20 flex flex-col items-center w-full md:w-1/2 rounded-xl"
            >
              <div className="mb-4">
                <img
                  src={item.img}
                  alt="last purchased item"
                  className="inset-0 md:w-[213px] w-full h-[300px]"
                />
              </div>
              <div className="  ">
                <div className="">
                  <p>{item.description}</p>
                </div>
                <br />
                <div>
                  <p>
                    from{" "}
                    <span className="text-blue-800 font-bold text-[24px]">
                      ${item.cost}
                    </span>
                  </p>
                </div>
                <br />
                <div>
                  <span className="font-bold">
                    Last Purchased on {item.purchasedDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-4 sm:px-10 mt-20">
      <p className="text-center sm:text-left text-[22px] text-[#243292] font-semibold">Do you want help with your recent purchase?</p>
      <div className="max-md:hidden py-4">{defaultView}</div>
      <div className="md:hidden py-4 ">{mobileView}</div>
    </div>
  );
};

export default RecentPurchases;