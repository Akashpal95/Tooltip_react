import React from 'react';
import './App.css';
import Tool from './tool';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showToolTip: false,
      toolTipSide: "top"
    }
  }
  changeShowToolTip = () => {
    console.log('Mouse Over!')
    const { showToolTip } = this.state
    this.setState({
      showToolTip: !showToolTip
    });
  }
  render(){
    console.log("render");
    return (
      <div className="App">
        <Tool 
        state={this.state}
        changeShowToolTip = {this.changeShowToolTip}
        />
      </div>
    );
  }
}

export default App;
