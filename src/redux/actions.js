import axios from "axios";
import * as types from "./actionTypes";

const getCurrencies = (currency) => ({
  type: types.GET_CURRENCIES,
  payload: currency,
});

export const loadCurrencies = () => {
  return function (dispatch) {
    axios.get('http://data.fixer.io/api/latest?access_key=cde0f68d9c64b01a0ba8db918ff4d964&format=1')
      .then((resp) => {
        dispatch(getCurrencies(resp));
      }).catch((error) => console.log(error));
  };
};
