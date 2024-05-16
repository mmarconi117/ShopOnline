import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../../reducersAndActions/actions/helpCenterAction";
import facebook from "../../../assets/ICONS/facebook.svg";
import instagram from "../../../assets/ICONS/instagram.svg";
import linkedin from "../../../assets/ICONS/linkedin.svg";
import twitter from "../../../assets/ICONS/twitter.svg";

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
    link: "/#",
  },
  {
    title: "Policies",
    link: "/policies-component",
  },
  {
    title: "SONNY App",
    link: "/app",
  },
];

const footerSection = [
  {
    title: "Conditions of Use",
    link: "#",
  },
  {
    title: "Privacy Notice",
    link: "#",
  },
  {
    title: "Legal",
    link: "#",
  },
  {
    title: "Your Ads Privacy Choices",
    link: "#",
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
      <div className="flex flex-col bg-white w-full ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 w-full md:px-10 md:gap-10 px-4 mt-10">
          {footerSectionsData.map((item, index) => (
            <div key={index} className="text-center">
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-center mt-20">
          <p className="font-Sansita One text-[#48464C] text-[20px]">
            New to YORK SHOPPERS
          </p>
          <p className="font-Roboto text-center">
            Subscribe to our newsletter to get updates on our latest offers
          </p>
        </div>
        <div className="flex justify-center mt-8 mb-10 px-10">
          <div className="flex flex-row md:flex-row  md:w-[50%] w-full">
            <input
              value={inputValue}
              onChange={(e) => onChange(e.target.value)}
              type="text"
              placeholder="Email"
              className="border-black border rounded-md p-2 w-full md:w-[75%] outline-none"
            />
            <div className="flex items-center justify-center bg-[#EEC643] h-[45px] w-[20%] md:w-[25%] rounded-md p-2  md:px-0 px-10">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10 bg-[#1D1B20] text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {footerSection.map((item, index) => (
            <div key={index} className="p-3">
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 md:mt-6">
          <p>&#169; 1998-2023, Yorkshoppers.com, Inc, or its affiliates</p>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-6 gap-4">
          <a href="https://www.facebook.com/profile.php?id=61558045981585" target="_blank">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/shop_online_new_york/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/tonyllc/mycompany/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/shoponlineny" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SellerFooter;
