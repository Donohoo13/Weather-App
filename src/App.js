import React, { Component } from "react";
import Home from "./Components/Home";
// import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="Title">
            <Home />
          </div>
          <div className="Weather">
            <Weather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
