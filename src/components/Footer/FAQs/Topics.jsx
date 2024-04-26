const Topics = ({ currentHash }) => {
    const items = [
        {
            hash: '',
            topics: [
                {
                    title: 'How will I place an order?',
                    description:
                        "Placing an order is simple and can be done in a few easy steps. First, browse our website and add the desired items to your shopping cart. Once you've finished shopping, proceed to the checkout page. Follow the instructions to enter your shipping details, select a payment method, and review your order. After confirming the order, you will receive an email confirmation with your order details.",
                },
                {
                    title: 'What payment do you accept??',
                    description:
                        "Placing an order is simple and can be done in a few easy steps. First, browse our website and add the desired items to your shopping cart. Once you've finished shopping, proceed to the checkout page. Follow the instructions to enter your shipping details, select a payment method, and review your order. After confirming the order, you will receive an email confirmation with your order details.",
                },
                {
                    title: 'Is it safe to make online payments on your site?',
                    description:
                        'Yes, it is safe to make online payments on our site. We prioritize the security of your personal and financial information. Our website employs industry-standard encryption protocols to secure data transmission. Additionally, we use secure and trusted payment gateways that adhere to strict security standards. Rest assured that your payment details are handled with the utmost confidentiality and care. If you have specific security concerns, please review our privacy policy or contact our customer support for more information.',
                },
            ],
        },
        {
            hash: '#shipping',
            topics: [
                {
                    title: 'How long will it take to receive my order?',
                    description:
                        'Creating an account is a quick and straightforward process. Click on the "Sign Up" or "Create Account" button on our website. Fill in the required information, including your email address, a secure password, and any necessary personal details. Follow the prompts to verify your email, and once confirmed, your account will be successfully created. Enjoy the benefits of personalized shopping and order tracking with your new account.',
                },
                {
                    title: 'What are the shipping costs?',
                    description:
                        'Shipping costs vary based on your location, the weight of the items, and the selected shipping method. During the checkout process, you will see a breakdown of shipping costs before confirming your purchase. Occasionally, we may offer promotions with free or discounted shipping. Keep an eye out for such offers.',
                },
                {
                    title: 'Can I track my order?',
                    description:
                        'Yes, you can track your order. Once your order is shipped, you will receive a shipping confirmation email containing a tracking number and a link to the carrier`s website. Use this information to monitor the status and location of your package. If you have an account with us, you can also track your order in the "Order History" section after logging in.',
                },
            ],
        },
        {
            hash: '#returns',
            topics: [
                {
                    title: "What items can't be returned?",
                    description:
                        'Certain items, such as personalized or customized products, perishable goods, and digital downloads, are typically non-returnable. Additionally, items without their original packaging or tags may be excluded from the return policy.',
                },
                {
                    title: 'How do I initiate a return or exchange?',
                    description:
                        'To initiate a return or exchange, log in to your account on our website, navigate to the "Order History" section, and select the specific order containing the item you wish to return. Follow the provided instructions to initiate the return process. Alternatively, contact our customer support for assistance.',
                },
                {
                    title: 'Can I return an item purchased with a coupon or gift card?',
                    description:
                        "Yes, you can generally return items purchased with a coupon or gift card. However, the refund process may differ. If you used a coupon, the refunded amount might be the discounted price. For items bought with a gift card, the refund may be issued as store credit or to the original payment method, depending on the store's policy.",
                },
                {
                    title: 'How long will it take for me to receive a refund once I return an item?',
                    description:
                        'The refund processing time can vary. Once we receive the returned item, we will inspect it and initiate the refund. The time it takes for the funds to appear in your account depends on the payment method used. Credit card refunds may take a few business days, while PayPal or other online payment methods may vary. Check our refund policy for specific details.',
                },
            ],
        },
        {
            hash: '#accountissues',
            topics: [
                {
                    title: 'How do I create an account?',
                    description:
                        'Creating an account is a quick and straightforward process. Click on the "Sign Up" or "Create Account" button on our website. Fill in the required information, including your email address, a secure password, and any necessary personal details. Follow the prompts to verify your email, and once confirmed, your account will be successfully created. Enjoy the benefits of personalized shopping and order tracking with your new account.',
                },
                {
                    title: 'What should I do If I forget my password?',
                    description:
                        'If you forget your password, simply click on the "Forgot Password" or "Reset Password" link on the login page. Enter the email address associated with your account, and we will send you a password reset link. Follow the link to create a new password securely. If you encounter any issues or do not receive the reset email, please check your spam folder or contact our customer support for assistance.',
                },
                {
                    title: 'Can I change my account information?',
                    description:
                        'Yes, you can easily update your account information. After logging in, navigate to the "Account" or "Profile" section. Here, you can edit various details such as your contact information, shipping address, and password. Make the necessary changes, and don`t forget to save the updates. If you encounter any difficulties or need further assistance, feel free to reach out to our customer support team.',
                },
            ],
        },
        {
            hash: '#promotions',
            topics: [
                {
                    title: 'How do I apply a discount code?',
                    description:
                        'To apply a discount code, proceed to the checkout page after adding items to your cart. Look for a designated field labeled "Discount Code" or "Promo Code." Enter the provided code into this field and click on the "Apply" or "Submit" button. The discount will be applied to your order total, and you can proceed to complete the purchase with the adjusted price.',
                },
                {
                    title: 'Are there any ongoing prmotions?',
                    description:
                        'Stay updated on our current promotions by visiting the "Promotions" or "Deals" section on our website. Here, you`ll find information about ongoing sales, discounts, and special offers. Additionally, subscribing to our newsletter or following us on social media can provide real-time updates on exclusive promotions and limited-time offers. Don`t miss out on great deals – check back regularly for the latest promotions!',
                },
                {
                    title: 'What is your loyalty program?',
                    description:
                        'Our loyalty program is designed to reward our valued customers for their continued support. As a member, you can earn points for every purchase, which can be redeemed for discounts, exclusive products, or other perks. To join the loyalty program, simply create an account on our website. Keep an eye on your account dashboard for information on your points balance, available rewards, and any special promotions exclusive to our loyal customers. We appreciate your loyalty, and our program is our way of saying thank you!',
                },
            ],
        },
        {
            hash: '#checkout',
            topics: [
                {
                    title: "  Is it possible to change my shipping address after I've completed the checkout process?",
                    description:
                        'Once an order is confirmed, the shipping address cannot be changed for security reasons. Please double-check your shipping information before completing the checkout. If you encounter any issues or need assistance, contact our customer support as soon as possible to explore potential solutions.',
                },
                {
                    title: 'What should I do if my payment transaction fails during the checkout process?',
                    description:
                        'If your payment transaction fails, double-check that the provided payment information is accurate and that your payment method is valid. If issues persist, you may want to try an alternative payment method or contact your bank to ensure there are no restrictions on your card. For further assistance, reach out to our customer support, and we`ll be happy to help troubleshoot and complete your order.',
                },
                {
                    title: 'How can I review and edit my order before completing the checkout process?',
                    description:
                        'To review and edit your order, click on the shopping cart icon at the top of the page. This will take you to your cart, where you can modify quantities, remove items, or apply discount codes. Once satisfied, proceed to the checkout page to finalize your order.',
                },
            ],
        },
        {
            hash: '#giftcards',
            topics: [
                {
                    title: 'Can I purchase a gift card?',
                    description:
                        'Absolutely! You can purchase a gift card directly from our website. Visit the "Gift Cards" section, select the desired denomination, and add it to your cart. Follow the checkout process to complete the purchase. The gift card will be delivered electronically to your email or the recipient`s email, depending on your preference.',
                },
                {
                    title: 'How do i redeem a gift card?',
                    description:
                        'To redeem a gift card, simply add items to your cart and proceed to the checkout page. During the payment process, look for a field labeled "Gift Card" or "Promo Code." Enter the unique code found on the gift card into this field and click on the "Apply" or "Redeem" button. The corresponding amount will be deducted from your total, and you can proceed to complete the purchase.',
                },
                {
                    title: 'Is there an expiration date for gift cards?',
                    description:
                        'Typically, our gift cards do not have an expiration date. You can use them at your convenience within the specified period mentioned in the terms and conditions. We recommend checking the details on the gift card or contacting our customer support for specific information about expiration dates or any other terms associated with our gift cards. We want to ensure you have a pleasant experience using your gift card whenever you choose to redeem it.',
                },
            ],
        },
        {
            hash: '#technicalsupport',
            topics: [
                {
                    title: 'What should I do if the website is not working properly?',
                    description:
                        'If you encounter any issues with our website, there are a few troubleshooting steps you can take. First, try refreshing the page or clearing your browser cache. If the problem persists, it may be a temporary issue, so waiting a few minutes and trying again could help. Alternatively, you can reach out to our technical support team by contacting [customer support email/phone number] to report the issue. Provide details about the problem, including any error messages you may have received.',
                },
                {
                    title: 'How do I contact customer support?',
                    description:
                        'Contacting our customer support is easy. You can reach us through [customer support email] or by calling [customer support phone number]. Our dedicated support team is available during [business hours] to assist you with any questions, concerns, or issues you may have. Additionally, you may find a "Contact Us" or "Support" link on our website, leading you to a form or live chat option for immediate assistance.',
                },
                {
                    title: 'Do you offer technical assistance for using the website?',
                    description:
                        'Yes, we provide technical assistance for using our website. If you have any difficulties navigating the site, placing orders, or using specific features, our customer support team is ready to assist you. Contact us through [customer support email/phone number], and our knowledgeable support agents will guide you through any technical challenges or provide step-by-step assistance to ensure a smooth and enjoyable online experience.',
                },
            ],
        },
        {
            hash: '#productinformation',
            topics: [
                {
                    title: 'How can I find product information?',
                    description:
                        'Finding product information is easy on our website. Simply navigate to the product page of the item you are interested in. You will find detailed product descriptions, specifications, and features. Additionally, customer reviews and ratings may provide valuable insights from others who have purchased the same product. If you have specific questions, our customer support team is also available to assist you.',
                },
                {
                    title: 'Are product images accurate?',
                    description:
                        'Yes, we strive to provide accurate and high-quality product images on our website. Our images are intended to represent the product as closely as possible. However, please note that variations in display settings and screen resolutions may impact how colors appear. If you have any concerns or questions about a specific product`s appearance, feel free to contact our customer support for additional information.',
                },
                {
                    title: 'What if the product is out of stock?',
                    description:
                        'In the event that a product is out of stock, you may see an "Out of Stock" message on the product page. We understand the importance of availability, and we work to restock popular items as quickly as possible. You can sign up for notifications to be alerted when the item is back in stock. Alternatively, our customer support team can provide information on product availability, suggest alternative options, or assist you in placing a backorder if applicable.',
                },
            ],
        },
    ];
 
    const mobileTopics = items.flatMap((item) => item.topics); 
    

    const renderTopics = (topics) => {
        return topics.map((topic, index) => (
            <div key={index}>
                <div>
                    <p className="ml-16 pt-10 text-xl font-bold">{index + 1}. {topic.title}</p>
                </div>
                <div>
                    <p className="ml-14 mr-4 pt-4 pr-12 text-lg">{topic.description}</p>
                </div>
            </div>
        ));
    };
    return (
        <div
            id="topics-components"
            className="w-2/3"
            style={{
                backgroundColor: 'white',
                marginLeft: 0,
                paddingBottom: '10px',
                maxHeight: '62.3vh',
                overflowY: 'auto',
                ...(window.innerWidth <= 768 && {
                    marginLeft: '100px',
                    maxHeight: '100%',
                })
            }}
        >
            
            {window.innerWidth > 768 ? (
                items.map((item, index) =>
                    currentHash === item.hash ? (
                        <div key={index} id={item.hash}>
                            {renderTopics(item.topics)}
                        </div>
                    ) : null
                )
            ) : (
                <div>
                    {renderTopics(mobileTopics)}
                </div>
            )}
        </div>
    );
};

export default Topics;
