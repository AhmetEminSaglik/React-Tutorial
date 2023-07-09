//rcc
import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  // this is class not function so here the props can be used as this.props
  //Destructing --> this prevents to add prefix for each variable as this.props
  state = {
    isVisible: false,
  };
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
              {name}
            </h4>
            <i
              className="far fa-trash-alt"
              onClick={this.onDeleteUser}
              style={{ cursor: "pointer" }}
            ></i>
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
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  departmant: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};

export default User;
