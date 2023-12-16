// cartReducer.jsx
export const initialState = {
  carts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARTS':
      return {
        ...state,
        carts: action.payload,
      };
    // add more cases for other actions if needed
    default:
      return state;
  }
};



export const setInitialCarts = (carts) => ({
  type: 'SET_CARTS',
  payload: carts,
});
