import React, {Component} from 'react';

export default class WeatherImage extends Component {

    toggleImage = () => {
        
    }

    render() {
        return(
            <div className="image">
                <img src={this.toggleImage}/>
            </div>
        );
    }
}