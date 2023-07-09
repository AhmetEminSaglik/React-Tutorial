//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import User from "./component/User";
import Users from "./component/Users";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users />
      </div>
    );
  }
}

export default App;
