//rcc
import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  // this is class not function so here the props can be used as this.props
  //Destructing --> this prevents to add prefix for each variable as this.props

  static defaultProps = {
    name: "No Information 2",
    departmant: "No Information 2",
    salary: "No Information 2",
  };
  render() {
    const { name, departmant, salary } = this.props;
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
User.propTypes = {
  name: PropTypes.string.isRequired,
  departmant: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};
// User.defaultProps = {
//   name: "No Information 1",
//   departmant: "No Information 1",
//   salary: "No Information 1",
// };
export default User;
