import { combineReducers } from "redux";
import currencyReducers from "./reducer";

const rootReducer = combineReducers({
  allCurrenciesData: currencyReducers
});

export default rootReducer;
