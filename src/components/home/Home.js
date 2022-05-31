
import './home.css'

import axios from "axios";
import React, { useState, useEffect } from "react";
import api from "../../assist/API/axios";
import { calculator } from "../calculator";



export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  const fetchdata = () => {
    setIsLoading(true);
    axios.get("https://api.coincap.io/v2/assets").then((response) => {
      
      setData(response.data.data);
      
      setIsLoading(false);
    });
  };


  
  useEffect(() => {
    fetchdata();
  }, []);

if(isLoading){
  <img src='https://thumbs.gfycat.com/ConventionalOblongFairybluebird-max-1mb.gif'></img>
}
  return (
    <div className='home'>
      <section id="banner" className="container ">
        <div className="banner-details">
        <div>
          <p className="title">MARKET CAP</p>
          <p className="value">$1.77T</p>
        </div>
        <div>
          <p className="title">EXCHANGE VOL</p>
          <p className="value">$68.83B</p>
        </div>
        <div>
          <p className="title">ASSETS</p>
          <p className="value">2,295</p>
        </div>
        <div>
          <p className="title">EXCHANGES</p>
          <p className="value">73</p>
        </div>
        <div>
          <p className="title">MARKETS</p>
          <p className="value">15,774</p>
        </div>
        <div>
          <p className="title">BTC DOM INDEX</p>
          <p className="value">34.1%</p>
        </div>
        </div>
      </section>

    <table id="coins-table">
      <div className="table">
        <div className="table-heading" >
          
            <span className="rank">Rank</span>
            <span className="coin-name-title">Name</span>
            <span >Price</span>
            <span >Market Cap</span>
            <span >VWAP (24Hr)</span>
            <span >Supply</span>
            <span >Volume (24Hr)</span>
            <span >Change (24Hr)</span>
          
        </div>

        {data.map((value) => {
          return (
            <div className="table-heading-details" >
              
                <span className="rank">{value.rank}</span>
                <span>
                  <div className="coin-name">
                    <img
                      src={`https://assets.coincap.io/assets/icons/${value.symbol.toLowerCase()}@2x.png`}
                      alt={`coin ${value.name}`}
                    />
                    <p style={{fontSize:'18px'}}>{value.name}</p><br/>
                    
                  </div>
                  
                </span>
                <span>
                  $
                  {(Math.round(value.priceUsd * 100) / 100)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
                <span>
                  ${calculator(Math.round(value.marketCapUsd) / 1000000000)}b
                </span>
                <span>${Math.round(value.vwap24Hr * 100) / 100}</span>
                <span>{calculator(Math.round(value.supply) / 1000000)}m</span>
                <span>
                  ${calculator(Math.round(value.volumeUsd24Hr) / 1000000000)}b
                </span>
                <span
                  style={{
                    color:
                      value.changePercent24Hr > 0 ? "#18c683" : "#f44336",
                  }}
                >
                  {Math.round(value.changePercent24Hr * 100) / 100}%
                </span>
              
            </div>
          );
        })}
      </div>
    </table>
    <div className="button-container">
          
              <button >View More</button>
            </div>
  </div>
);

   
};
