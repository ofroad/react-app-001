/**
 * react16.3前生命周期函数
 */
import React, { Component } from 'react';



class Child extends Component {
  constructor(props) {
    console.log('Child constructor');
    super(props);
  }

  componentWillMount() {
    console.log('Child componentWillMount');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('Child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Child componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Child componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div style={{ margin: "15px", border: "1px solid red" }}>
        子元素:
        <br />
        父组件属性count值: {this.props.count}
        <br />
        <span onClick={() => this.props.handleClick()}
          style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
        >click me</span>
      </div>
    )
  }
}


export default Child;
