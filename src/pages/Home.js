import React from 'react';
import CurrencyBox from '../components/CurrencyBox';
import CurrencyInput from '../components/CurrencyInput';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="box-wrapper">
        <CurrencyInput />
        <CurrencyBox />
      </div>
    </div>
  );
}

export default Home;
