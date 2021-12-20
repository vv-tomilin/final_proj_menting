import { combineReducers } from "redux";

import input from "./input";
import exchangeRates from "./exchangeRates";


const rootReducer = combineReducers({
  input,
  exchangeRates
});

export default rootReducer;