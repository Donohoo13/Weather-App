import React, {Component} from 'react';
import './Form.css';

// const apiKey = "KKoeenEMKJd8SWPnhrRi6mCcCNqNNmo19Pk0Vw8i7ongVbOjr2ZiMe5KlYUkKfo7"

export default class Form extends Component {
    state = {
        city: "",
        state: "",
    }

    // getLocation = async () => {
    //     const apiCall = await fetch(`https://www.zipcodeapi.com/rest/${apiKey}/info.json/84096/degrees`)
    //     const data = await apiCall.json()
    //     this.props.set(data.city, data.state)
    // }

    render() {
        return(
            <div>
                <h3>Get the weather</h3>
                <form onSubmit={this.props.getInfo}>
                    <input 
                        id="zipCode"
                        type="number"
                        name="zip"
                        placeholder="Zip Code"
                        onChange={e => e.target.value}
                    />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}