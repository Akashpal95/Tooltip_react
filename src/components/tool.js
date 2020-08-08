import React, { Component } from 'react';

class Tool extends Component {
    render() {
        const {showToolTip , toolTipSide} = this.props.state;
        const {changeShowToolTip} = this.props
        return (
            <div>
                <div className="tool-button" onMouseOver={changeShowToolTip} onMouseOut = {changeShowToolTip}>
                    <div className="button-info">Download</div>
                </div>
                {
                    showToolTip
                    ?<div className= {`box-${toolTipSide} arrow-${toolTipSide}`}>Press here to download.</div>
                    :null
                }
            </div>
        
        );
    }
}

export default Tool;