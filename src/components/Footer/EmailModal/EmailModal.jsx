import { useSelector, useDispatch } from 'react-redux';
import {
    toggleEmailModal,
    updateEmail,
    updateMessage,
    updateSubject,
    updateName,
} from '../../../reducersAndActions/actions/emailModalAction';

import messageIcon from '../../../assets/ICONS/MessageIcon.svg';

const EmailModal = () => {
    const email = useSelector((state) => state.emailModalReducer.email);
    const name = useSelector((state) => state.emailModalReducer.name);
    const subject = useSelector((state) => state.emailModalReducer.subject);
    const message = useSelector((state) => state.emailModalReducer.message);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleEmailModal(false));
    };

    return (
        <div id="email-modal">
            <div>
                <div>
                    <div>
                        <p>Have a Question or Need Assistance?</p>
                    </div>
                    <div>
                        <p>
                            If you have questions about our features or need help with anything feel
                            free to contact us.
                        </p>
                    </div>
                </div>
                <form>
                    <div>
                        <label htmlFor="name">Your name *</label>
                        <div>
                            <input
                                id="name"
                                name="name"
                                required
                                type="text"
                                value={name}
                                onChange={(e) => dispatch(updateName(e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Your Email Address *</label>
                        <div>
                            <input
                                id="email"
                                name="email"
                                required
                                type="email"
                                value={email}
                                onChange={(e) => dispatch(updateEmail(e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject"> Subject *</label>
                        <div>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={subject}
                                onChange={(e) => dispatch(updateSubject(e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message"> Message *</label>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={message}
                                onChange={(e) => dispatch(updateMessage(e.target.value))}
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <button onClick={() => closeModal()}>Leave us a message</button>
                        </div>
                        <div>
                            <img
                                src={messageIcon}
                                alt="message ico"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmailModal;
