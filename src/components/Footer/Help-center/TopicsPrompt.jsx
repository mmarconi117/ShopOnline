import { useSelector, useDispatch } from 'react-redux';
import { setTopicPrompt } from '../../../reducersAndActions/actions/helpCenterAction';
import './TopicsPrompt.css'; 

const TopicsPrompt = () => {
    const topicsPrompt = useSelector(
        (state) => state.helpCenterReducer.topicsPrompt,
    );
    const dispatch = useDispatch();

    const selectTopicPrompt = (topicIndex) => {
        dispatch(setTopicPrompt(topicIndex));
    };

  
    const firstRowTopics = topicsPrompt.slice(0, 7);
    const secondRowTopics = topicsPrompt.slice(7);

    const firstRowNavItems = firstRowTopics.map((item, index) => {
        return (
            <li key={index}>
                <button onClick={() => selectTopicPrompt(index)}>
                    {item.name}
                </button>
            </li>
        );
    });

    const secondRowNavItems = secondRowTopics.map((item, index) => {
        return (
            <li key={index + 7}>
                <button onClick={() => selectTopicPrompt(index + 7)}>
                    {item.name}
                </button>
            </li>
        );
    });

    return (
        <div id="help-center-nav" className="my-5">
            <nav>
                <ul>{firstRowNavItems}</ul>
                <ul>{secondRowNavItems}</ul>
            </nav>
        </div>
    );
};

export default TopicsPrompt;
