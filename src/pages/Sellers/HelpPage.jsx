import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFeedbackForm, submitFeedbackForm, updateEmail, updateQuestion } from '../../reducersAndActions/actions/feedbackFormActions';
import navigationArrow from "../../assets/ICONS/navigationArrow.svg";
import FeedbackModal from '../Buyers/FeedbackModal';

const HelpPage = () => {
  const { showFeedbackFormState, email, question } = useSelector(state => ({
    showFeedbackFormState: state.feedback.showFeedbackForm,
    email: state.feedback.email,
    question: state.feedback.question,
  }));
  const dispatch = useDispatch();

  const handleToggleFeedbackForm = () => {
    dispatch(toggleFeedbackForm());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { email, question };
    dispatch(submitFeedbackForm(formData));
    dispatch(updateEmail(''));
    dispatch(updateQuestion(''));
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-row space-x-12">
      {showFeedbackFormState && <FeedbackModal />}

      {/* Navigation */}
      <div className="flex flex-col w-full p-5">
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row space-x-4">
            <h3>Help</h3>
            <img className="w-full" src={navigationArrow} alt="" />
          </div>
          <div className="flex flex-row space-x-4">
            <h3>Partner Profile</h3>
          </div>
        </div>
        <h1 className="my-10 text-2xl font-semibold">Seller's Online Help Services </h1>
        {/* Navigation */}
        <div className="flex h-[300px] pb-5 bg-Banner bg-cover bg-center align-center justify-center">
          {/* Contact Information */}
          <div className="flex flex-col justify-center items-center w-[300px] mt-10">
            <div className="text-xl">Need help? Let us help you!</div>
            <br/>
            <div>Give us a call: 1-800-123-4657</div>
            <div>Email us: nyshopping@shopping.com</div>
            <div>Monday-Friday 6am - 5pm EST</div>
            <div>Saturday - Sunday 8am - 2pm EST</div>
          </div>
        </div>
        <div className="flex flex-col h-300 content-between">
          {/* search bar */}
          <input
            className="mt-10"
            type="search"
            placeholder="What can we help you with?"
            aria-label="Search through site content"
          />
          <br/>

          {/* title */}
          <h2 className="whitespace-nowrap">See frequently asked question on popular Topics</h2>
          {/* title */}
          <br/>
          {/* question list */}
          <div className="max-sm:text-xs whitespace-nowrap">
            <details>
              <summary>Frequently Asked Questions on Account</summary>
            </details>
            <details>
              <summary>Frequently Asked Questions on Payments & Refunds</summary>
            </details>
            <details>
              <summary>Frequently Asked Questions on Orders, Shipping & Tracking</summary>
            </details>
            <details>
              <summary>Frequently Asked Questions on Returns & Exchanges</summary>
            </details>
            <details>
              <summary>Frequently Asked Questions on Product</summary>
            </details>
            <details>
              <summary>Frequently Asked Questions on Marketing Inquiries</summary>
            </details>
          </div>
          {/* feedback button */}
          <button className="text-cyan-600 text-center text-xl leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Color-Styles-Primary-color-blue-T1000,#2284B6)] self-center mt-5 px-12 py-4 rounded-md border-solid max-md:mt-2 max-md:px-5" onClick={handleToggleFeedbackForm}>Give us feedback</button>
        </div>
        {/* show feedback form depending on the state of the feedback button */}
        {showFeedbackFormState && (
          <form onSubmit={handleFormSubmit} className="feedback-form">
            <h3>Please share your feedback with us!</h3>
            <p>If you still have questions or need help feel free to contact us.</p>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
              />
            </div>
            <div style={{ height: '1rem' }}></div>
            <div>
              <label htmlFor="question">Your question</label>
              <textarea
                id="question"
                placeholder="Your question"
                value={question}
                onChange={(e) => dispatch(updateQuestion(e.target.value))}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default HelpPage;
