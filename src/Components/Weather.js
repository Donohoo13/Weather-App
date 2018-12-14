import React, {Component} from 'react';

// const apiKey = "a156cdda160b23f73ac7ae3ea24e537b"

export default class Weather extends Component {


    render() {
        const temp = parseInt(this.props.temperature)
        return(
            <div>
                { this.props.city && <p>Location: {this.props.city}</p> }
                { this.props.temperature && <p>Temperature: {temp}°</p> }
                { this.props.description && <p>Description: {this.props.description}</p> }
                { this.props.error && <p>{this.props.error}</p> }
            </div>
        );
    }
}