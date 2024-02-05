import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFeedbackForm } from '../../reducersAndActions/actions/feedbackFormActions';
import user from "../../assets/ICONS/user/user-fill.svg";
import closeDashboard from "../../assets/ICONS/closeDashboard.svg";
import navigationArrow from "../../assets/ICONS/navigationArrow.svg";
import logOut from "../../assets/ICONS/logOut.svg";

const HelpPage = () => {
  const showFeedbackFormState = useSelector(state => state.feedback.showFeedbackForm);
  const dispatch = useDispatch();

  const handleToggleFeedbackForm = () => {
    dispatch(toggleFeedbackForm());
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-row space-x-12">
      {/* Dashboard */}
      <div className="w-2/5 bg-white flex flex-col space-y-12 ">
        <div className="flex flex-row mx-8 align-middle mt-6">
          <img className="h-12" src={user} alt="user" />
          <div className="ml-7 justify-center  ">
            <h4 className="font-bold text-xl">Hello,Name</h4>
            <div>ID:XXXXXXXXX</div>
          </div>
          <img
            src={closeDashboard}
            className="h-12 ml-20 cursor-pointer"
            alt="close-dashboard"
          />
        </div>
        <div className="flex flex-col align-middle  text-left space-y-2">
          <h3 className="font-bold ml-10">Analytics</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>Overview</h1>
            <h1>Payments</h1>
            <h1>Activity Feed</h1>
            <h1>Ratings & Reviews</h1>
          </div>
          <h3 className="font-bold ml-10">Product Catalogue</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>List of products</h1>
            <h1>Upload a Product</h1>
          </div>
          <h3 className="font-bold ml-10">Order Management</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>Order List</h1>
            <h1>Returns & Refunds</h1>
            <h1>Disputes</h1>
          </div>
        </div>
        <div className="cursor-pointer font-bold ml-10 flex flex-row  space-x-2">
          <h3 className="mt-8">Sign Out</h3>
          <img className="mt-8 " src={logOut} alt="logout-user" />
        </div>
      </div>
      {/* Dashboard */}

      {/* Navigation */}
      <div className="flex flex-col w-full">
        <div className="flex flex-row mt-8 space-x-2">
          <div className="flex flex-row space-x-4">
            <h3>Help</h3>
            <img src={navigationArrow} alt="" />
          </div>
          <div className="flex flex-row space-x-4">
            <h3>Partner Profile</h3>
          </div>
        </div>
        <h1 className="my-10 text-2xl font-semibold">Seller's Online Help Services </h1>
      {/* Navigation */}

      {/* Contact Information */}
      <img src="path-to-image-of-the-contact-info.jpg" alt="Need Help" />
      {/* Contact Information */}
      {/* search bar */}
        <input
        type="search"
        placeholder="What can we help you with?"
        aria-label="Search through site content"
      />

      {/* title */}
      <h2>See frequently asked question on popular Topics</h2>
      {/* title */}

      {/* question list */}
      <div>
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
      <button onClick={handleToggleFeedbackForm}>Give us feedback</button>

      {/* show feedback form depending on the state of the feedback button */}
      {showFeedbackFormState && (
        <form className="feedback-form">
          <h3>Please share your feedback with us!</h3>
          <p>If you still have questions or need help feel free to contact us.</p>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div style={{ height: '1rem' }}></div> 
          <div>
            <label htmlFor="question">Your question</label>
            <textarea
              id="question"
              placeholder="Your question"
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