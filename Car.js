import React from 'react';
class Car extends React.Component {
    constructor(){
        super();
        this.state={color:"red"}
    }
    render() {
      return <div><h2  className="App-header">Hi, I am a {this.state.color} Car!</h2></div>;
    }
  }
  export default Car;
