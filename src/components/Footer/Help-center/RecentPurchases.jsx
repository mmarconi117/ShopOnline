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

  const defaultView = (
    <div id="recent-purchases" className="my-5 flex justify-center items-center  gap-5">
      {purchases.map((item, index) => (
        <div
          key={index}
          className="bg-white px-10 text-left relative py-20 flex flex-col items-center w-full md:w-1/2"
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
              className="bg-white px-10 text-left relative py-20 flex flex-col items-center w-full md:w-1/2 rounded-xl"
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
    <>
      <p className="pl-10 text-[22px] mb-[-20px] text-[#243292] font-semibold">Do you want help with your recent purchase?</p>
      <div className="hidden md:flex mt-[-5] p-10">{defaultView}</div>
      <div className="md:hidden p-10">{mobileView}</div>
    </>
  );
};

export default RecentPurchases;
