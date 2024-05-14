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
    link: "/#",
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
      <div className="flex flex-col  bg-white w-full  ">
        <div className="grid grid-cols-4 gap-10 w-full px-[500px] mt-20">
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
        <div className="flex justify-center mb-10 ">
          <div
            id="help-center-search-bar"
            className="my-5 flex items-center w-[25%]"
          >
            <div className="border-black border rounded-md p-2  md:w-[100%] w-[400px] rounded-tr-none rounded-br-none relative ">
              <input
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Email"
                className="outline-none bg-transparent placeholder-black w-full"
              />
            </div>
            
           
            <div className="flex items-center pr-3 bg-[#EEC643] h-[45px] w-[109px] rounded-md p-4 rounded-tl-none rounded-bl-none ">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 px-[450px] bg-[#1D1B20] text-white w-full  ">
        <div className="flex flex-row gap-5 justify-center items-center">
          {footerSection.map((item, index) => (
            <div key={index} className="p-6">
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center ">
          <p>
            <span class="">&#169;</span> 1998-2023, Yorkshoppers.com, Inc, or
            its affiliates
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-9 p-5">
          <a
            href="https://www.facebook.com/profile.php?id=61558045981585"
            target="_blank"
          >
            <img src={facebook}></img>
          </a>

          <a
            href="https://www.instagram.com/shop_online_new_york/"
            target="_blank"
          >
            <img src={instagram}></img>
          </a>

          <a
            href="https://www.linkedin.com/company/tonyllc/mycompany/"
            target="_blank"
          >
            <img src={linkedin}></img>
          </a>

          <a
            href="https://twitter.com/shoponlineny"
            target="_blank"
          >
            <img src={twitter}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default SellerFooter;
