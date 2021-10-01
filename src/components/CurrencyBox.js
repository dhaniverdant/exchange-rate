import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencies } from "../redux/actions";
import "./CurrencyBox.scss";

const CurrencyBox = () => {
  let dispatch = useDispatch();
  const { currencies } = useSelector(state => state.allCurrenciesData);

  useEffect(() => {
    dispatch(loadCurrencies());
  }, []);

  return (
    <div className="currency-box-wrapper">
      <div className="box-left-items">
        <div className="currency-row">
          <div>Currency</div>
          <div>123</div>
        </div>
        <div className="long-name">Long Name</div>
        <div className="per-dollar">Per Dollar</div>
        {Object.entries(currencies).map((currency) => (
          <div>
            THE DOLLAR: {Object.values(currency)}
          </div>
        ))}
      </div>
      <div className="delete-wrapper">Delete</div>
    </div>
  );
}

export default CurrencyBox;
