import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    isError: false
  };
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1, isError: false });
  };
  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ isError: true });
    }
  };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.isError ? (
          <p data-test="error-p">Error trying to go below zero</p>
        ) : null}
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
