
import InfoSection from "./InfoSection";
import FooterItem from "./FooterItem";
import PaymentSocial from "./PaymentSocial";
import SubscribeForm from "./SubscribeForm";
import country from "../../assets/ICONS/mobileicons/country.svg"
import currency from "../../assets/ICONS/mobileicons/currency.svg"
import globe from "../../assets/ICONS/mobileicons/globe.svg"
const Footer = () => {
  return (
    <>
      <div className="hidden px-[30px] py-[50px] items-center  flex-col border-[5px] bg-[#E2EFF6] md:flex gap-10">
        <div className="flex gap-36">
          <InfoSection title={"LET US HELP YOU"}>
            <FooterItem link={""} title={"Help Center"} />
            <FooterItem link={""} title={"Contact Us"} />
            <FooterItem link={""} title={"How to shop on York Shoppers?"} />
            <FooterItem link={""} title={"Delivery options and timelines"} />
            <FooterItem link={""} title={"How to return a Product"} />
            <FooterItem
              link={""}
              title={"Ship your package anywhere in New York"}
            />
            <FooterItem link={""} title={"Report a Product"} />
          </InfoSection>

          <InfoSection title={"ABOUT YORK SHOPPERS"}>
            <FooterItem link={""} title={"About Us"} />
            <FooterItem link={""} title={"York Shoppers’ Express"} />
            <FooterItem link={""} title={"Terms and Conditions"} />
            <FooterItem link={""} title={"Cookie Notice"} />
            <FooterItem link={""} title={"Privacy Notice"} />
            <FooterItem link={""} title={"Legal Notice"} />
            <FooterItem link={""} title={"Flash Sales"} />
          </InfoSection>

          <InfoSection title={"MAKE MONEY WITH US"}>
            <FooterItem link={""} title={"Sell on York Shoppers"} />
            <FooterItem link={""} title={"Become a Sales Consultant"} />
            <FooterItem link={""} title={"Become a Logistic Service Partner"} />
            <FooterItem link={""} title={"Delivery options and timelines"} />
            <FooterItem link={""} title={"Become an Affiliate Member"} />
          </InfoSection>

          <InfoSection title={"LET US HELP YOU"}>
            <FooterItem link={""} title={"Trade Assurance"} />
            <FooterItem link={""} title={"Business Identity"} />
            <FooterItem link={""} title={"Logistics Services"} />
            <FooterItem
              link={""}
              title={"Product Monitoring & Inspection Services"}
            />
            <FooterItem link={""} title={"Letter of Credit"} />
          </InfoSection>
        </div>
        <div className="flex gap-40">
          <PaymentSocial></PaymentSocial>
          <SubscribeForm></SubscribeForm>
        </div>

        <div className="w-full h-0 border border-neutral-400"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-[#2284B6] flex gap-5">
            <span>Condition of use</span>
            <span>Privacy Notice</span>
            <span>Your Ads Privacy Choices</span>
          </div>
          <div className="text-[#2284B6]">
            &copy; 1998 - 2023, Yorkshoppers.com, Inc, or its affiliates
          </div>
        </div>
      </div>

      <div className="hidden px-6 py-8  justify-center items-center border-[5px] bg-[#E2EFF6] max-md:flex flex-col gap-10">
        <div className="flex gap-36">
        <div className="flex flex-col gap-6">
          <FooterItem link={""} title={"Yorkshoppers.com"} />
          <FooterItem link={""} title={"Your lists"} />
          <FooterItem link={""} title={"Find a gift"} />
          <FooterItem link={""} title={"Browsing History"} />
          <FooterItem link={""} title={"Returns"} />
          <FooterItem link={""} title={"Cookie Notice"} />
          <FooterItem link={""} title={"Help Center"} />
        </div>

        <div className="flex flex-col gap-6">
          <FooterItem link={""} title={"Your orders"} />
          <FooterItem link={""} title={"Gift card & registery"} />
          <FooterItem link={""} title={"Your account"} />
          <FooterItem link={""} title={"Browsing History"} />
          <FooterItem link={""} title={"Returns"} />
          <FooterItem link={""} title={"Cookie Notice"} />
          <FooterItem link={""} title={"Help Center"} />
        </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-8">
            <span  className="flex gap-1 text-sm w-fit whitespace-nowrap"><img src={currency} alt="" />USD-U.S Dollar</span>
            <span  className="flex gap-1 text-sm w-fit whitespace-nowrap"><img src={globe} alt="" />English</span>
            <span className="flex gap-1 text-sm w-fit whitespace-nowrap"><img src={country} alt=""  />United States</span>
          </div>
          <div className="text-gray-700 text-base font-medium leading-[24px]">Already a customer? <span><button className="text-blue-500">Sign in</button></span></div>
        </div>
      <div className="w-full h-0 border border-neutral-400"></div>

        <div className="flex flex-col items-center gap-2 text-xs font-[Roboto] font-normal">
          <div className="text-[#2284B6] flex gap-5">
            <span>Condition of use</span>
            <span>Privacy Notice</span>
            <span>Your Ads Privacy Choices</span>
          </div>
          <div className="text-[#2284B6]">
            &copy; 1998 - 2023, Yorkshoppers.com, Inc, or its affiliates
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
