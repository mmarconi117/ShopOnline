import { combineReducers } from "redux";
import companyService from "./companyServiceReducer";

const rootReducer = combineReducers({
  //add reducers as needed here
  companyService: companyService,
});

export default rootReducer;
