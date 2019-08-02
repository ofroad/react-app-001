import React, { Component } from 'react';
import Child from './p3-1';



class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div style={{ border: "1px solid blue" }}>
        <Child count={this.state.count} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default Father;
