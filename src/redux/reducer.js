import * as types from "./actionTypes";

const initialState = {
  currencies: []
}

const currencyReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
}

export default currencyReducers;
