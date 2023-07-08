//rcc
import React, { Component } from "react";

class User extends Component {
  // this is class not function so here the props can be used as this.props
  //Destructing --> this prevents to add prefix for each variable as this.props

  render() {
    const {name,departmant,salary} = this.props;
    return (
      <div>
        <ul>
          <li>Name : {name}</li> 
          <li>Departman : {departmant}</li>
          <li>Salary : {salary}</li>
        </ul>
      </div>
    );
  }
}

export default User;
