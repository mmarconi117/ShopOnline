import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../../reducersAndActions/actions/helpCenterAction";
import search from "../../../assets/ICONS/SearchIcons.svg";
const footerSectionsData = [
  {
    title: "Help Center",
    link: "/help-center",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Returns",
    link: "/returns-help",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "Product safety updates",
    link: "/policies",
  },

  {
    title: "Policies",
    link: "/policies",
  },

  {
    title: "SONNY App",
    link: "/careers",
  },
];

const SellerFooter = () => {
  const inputValue = useSelector((state) => state.helpCenterReducer.inputValue);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(setInput(value));
  };
  return (
    <>
      <div className="flex flex-col justify-center  bg-white w-full p-10 ">
        <div className="grid grid-cols-4 gap-10 w-full">
          {footerSectionsData.map((item, index) => (
            <div key={index} className="">
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-center mt-20">
          <p className="font-Sansita One text-[#48464C] text-[25px]">
            new to YORK SHOPPERS
          </p>
          <p className="font-Roboto">
            {" "}
            Subscribe to our newsletter to get updates on our latest offers
          </p>
        </div>
        <div className="flex justify-center ">
          <div
            id="help-center-search-bar"
            className="my-5 flex items-center w-[25%]"
          >
            <div className="border-black border rounded-md p-2  md:w-[100%] w-[400px] rounded-tr-none rounded-br-none relative">
              <input
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Email"
                className="outline-none bg-transparent placeholder-black w-full"
              />
            </div>

            <div className="flex items-center pr-3 bg-[#EEC643] h-[45px] w-[109px] rounded-md p-4 rounded-tl-none rounded-bl-none">
              Subscribe
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5 bg-[#1D1B20]">

        </div>
      </div>
    </>
  );
};

export default SellerFooter;
