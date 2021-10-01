import React, { useState} from 'react';
import "./CurrencyInput.scss"

const CurrencyInput = () => {
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setTotal(e.target.value * 10);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="currency"
        id="name"
        className="currency-input"
        onChange={handleInputChange}
      />
      Total : {total}
    </div>
  );
}

export default CurrencyInput;
