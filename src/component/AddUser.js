import React, { Component } from "react";
import posed from "react-pose";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: true,
    name: "",
    departmant: "",
    salary: "",
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // changeDepartmant = (e) => {
  //   this.setState({
  //     departmant: e.target.value,
  //   });
  render() {
    const { visible, name, departmant, salary } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <button
          onClick={this.changeVisibility}
          className="btn btn-dark btn-block mb-2"
        >
          {visible ? "Hide Form" : "Show Form"}
        </button>
        <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
            <div className="card-header">
              <h4>Add User Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter Name"
                    className="form-control"
                    value={name}
                    onChange={this.changeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="departmant">Departmant</label>
                  <input
                    type="text"
                    name="departmant"
                    id="departmant"
                    placeholder="Enter Departmant"
                    className="form-control"
                    onChange={this.changeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    id="id"
                    placeholder="Enter Salary"
                    className="form-control"
                    value={salary}
                    onChange={this.changeInput}
                  />
                </div>
                <button className="btn btn-danger btn-block" type="submit">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
