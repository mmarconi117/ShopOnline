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
    <div>
      <button onClick={exitModal}>X</button>
      <div>Please share your feedback with us</div>

      <div>
        If you still have questions or need help feel free to contact us.
      </div>
      <form onSubmit={handleFeedbackSubmit}>
        <input
          type="email"
          name="feedbackEmail"
          id="feedbackEmail"
          onChange={(e) => dispatch(setFeedbackEmail(e.target.value))}
        />
        <textarea
          type="text"
          name="feedbackInput"
          id="feedbackInput"
          onChange={(e) => dispatch(setFeedbackInput(e.target.value))}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FeedbackModal;
