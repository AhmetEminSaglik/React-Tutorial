//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import User from "./component/User";
import Users from "./component/Users";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Ahmet Emin SAGLIK",
        departmant: "Java Developer",
        salary: "4500$",
      },
      {
        id: 2,
        name: "Omer AKKOCA",
        departmant: "Frontend Developer",
        salary: "5000$",
      },
      {
        id: 3,
        name: "Omer Netbeans",
        departmant: "Web Developer",
        salary: "3750$",
      },
    ],
  };

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
