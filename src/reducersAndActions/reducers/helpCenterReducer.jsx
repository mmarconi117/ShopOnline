import * as actionTypes from '../actions';

const initialState = {
    inputValue: '',
    topicsPrompt: [
        {
            name: 'Orders',
        },
        {
            name: 'Checkout Help',
        },
        {
            name: 'Discounts',
        },
        {
            name: 'Shipping',
        },
        {
            name: 'Delivery',
        },
        {
            name: 'Returns',
        },
        {
            name: 'Start rewards',
        },
        {
            name: 'Furniture',
        },
        {
            name: 'Mattresses',
        },
        {
            name: 'Gift registry',
        },
        {
            name: 'Stores',
        },
        {
            name: 'My Account',
        },
        {
            name: 'Credit card',
        },
        {
            name: 'Password',
        },
    ],
};

const helpCenterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT:
            return {
                ...state,
                inputValue: action.payload,
            };
        case actionTypes.SET_TOPIC_PROMPT:
            return {
                ...state,
                inputValue: state.topicsPrompt[action.payload].name,
            };
        default:
            return state;
    }
};

export default helpCenterReducer;
