import { createStore } from "redux";
import rootReducer from "./reducersAndActions/reducers/index"


const store = createStore(rootReducer);

export default store;