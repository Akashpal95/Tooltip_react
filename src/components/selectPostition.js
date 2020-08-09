import React, { Component } from 'react';
import './selectPosition.css';

class SelectPostition extends Component {
    render() {
        return (
            <div className="position-selector">
                <select name="positions" id="positions">
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
                </select>
            </div>
            
        );
    }
}

export default SelectPostition;