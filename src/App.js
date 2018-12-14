import React, { Component } from "react";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css";

const apiKey = "a156cdda160b23f73ac7ae3ea24e537b";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    description: "",
    error: ""
  };

  handleError = () => {
    this.setState({
    temperature: "",
    city: "",
    description: "",
    error: "Please enter a valid Zip Code."
  });
}

  getWeather = async e => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    console.log(zip);
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey}&units=imperial`
    );
    const data = await api_call.json();
    console.log(data);
    if (!zip) {
      this.handleError()
    } else if (data.cod === "404" ) {
      this.handleError()
    } else {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        description: data.weather[0].main,
        error: ""
      });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="App">
        <Home />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
