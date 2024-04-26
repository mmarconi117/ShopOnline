import * as actionTypes from './';

export const setInput = (value) => ({
    type: actionTypes.SET_INPUT,
    payload: value,
});

export const setTopicPrompt = (topicPromptIndex) => ({
    type: actionTypes.SET_TOPIC_PROMPT,
    payload: topicPromptIndex,
});
