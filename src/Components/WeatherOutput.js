import React from 'react'

export const WeatherOutput = props => {
        const temp = parseInt(props.temperature);
        return (
          <div>
            {props.city && props.state && <p>Location: {props.city}, {props.state}</p>}
            {props.temperature && <p>Temperature: {temp}°</p>}
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.description && <p>Description: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
          </div>
        );
}