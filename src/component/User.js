//rcc
import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  // this is class not function so here the props can be used as this.props
  //Destructing --> this prevents to add prefix for each variable as this.props

  //static defaultProps = {...}
  // or
  // User.defaultProps = {...}

  state = {
    isVisible: false,
  };
  // create state in constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isVisible: false,
  //   };
  // }
  static defaultProps = {
    name: "No Information 2",
    departmant: "No Information 2",
    salary: "No Information 2",
  };

  //  bind this  in constructor :
  // constructor(props) {
  //   super(props);
  //   this.OnClickEvent=this.OnClickEvent.bind(this);
  // }
  OnClickEvent = (number, e) => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(e);
  };
  render() {
    const { name, departmant, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.OnClickEvent.bind(this, 34)}>
              {/* must be used bind although we create arrow function to send variable in OnClickEvent */}
              {name}
            </h4>
            {/* bind : When we create functions, we have to bind like onClick example --> this.OnClickEvent.bind(this)
            or can be used in a constructor. */}
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Salary :{salary}</p>
              <p className="card-text">Departmant :{departmant}</p>
              <p className="card-text">{isVisible}</p>
            </div>
          ) : null}
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
// create default props
// User.defaultProps = {
//   name: "No Information 1",
//   departmant: "No Information 1",
//   salary: "No Information 1",
// };
export default User;
