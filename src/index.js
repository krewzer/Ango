import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar.js";
import "./styles.css";
import Slides from "./NGO.js";

const App = () => {
  return (
    <div className="App">
      <Searchbar />
      <Slides />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
