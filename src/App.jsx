import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import Tab from "./components/Tab";
import "./App.css";
const axios = require("axios");

const App = () => {
  const [name, setName] = useState("");
  const [searchCN, setSearchCN] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");
  const [renderTab, SetRenderTab] = useState(false);

  return (
    <div className="app">
      <Navbar credit={true} />
      <div className="cntry-wrapper">
        <input
          className="cntry-inp"
          onChange={(e) => {
            SetRenderTab(true);
            setSearchCN(e.target.value);

            axios
              .get("https://restcountries.com/v2/name/" + searchCN)
              .then((response) => {
                setName(response.data[0].name);
                setCapital(response.data[0].capital);
                setRegion(response.data[0].region);
                setPopulation(response.data[0].population);
                setFlag(response.data[0].flags.png);
                console.log(JSON.stringify(response));
              })
              .catch((error) => {
                console.log(error);
                SetRenderTab(false);
              });
            if (e.target.value === null) {
              console.log("Nothing");
            }
          }}
          type="text"
          name="searchCN"
          id="searchCN"
          placeholder="Country Name..."
        />
      </div>

      {renderTab === true ? (
        <div
          className="wrapper"
          style={{ backgroundImage: flag, position: "absolute" }}
        >
          {flag !== undefined ? (
            <img className="flag" src={flag} alt="Country Flag" />
          ) : null}

          <div className="details">
            <p className="Country Name">{name}</p>
            <br />
            <p>{"Population: " + population}</p>
            <p>{"Region: " + region}</p>
            <p>{"Capital: " + capital}</p>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default App;
