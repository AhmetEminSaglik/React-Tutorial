import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };
    console.log("constructor");
  }
  componentDidMount = () => {
    // is used to update component's state data from RestAPI
    console.log("componentDidMount");
    this.setState({ a: 20 });
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("component Did Update");
  };
  componentWillUnmount = () => {
    console.log("component Will Unmount");
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("should Component Update");
    return true;
  };

  render() {
    console.log("render");
    return <div></div>;
  }
}

export default Test;
