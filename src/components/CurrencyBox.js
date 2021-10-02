import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencies } from "../redux/actions";
import "./CurrencyBox.scss";

const CurrencyBox = () => {
  const [total, setTotal] = useState(0);
  let dispatch = useDispatch();
  const { currencies } = useSelector(state => state.allCurrenciesData);

  const handleInputChange = (e) => {
    setTotal(e.target.value * currencies.data.rates.IDR);
  };

  useEffect(() => {
    dispatch(loadCurrencies());
    console.log("data", currencies.data.base);
  }, []);

  let filtered = Object.entries(currencies.data.rates).filter(curr => curr.includes("IDR"));
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          name="currency"
          id="name"
          className="currency-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="currency-box-wrapper">
        <div className="box-left-items">
          <div className="currency-row">
            <div>IDR</div>
            <div>{total.toLocaleString()}</div>
          </div>
          <div className="long-name">IDR - Indonesian Rupiah</div>
          <div className="per-dollar">1 EUR : {filtered}</div>
        </div>
        <div className="delete-wrapper">Delete</div>
      </div>
    </div>
  );
}

export default CurrencyBox;
