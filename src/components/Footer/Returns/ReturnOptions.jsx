import delivery from "../../../assets/ICONS/delivery.svg";
import user from "../../../assets/ICONS/user/user-1.svg";
import questionIcon from "../../../assets/ICONS/Question.svg";
import exchange from "../../../assets/ICONS/Exchange.svg";

const ReturnOptions = () => {
  const items = [
    {
      title: "Returns",
      icon: delivery,
      description:
        "Items purchased on our e-commerce website can be returned within 30 days from the shipping date by mail, with refunds processed back to your original payment method.",
    },
    {
      title: "Exchange",
      icon: exchange,
      description:
        "If you've received a product that doesn't quite meet your expectations, exchange any product purchased on our website within 30 days from the shipping date – because your satisfaction matters.",
    },
    {
      title: "Returns FAQs",
      icon: questionIcon,
      description:
        "Got any questions about returns?  Find quick answers to the most common queries regarding returns and exchanges on our website. Explore our user-friendly FAQs for swift solutions to return inquiries.",
    },
    {
      title: "Contact us",
      icon: user,
      description:
        "Facing issues with returns or refunds? Reach out via email, phone, or chat for personalized assistance and prompt problem resolution. We are here to help you!",
    },
  ];
  const returnsDescription = items.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-2 border  rounded relative items-center w-[45%] lg:w-[25%] bg-white mb-6"
      >
        <div>
          <img className="w-8 h-8 pt-3" src={item.icon} />
        </div>
        <div>
          <p className="text-center px-2 mb-10">{item.description}</p>
        </div>
        <div className="bg-[#F5F5F9] text-center w-full absolute bottom-0 py-2 ">
          <p className="font-bold">{item.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div id="return-options-component">
      <div className="flex flex-wrap lg:flex-nowrap py-5 lg:py-10 px-2 lg:px-6 justify-center gap-2 md:gap-5  text-gray-900">
        {returnsDescription}
      </div>
    </div>
  );
};

export default ReturnOptions;
