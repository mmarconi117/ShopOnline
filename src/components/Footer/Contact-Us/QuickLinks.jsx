import rightArrow from "../../../assets/ICONS/RightArrow.svg";
import LocationIcon from "../../../assets/ICONS/location-marker.svg";

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
        className="flex border-0 max-[500px]:h-28 w-28 md:w-48 lg:w-64 h-32 justify-center items-center gap-2 bg-gray-100 shadow-md"
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
          <img src={item.icon} className="hidden sm:block " />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white">
      <div
        id="quick-links-component"
        className="p-5 sm:p-10 flex flex-col gap-10"
      >
        <div>
          <div>
            <p className="text-blue-900 font-bold"> Quick Links!</p>
          </div>
          <div>
            <p className="text-blue-900 font-medium hidden sm:block">
              {" "}
              Please check out our help page & FAQ's
            </p>
          </div>
        </div>
        <div className="flex justify-between max-[500px]:text-xs max-[515px]:gap-4">
          {options}
        </div>
        {/* Location information for mobile design  */}

        <div className=" sm:hidden flex py-5 px-2  items-center gap-5  bg-gray-100 shadow-md ">
          <div className="ml-3">
            <img
              src={LocationIcon}
              alt="email icon"
              className="w-12 h-12 bg-gray-300 border rounded-full p-2"
            />
          </div>
          <div>
            <h1 className="font-bold text-sm">Newyork</h1>
            <p className="text-gray-500 text-sm">
              100 Flinders Street, New York VIC 3000 US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
