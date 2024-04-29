const Policies = ({ currentHash }) => {
    
    const items = [
        {
            hash: "",
            policyIntroduction:
                "Thank you for choosing Shop Online New York. This Privacy Policy is designed to inform you about the types of personal information we collect, how it is used, and the choices you have regarding your information. By using our website and services, you consent to the practices outlined in this policy.",
            policies: [
                {
                    title: "Information We Collect:",
                    description:
                        "We may collect various types of information, including personal and non-personal data, to provide and improve our services. This may include your name, contact information, payment details, and browsing behavior."
                },
                {
                    title: "How We Use Your Information:",
                    description:
                        "Your information is used to process transactions, personalize your experience, and improve our services. We may also use it for marketing purposes with your consent and to comply with legal obligations."
                },
                {
                    title: "Information Sharing:",
                    description:
                        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the purposes of providing our services or as required by law."
                },
                {
                    title: "Security:",
                    description:
                        "We prioritize the security of your information and employ industry-standard measures to protect it. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security."
                },
                {
                    title: "Your Choices:",
                    description:
                        "You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time."
                },
                {
                    title: "Children's Privacy:",
                    description:
                        "Our services are not directed to individuals under the age of 13. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us, and we will take steps to remove that information."
                },
                {
                    title: "Changes to the Privacy Policy:",
                    description:
                        "We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes."
                }
            ],
            moreInquire:
                "For more detailed information, please review our full Privacy Policy. If you have any questions or concerns, contact us at [Contact Email/Phone]"
        },
        {
            hash: "#shinpping&delivery",
            policyIntroduction:
                "Thank you for choosing Shop Online New York. This Shipping and Delivery Policy outlines important details regarding the shipping of our products. By making a purchase, you agree to the terms outlined below.",
            policies: [
                {
                    title: "Order Processing:",
                    description:
                        "Orders are processed within [insert number] business days (excluding weekends and holidays) after payment confirmation. We strive to dispatch orders as swiftly as possible."
                },
                {
                    title: "Shipping Methods:",
                    description:
                        "We offer various shipping options, including standard and expedited services. The available methods and associated costs are presented during the checkout process."
                },
                {
                    title: "Shipping Locations:",
                    description:
                        "We currently ship in New York. If your location is not listed, please contact our customer support for assistance."
                },
                {
                    title: "Estimated Delivery Times:",
                    description:
                        "Estimated delivery times vary based on the shipping method selected and your location. Standard shipping typically takes between [insert range] business days, while expedited shipping delivers within [insert range] business days."
                },
                {
                    title: "Order Tracking:",
                    description:
                        "Once your order is shipped, you will receive a confirmation email containing a tracking number and instructions on how to track your package. Please allow some time for the tracking information to be updated."
                },
                {
                    title: "Shipping Delays:",
                    description:
                        "While we strive to meet estimated delivery times, unforeseen circumstances such as weather, customs clearance, or carrier delays may impact delivery. We appreciate your understanding in such situations."
                },
                {
                    title: "Shipping Restrictions:",
                    description:
                        "Some products may have shipping restrictions due to legal or logistical reasons. Details about any restrictions are provided on the product pages."
                }
            ],
            moreInquire:
                "If you have any questions or concerns regarding our Shipping and Delivery Policy, please contact our customer support at [Contact Email/Phone]."
        },
        {
            hash: "#return&exchanges",
            policyIntroduction:
                "At Shop Online New York, we aim to ensure your satisfaction with every purchase. Our Returns and Exchanges Policy is designed to make the process straightforward and customer-friendly. Please review the following terms:",
            policies: [
                {
                    title: "Eligibility:",
                    description:
                        "To be eligible for a return or exchange, items must be unused, in the original packaging, and accompanied by the proof of purchase. Some exclusions apply, such as personalized or final sale items."
                },
                {
                    title: "Time Frame:",
                    description:
                        "You may initiate a return or exchange within [insert number] days from the date of delivery. Please contact our customer support to initiate the process."
                },
                {
                    title: "Return Process:",
                    description:
                        "To start a return or exchange, contact our customer support at [Contact Email/Phone]. Our team will guide you through the process, providing you with a return authorization and necessary instructions."
                },
                {
                    title: "Return Shipping:",
                    description:
                        "Customers are responsible for return shipping costs, unless the return is due to an error on our part. We recommend using a traceable shipping method to ensure the safe return of your item."
                },
                {
                    title: "Damaged or Defective items:",
                    description:
                        "If you receive a damaged or defective item, please notify us immediately. We will provide instructions for the return, and upon verification, offer a replacement or refund, including any applicable return shipping costs."
                },
                {
                    title: "Non-Returnable Items:",
                    description:
                        "Certain items, such as gift cards and downloadable software, are non-returnable. Please check product descriptions for any specific exclusions."
                },
                {
                    title: "Return Authorization:",
                    description:
                        "A return authorization is required for all returns and exchanges. Please obtain this authorization from our customer support before sending back any items."
                }
            ],
            moreInquire:
                "If you have any questions or concerns regarding our Returns and Exchanges Policy, please contact our customer support at [Contact Email/Phone]."
        },
        {
            hash: "#returns&refund",
            policyIntroduction:
                "At Shop Online New York, our goal is to guarantee your satisfaction with every purchase. We've crafted our Returns and Exchanges Policy to simplify the process and prioritize customer satisfaction. Kindly take a moment to review the following terms:",
            policies: [
                {
                    title: "Eligibility:",
                    description:
                        "Items may be eligible for return within 30 days of receipt. To be eligible for a return, items must be unused, in the same condition as received, and in  original packaging."
                },
                {
                    title: "Process:",
                    description:
                        "To initiate a return, please contact our customer service team with your order details. Once your return is approved, you will receive instructions on how to proceed."
                },
                {
                    title: "Refunds:",
                    description:
                        "Upon receiving your returned item, we will inspect it and notify you of the status. If approved, a refund will be processed to your original method of payment within [number] days."
                },
                {
                    title: "Exchanges:",
                    description:
                        "We do not offer exchanges at this time. If you wish to exchange an item, please return it for a refund and place a new order."
                },
                {
                    title: "Return Shipping:",
                    description:
                        "Return shipping costs are the responsibility of the buyer, unless the return is due to our error or a defective product."
                },
                {
                    title: "Exceptions:",
                    description:
                        "Certain items, such as personalized or perishable goods, are not eligible for return. Returns of final sale items may be subject to approval on a case-by-case basis."
                }
            ],
            moreInquire:
                "If you have any questions or concerns about our Returns and Refund Policy, please contact our customer service team for assistance."
        },
        {
            hash: "#cancellation",
            policyIntroduction:
                "At Shop Online New York, we understand that circumstances may arise requiring you to cancel an order. Our Cancellation Policy is designed to provide clarity on the cancellation process and any associated fees. Please review the following terms:",
            policies: [
                {
                    title: "Eligibility:",
                    description:
                        "Orders are eligible for cancellation within [insert number] hours of placement. After this period, we may have already processed and shipped your order."
                },
                {
                    title: "Cancellation Process:",
                    description:
                        "To request a cancellation, please contact our customer support at [Contact Email/Phone]. Provide your order number and the reason for cancellation. Our team will guide you through the process."
                },
                {
                    title: "Successful Cancellation:",
                    description:
                        "If your order is successfully canceled within the eligible timeframe, a full refund will be issued to your original payment method. Please allow [insert number] business days for the refund to reflect in your account."
                },
                {
                    title: "Late Cancellations:",
                    description:
                        "Cancellation requests made after the specified timeframe may be subject to additional fees. Late cancellations will be assessed on a case-by-case basis."
                },
                {
                    title: "Pre-Shipment Cancellations:",
                    description:
                        "Pre-shipment cancellations refer to orders canceled before being dispatched. If your order has not been shipped, and you meet the eligibility criteria, we will process the cancellation with a full refund."
                },
                {
                    title: "Post-Shipment Cancellations:",
                    description:
                        "If your order has already been shipped, you will need to follow our Returns and Exchanges Policy. Cancellation at this stage may incur shipping and handling fees."
                },
                {
                    title: "Changes to Cancellation Policy:",
                    description:
                        "We reserve the right to update or modify this Cancellation Policy to reflect changes in our practices or for legal reasons. Any updates will be effective immediately upon posting on our website."
                }
            ],
            moreInquire: ""
        },
        {
            hash: "#payment&security",
            policyIntroduction:
                "Ensuring the security of your payment information is a top priority at Shop Online New York. Our Payment and Security Policy outlines the measures we take to protect your data and provides information on accepted payment methods. Please review the following terms:",
            policies: [
                {
                    title: "Secure Transactions:",
                    description:
                        "All payment transactions conducted through our website are encrypted using secure socket layer technology (SSL). This encryption ensures that your payment details are transmitted securely."
                },
                {
                    title: "Accepted Payment Methods:",
                    description:
                        "We accept various payment methods, including major credit and debit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment options. The available methods are presented during the checkout process."
                },
                {
                    title: "Payment Authorization:",
                    description:
                        "By completing a transaction, you authorize us to charge your selected payment method for the total amount of your order, including any applicable taxes and shipping charges."
                },
                {
                    title: "Payment Processing:",
                    description:
                        "Payments are processed upon order placement. If there is an issue with payment processing, our customer support team will reach out to you to resolve the matter."
                },
                {
                    title: "Stored Payment Information:",
                    description:
                        "For your security, we do not store sensitive payment information on our servers. Each transaction requires fresh entry of payment details."
                },
                {
                    title: "Fraud Prevention:",
                    description:
                        "We employ fraud prevention measures to protect both you and us from unauthorized transactions. Transactions may be flagged for manual verification in case of suspicion."
                },
                {
                    title: "Third-Party Payment Processors:",
                    description:
                        "In some cases, we may utilize third-party payment processors. These processors adhere to industry standards for security and privacy."
                },
                {
                    title: "Changes to Payment and Security Policy:",
                    description:
                        "We reserve the right to update or modify this Payment and Security Policy to reflect changes in our practices or for legal reasons. Any updates will be effective immediately upon posting on our website."
                }
            ],
            moreInquire:
                "If you have any questions or concerns regarding our Payment and Security Policy, please contact our customer support at [Contact Email/Phone]."
        }
    ];
    const renderPoliciesDesktop = () => {
        return items.map((item, itemIndex) => {
            return currentHash === item.hash ? (
                <div key={itemIndex} id={item.hash}>
                    <div className="ml-14 mt-4">{item.policyIntroduction}</div>
                    {item.policies.map((policy, policyIndex) => {
                        return (
                            <div key={policyIndex + 1}>
                                <div>
                                    <p className="ml-14 pt-2 text-xl font-bold">
                                        {policyIndex + 1}. {policy.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="ml-14 mr-4 pt-2 pb-4 pr-12 text-base">{policy.description}</p>
                                </div>
                            </div>
                        );
                    })}
                    <div className="ml-14 mt-4" key={itemIndex}>{item.moreInquire}</div>
                </div>
            ) : (
                <div key={itemIndex}></div>
            );
        });
    };

    
    const renderPoliciesMobile = () => {
        return (
            <div>
                {items.map((item, itemIndex) => (
                    <div key={itemIndex} id={item.hash}>
                        <div className="ml-14 mt-4">{item.policyIntroduction}</div>
                        {item.policies.map((policy, policyIndex) => (
                            <div key={policyIndex + 1}>
                                <div>
                                    <p className="ml-14 pt-2 text-xl font-bold">
                                        {policyIndex + 1}. {policy.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="ml-14 mr-4 pt-2 pr-12 text-base">{policy.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="ml-14 mt-4" key={itemIndex}>{item.moreInquire}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id="policies-component"
            className="w-full"
            style={{
                backgroundColor: 'white',
                marginLeft: 0,
                paddingBottom: '10px',
                maxHeight: '82.5vh',
                overflowY: 'auto',
               
                ...(window.innerWidth <= 768 && {
                    marginLeft: '100px',
                    maxHeight: '100%',
                    marginRight:'100px',
                })
            }}>
            {window.innerWidth <= 768 ? renderPoliciesMobile() : renderPoliciesDesktop()}
        </div>
    );
};

export default Policies;