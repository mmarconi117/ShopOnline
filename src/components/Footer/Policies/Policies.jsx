const Policies = () => {
    const policies = [
        {
            policy: 'Information We Collect:',
            description:
                'We may collect various types of information, including personal and non-personal data, to provide and improve our services. This may include your name, contact information, payment details, and browsing behavior.',
        },
        {
            policy: 'Information We Collect:',
            description:
                'We may collect various types of information, including personal and non-personal data, to provide and improve our services. This may include your name, contact information, payment details, and browsing behavior.',
        },
        {
            policy: 'How We Use Your Information:',
            description:
                'Your information is used to process transactions, personalize your experience, and improve our services. We may also use it for marketing purposes with your consent and to comply with legal obligations.',
        },
        {
            policy: 'Information Sharing:',
            description:
                'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the purposes of providing our services or as required by law.',
        },
        {
            policy: 'Security:',
            description:
                'We prioritize the security of your information and employ industry-standard measures to protect it. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.',
        },
        {
            policy: 'Your Choices:',
            description:
                'You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time.',
        },
        {
            policy: "Children's Privacy:",
            description:
                'Our services are not directed to individuals under the age of 13. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us, and we will take steps to remove that information.',
        },
        {
            policy: 'Changes to the Privacy Policy:',
            description:
                'We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes.',
        },
    ];
    const policiesItem = policies.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <p>
                        {index + 1}. {item.policy}
                    </p>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    });
    return (
        <div id="policies-component">
            <div>
                <div>
                    <p>
                        Thank you for choosing Shop Online New York. This
                        Privacy Policy is designed to inform you about the types
                        of personal information we collect, how it is used, and
                        the choices you have regarding your information. By
                        using our website and services, you consent to the
                        practices outlined in this policy.
                    </p>
                </div>
                <div>{policiesItem}</div>
                <div>
                    <p>
                        For more detailed information, please review our full
                        Privacy Policy. If you have any questions or concerns,
                        contact us at [Contact Email/Phone]
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Policies;
