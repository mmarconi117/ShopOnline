import { createStore } from "redux";
import rootReducer from "./reducersAndActions/reducers"; // Make sure this path is correct

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

const store = configureStore({ reducer: rootReducer });

export default store;
