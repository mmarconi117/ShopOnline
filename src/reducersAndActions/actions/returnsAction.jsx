import * as actionsTypes from ".";

const getReturns = (data) => ({
    type: actionsTypes.GET_RETURNS,
    payload: data
});

export default getReturns;
