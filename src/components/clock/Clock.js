import React, { Component } from "react";

class Clock extends Component {

  componentDidMount() {

    // this prop came from the container (mapDispatchToProps)
    this.props.updateTime();

    this.timerID = setInterval(
        () => {
      this.props.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It is {this.props.time}.</h2>
      </div>
    );
  }
}
export default Clock;
