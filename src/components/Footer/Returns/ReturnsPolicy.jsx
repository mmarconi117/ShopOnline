const ReturnPolicy = () => {
  const items = [
    {
      title: "Eligibility for Returns:",
      sections: [
        {
          description:
            "Products must be returned within [number] days of purchase.",
        },
        {
          description:
            "The item must be in its original condition, unused, and in its original packaging.",
        },
        {
          description:
            "Products that are personalized or customized cannot be returned unless there is a manufacturing defect or an error on our part.",
        },
        {
          description:
            "Clearance and sale items are final sale and cannot be returned.",
        },
      ],
    },
    {
      title: "How to Initiate a Return:",
      sections: [
        {
          description: 'Click on the "Return Order" button on our website.',
        },
        {
          description:
            "Enter your order number and email associated with the purchase.",
        },
      ],
    },
    {
      title: "Return Shipping",
      sections: [
        {
          description:
            "Customers are responsible for the cost of return shipping, except in cases where the return is due to a manufacturing defect or an error on our part.",
        },
        {
          description:
            "We recommend using a trackable shipping method to ensure that the return is received by us",
        },
      ],
    },
    {
      title: "Refund Process:",
      sections: [
        {
          description:
            "Once we receive the returned item and inspect its condition, we will process the refund.",
        },
        {
          description:
            "Refunds will be issued to the original payment method used for the purchase.",
        },
        {
          description:
            "Please allow [number] business days for the refund to appear in your account.",
        },
      ],
    },
    {
      title: "Exchanges:",
      sections: [
        {
          description:
            "If you wish to exchange an item, please follow the return process and place a new order for the desired item.",
        },
      ],
    },
    {
      title: "Damaged or Defective Items:",
      sections: [
        {
          description:
            "If you receive a damaged or defective item, please contact us immediately. We will arrange for a replacement or provide a full refund, including return shipping costs.",
        },
      ],
    },
    {
      title: "Contact Us:",
      sections: [
        {
          description:
            "If you have any questions or concerns regarding our return policy, please reach out to our customer service team at [customer service email/phone number].",
        },
      ],
    },
  ];

  const policies = items.map((item, index) => {
    return (
      <div key={index} className="mb-4">
        <div className="flex py-2">
          <p>{index + 1}. </p>
          <p>{item.title}</p>
        </div>
        <ol className="list-disc pl-4">
          {item.sections.map((section, sectionIndex) => {
            return <li>{section.description}</li>;
          })}
        </ol>
      </div>
    );
  });
  return (
    <div
      id="return-policy-component"
      className="bg-white w-full  lg:w-[96%] mx-auto py-6 px-4 mb-6  lg:my-6"
    >
      <div>
        <p className="text-center font-bold mb-4 text-xl"> Return Policy</p>
      </div>
      <div>
        <p className="text-gray-900 mb-4">
          At SONNY, we strive to ensure that our customers are completely
          satisfied with their purchases. However, we understand that there may
          be instances where you need to return a product. Our return policy is
          designed to be fair and transparent, making the process easy for you.
        </p>
      </div>
      <div className="text-gray-900">{policies}</div>
      <div className=" -mt-5">
        We appreciate your business and thank you for choosing [Your Company
        Name]. Your satisfaction is our priority, and we are committed to
        providing a positive shopping experience.
      </div>
    </div>
  );
};

export default ReturnPolicy;
