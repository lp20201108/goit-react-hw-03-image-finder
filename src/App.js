import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Loader
          visible="false"
          secondaryColor="#ff6d00"
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      </div>
    );
  }
}
