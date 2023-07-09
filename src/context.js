import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    default:
      return state;
  }
};
export class UserProvider extends Component {
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
      {
        id: 4,
        name: "Eren Ural",
        departmant: "no information available",
        salary: "no information available",
      },
    ],
    // to use action, dispatch must be added in state
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
        {/* here can be thought of like <App/>*/}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
