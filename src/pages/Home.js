import React from 'react';
import CurrencyBox from '../components/CurrencyBox';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="box-wrapper">
        <CurrencyBox />
      </div>
    </div>
  );
}

export default Home;
