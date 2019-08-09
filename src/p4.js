import React, { PureComponent } from 'react';

class IndexPage extends PureComponent{
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
//基本类型的数据
/**
 * 此组件使用PureComponent创建
 * 当按钮第一次点击后isShow变为true
 * 当再次点击按钮，isShow前后的状态都是true,但是此组件不会重新渲染了
 */
