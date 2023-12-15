// companyServiceActions.js
export const setInput = (input) => ({
  type: "SET_INPUT",
  payload: input,
});

export const setCharLong = (isCharLong) => ({
  type: "SET_CHAR_LONG",
  payload: isCharLong,
});

const initialState = {
  input: "",
  charLong: false,
};

const companyService = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_CHAR_LONG":
      return { ...state, charLong: action.payload };
    default:
      return state;
  }
};

export default companyService;
