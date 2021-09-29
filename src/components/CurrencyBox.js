import React from 'react';
import "./CurrencyBox.scss";

const CurrencyBox = () => {
  return (
    <div className="currency-box-wrapper">
      <div className="box-left-items">
        <div className="currency-row">
          <div>Currency</div>
          <div>123</div>
        </div>
        <div className="long-name">Long Name</div>
        <div className="per-dollar">Per Dollar</div>
      </div>
      <div className="delete-wrapper">Delete</div>
    </div>
  );
}

export default CurrencyBox;
