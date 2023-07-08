//rcc
import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  // this is class not function so here the props can be used as this.props
  //Destructing --> this prevents to add prefix for each variable as this.props

  //static defaultProps = {...}
  // or
  // User.defaultProps = {...}
  static defaultProps = {
    name: "No Information 2",
    departmant: "No Information 2",
    salary: "No Information 2",
  };
  render() {
    const { name, departmant, salary } = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          <div className="card-body">
            <p className="card-text">Salary :{salary}</p>
            <p className="card-text">Departmant :{departmant}</p>
          </div>
        </div>
      </div>
      // <div>
      //   <ul>
      //     <li>Name : {name} <i className="far fa-trash-alt"></i></li>
      //     <li>Departman : {departmant}</li>
      //     <li>Salary : {salary}</li>
      //   </ul>
      // </div>
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
