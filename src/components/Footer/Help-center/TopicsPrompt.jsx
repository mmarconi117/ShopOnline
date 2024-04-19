import { useState } from 'react';
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth <= 640;

    let numItemsPerRow = isMobile ? 3 : 7;

    // Adjust the number of items per row for desktop if there are more than 14 items
    if (!isMobile && topicsPrompt.length > 14) {
        numItemsPerRow = 7;
    }

    const rows = [];
    for (let i = 0; i < topicsPrompt.length; i += numItemsPerRow) {
        rows.push(topicsPrompt.slice(i, i + numItemsPerRow));
    }

    const navItems = rows.map((row, index) => (
        <div key={index} className={`flex flex-row flex-wrap justify-center ${isMobile ? 'mb-4' : 'mb-8'}`}>
            {row.map((item, itemIndex) => (
                <div key={itemIndex} className={`border p-2 text-center rounded-2xl ${isMobile ? 'w-32 mx-1 my-1' : 'md:mx-2'}`} style={{ borderColor: 'black' }}>
                    <button onClick={() => selectTopicPrompt(index * numItemsPerRow + itemIndex)}>
                        {item.name}
                    </button>
                </div>
            ))}
        </div>
    ));

    return (
        <div id="help-center-nav" className="my-5 flex flex-col items-center">
            {navItems}
        </div>
    );
};

export default TopicsPrompt;