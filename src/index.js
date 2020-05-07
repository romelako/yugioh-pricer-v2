import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  render() {
    return (
      <div>
          Hello bob
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;