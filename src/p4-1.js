import React, { Component } from 'react';

class IndexPage extends Component{
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    console.log('constructor');
  }
  changeState = () => {
    this.setState({
      isShow: true
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}
export default IndexPage;
/**
 * 此组件使用Component创建
 * 当按钮第一次点击后isShow变为true
 * 当再次点击按钮，isShow前后的状态都是true,但是此组件还是重新渲染了
 */