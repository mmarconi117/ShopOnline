import { useDispatch } from "react-redux";
import { setDisplayFeedbackModal } from "../../reducersAndActions/actions/feedbackAction";
const FeedbackModal = () => {
  const dispatch = useDispatch();

  const exitModal = () => {
    dispatch(setDisplayFeedbackModal(false));
  };
  return (
    <div>
      <button onClick={exitModal}>X</button>
      <div>Please share your feedback with us</div>

      <div>
        If you still have questions about our features or need help feel free to
        contact us.
      </div>
      <form action="">
        <input type="email" name="" id="" />
        <textarea type="email" name="" id="" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FeedbackModal;
