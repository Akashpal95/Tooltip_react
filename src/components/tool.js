import React, { Component } from 'react';
import './tool.css';

class Tool extends Component {
    render() {
        const {showToolTip , position} = this.props.state;
        const {changeShowToolTip} = this.props
        return (
            <div>
                <div className="tool-button" onMouseOver={changeShowToolTip} onMouseOut = {changeShowToolTip}>
                    <div className="button-info">Download</div>
                </div>
                {
                    showToolTip
                    ?<div className= {`box-${position} arrow-${position}`}>Press here to download.</div>
                    :null
                }
            </div>
        
        );
    }
}

export default Tool;