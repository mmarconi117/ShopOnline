import { useDispatch, useSelector } from "react-redux";
import {
  setDisplayFeedbackModal,
  setFeedbackInput,
  setFeedbackEmail,
} from "../../reducersAndActions/actions/feedbackAction";
const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { email, feedbackInput } = useSelector(
    (state) => state.feedbackReducer
  );
  const exitModal = () => {
    dispatch(setDisplayFeedbackModal(false));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    //Make a POST request to the backend API to create new feedback using email and feedbackInput
  };
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center" onClick={exitModal}>
      <div className=" w-[70%] lg:w-[50%] max-w-[760px] bg-[#D9D9D9] flex flex-col justify-between px-10 lg:px-16 py-12 gap-10 lg:gap-14 rounded-3xl" onClick={e=> e.stopPropagation()}>
        <button onClick={exitModal}>X</button>
        <div className="text-3xl font-normal text-[#212121]">Please share your feedback with us</div>

        <div className="text-xl font-normal text-[#212121]">
          If you still have questions or need help feel free to contact us.
        </div>
        <form onSubmit={handleFeedbackSubmit} className="flex flex-col justify-between gap-14">
          <input
            type="email"
            name="feedbackEmail"
            id="feedbackEmail"
            onChange={(e) => dispatch(setFeedbackEmail(e.target.value))}
            className="py-4 px-6 rounded-lg border border-solid border-[#939393]"
            placeholder="Your Email"
          />
          <textarea
            type="text"
            name="feedbackInput"
            id="feedbackInput"
            onChange={(e) => dispatch(setFeedbackInput(e.target.value))}
            className="min-h-[151px] py-4 px-6 rounded-lg border border-solid border-[#939393] "
            placeholder="Your question"
          />
          <button type="submit" className="bg-[#EEC643] rounded-md px-3 py-4">Send</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
