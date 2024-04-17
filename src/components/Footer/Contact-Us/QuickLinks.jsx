import rightArrow from "../../../assets/ICONS/RightArrow.svg";

const QuickLinks = () => {
  const items = [
    {
      name: "Track Order",
      icon: rightArrow,
      link: "/orders",
    },
    {
      name: "Help Page",
      icon: rightArrow,
      link: "/help-center",
    },
    {
      name: "FAQ's",
      icon: rightArrow,
      link: "/faqs",
    },
  ];

  const options = items.map((item, index) => {
    return (
      <div
        className="flex border-0 w-28 md:w-48 lg:w-64 h-32 justify-center items-center gap-2 bg-gray-100 shadow-md max-[515px]:w-[90%]"
        key={index}
      >
        <div>
          <a
            href={item.link}
            className="font-bold text-blue-900 hover:text-blue-500"
          >
            {item.name}
          </a>
        </div>
        <div>
          <img src={item.icon} />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white">
      <div id="quick-links-component" className="my-5 p-10">
        <div className="mb-4">
          <div>
            <p className="text-blue-900 font-bold"> Quick Links!</p>
          </div>
          <div>
            <p className="text-blue-900 font-medium">
              {" "}
              Please check out our help page & FAQ's
            </p>
          </div>
        </div>
        <div className="flex justify-between max-[500px]:flex-col max-[515px]:gap-4 max-[515px]:items-center">
          {options}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
