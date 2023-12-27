// import { createStore } from 'redux';
// import rootReducer from './reducers'; // You need to create this file

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

const store = configureStore({ reducer: rootReducer });

export default store;
