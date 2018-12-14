import React, { Component } from "react";
import Form from "./Form";

const apiKey = "a156cdda160b23f73ac7ae3ea24e537b";
const apiKey2 =
  "KKoeenEMKJd8SWPnhrRi6mCcCNqNNmo19Pk0Vw8i7ongVbOjr2ZiMe5KlYUkKfo7";
const apiKey3 = 
  "js-6wR5VsgmP7kLeubYt27i5PeI7gaa9sqU3W5AXn6S5cRkwPNrLtqZcDk6JdJxdYcV"

export default class Weather extends Component {
  state = {
    temperature: "",
    city: "",
    state: "",
    description: "",
    humidity: "",
    error: ""
  };

  handleError = () => {
    this.setState({
      zip: "",
      temperature: "",
      city: "",
      state: "",
      description: "",
      error: "Please enter a valid Zip Code."
    });
  };

  getInfo = async e => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    console.log(zip);
    await fetch(
      `https://www.zipcodeapi.com/rest/${apiKey3}/info.json/${zip}/degrees`,
      {
        mode: "cors",
        headers: {
            // 'Access-Control-Allow-Credentials' : true,
            // 'Access-Control-Allow-Origin':'*',
            // 'Access-Control-Allow-Methods':'GET',
            // 'Access-Control-Allow-Headers':'application/json',
        }
      }
    )
      .then(result => result.json())
      .then(data => this.setState({
          city: data.city,
          state: data.state
      }))
      .catch(err => console.log(err));
    const weatherCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey}&units=imperial`
    );
    const weatherData = await weatherCall.json();
    console.log(weatherData)
    if (!zip) {
      this.handleError();
    } else if (weatherData.cod === "404") {
      this.handleError();
    } else {
      this.setState({
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].main,
        humidity: weatherData.main.humidity,
        error: ""
      });
    }
    console.log(this.state)
  };

  // getLocation = async (e) => {
  //     e.preventDefault();
  //     const zip = e.target.elements.zip.value
  //     const apiCall = await fetch(`https://www.zipcodeapi.com/rest/${apiKey2}/info.json/${zip}/degrees`)
  //     const data = await apiCall.json()
  //     console.log(data)
  //     this.setState({
  //         city: data.city,
  //         state: data.state,
  //     })
  // }

  //   getWeather = async e => {
  //     e.preventDefault();
  //     const zip = e.target.elements.zip.value;
  //     console.log(zip);
  //     const api_call = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey}&units=imperial`
  //     );
  //     const data = await api_call.json();
  //     console.log(data);
  //     if (!zip) {
  //       this.handleError()
  //     } else if (data.cod === "404" ) {
  //       this.handleError()
  //     } else {
  //       this.setState({
  //         temperature: data.main.temp,
  //         description: data.weather[0].main,
  //         error: ""
  //       });
  //       console.log(this.state);
  //     }
  //   };

  render() {
    const temp = parseInt(this.state.temperature);
    return (
      <div>
        <span>
          <Form getInfo={this.getInfo} />
        </span>
        {this.state.city && this.state.state && <p>Location: {this.state.city}, {this.state.state}</p>}
        {this.state.temperature && <p>Temperature: {temp}°</p>}
        {this.state.humidity && <p>Humidity: {this.state.humidity}%</p>}
        {this.state.description && <p>Description: {this.state.description}</p>}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
