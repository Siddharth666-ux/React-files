// This is for explaining State

import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thankyou for Subscribing",
    });
  }

  render() {
    return (
      <div>
        <h2> {this.state.message} </h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
