import { useSelector, useDispatch } from 'react-redux';
import { setTopicPrompt } from '../../../reducersAndActions/actions/helpCenterAction';

const TopicsPrompt = () => {
    const topicsPrompt = useSelector(
        (state) => state.helpCenterReducer.topicsPrompt,
    );
    const dispatch = useDispatch();

    const selectTopicPrompt = (topicIndex) => {
        dispatch(setTopicPrompt(topicIndex));
    };

    const navItems = topicsPrompt.map((item, index) => {
        return (
            <li key={index}>
                <button onClick={() => selectTopicPrompt(index)}>
                    {item.name}
                </button>
            </li>
        );
    });

    return (
        <div id="help-center-nav" className="my-5">
            <nav>
                <ul>{navItems}</ul>
            </nav>
        </div>
    );
};

export default TopicsPrompt;
