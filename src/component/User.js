//rcc
import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

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

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: "DELETE_USER", payload: id });
  };
  render() {
    const { name, departmant, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { background: "#3ba9e6", color: "white" }
                    : { background: "#66cccc" }
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4
                    className="d-inline"
                    onClick={this.OnClickEvent.bind(this, 34)}
                  >
                    {name}
                  </h4>
                  <i
                    className="far fa-trash-alt"
                    onClick={this.onDeleteUser.bind(this, dispatch)}
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
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  departmant: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default User;
