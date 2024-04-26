import InfoSection from "./InfoSection";
import FooterItem from "./FooterItem";
import PaymentSocial from "./PaymentSocial";
import SubscribeForm from "./SubscribeForm";
// import country from "../../assets/ICONS/mobileicons/country.svg";
// import currency from "../../assets/ICONS/mobileicons/currency.svg";
// import globe from "../../assets/ICONS/mobileicons/globe.svg";

const footerSectionsData = [
    {
        title: "LET US HELP YOU",
        items: [
            {
                title: "Help Center",
                link: "/help-center"
            },
            {
                title: "Contact Us",
                link: "/contact-us"
            },
            {
                title: "FAQs",
                link: "/faqs"
            },
            {
                title: "Returns",
                link: "/returns-help"
            },
            {
                title: "Policies",
                link: "/policies"
            }
        ]
    },
    {
        title: "ABOUT YORK SHOPPERS",
        items: [
            {
                title: "About Us",
                link: "/about"
            },
            {
                title: "Careers",
                link: "/careers"
            },
            {
                title: "Flash Sales",
                link: "/flash-sales"
            }
        ]
    }
];

const footerSectionsDataMobile = [
    ["Your Lists", "Find a Gift", "Browsing History", "Returns", "Help Center"],
    [
        "Your Orders",
        "Gift Cards & Registry",
        "Your Account",
        "Become a seller",
        "Terms and Conditions",
        "Contact Us"
    ]
];

const Footer = () => {
  return (
      <>
          {/* Desktop Version */}
          <div className="hidden px-6 lg:px-20 pt-16 flex-col border-[5px] bg-[#001c43] sm:flex gap-2">
              <div className="flex justify-between items-start gap-6 lg:gap-10">
                  {footerSectionsData.map((section, index) => (
                      <InfoSection key={index} title={section.title}>
                          {section.items.map((item, i) => (
                              <FooterItem
                                  key={i}
                                  link={item.link}
                                  title={item.title}
                              />
                          ))}
                      </InfoSection>
                  ))}
                  <SubscribeForm />
              </div>
              <PaymentSocial />

              <div className="w-full h-0 border border-neutral-400"></div>

              <div className="flex flex-col items-center gap-2 mt-auto text-center">
                  <div className="text-[#94c4db] flex gap-5 ">
                      <span>Condition of use</span>
                      <span>Privacy Notice</span>
                      <span>Your Ads Privacy Choices</span>
                  </div>
                  <div className="text-[#94c4db]">
                      &copy; 1998 - 2024, Yorkshoppers.com, Inc, or its
                      affiliates
                  </div>
              </div>
          </div>

          {/* Mobile Version */}
          <div className="hidden px-6 py-8 justify-center items-center border-[5px] bg-[#001c43]   max-sm:flex flex-col gap-[72px]">
              <div className="flex gap-[53px]">
                  {footerSectionsDataMobile.map((section, index) => (
                      <div key={index} className="flex flex-col gap-6">
                          {section.map((item, i) => (
                              <FooterItem key={i} link={''} title={item} />
                          ))}
                      </div>
                  ))}
              </div>

              <div className="flex flex-col items-center gap-2 mt-auto text-center text-xs font-[Roboto] font-normal">
                  <div className="text-[#2284B6] flex gap-5">
                      <span>Condition of use</span>
                      <span>Privacy Notice</span>
                      <span>Your Ads Privacy Choices</span>
                  </div>
                  <div className="text-[#2284B6]">
                      &copy; 1998 - 2024, Yorkshoppers.com, Inc, or its
                      affiliates
                  </div>
              </div>
          </div>
      </>
  );
};

export default Footer;
