import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component {

    render() {
        return(
            <div>
                <h3>Get the weather</h3>
                <form onSubmit={this.props.getWeather}>
                    <input 
                        id="zipCode"
                        type="number"
                        name="zip"
                        placeholder="Zip Code"
                    />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}