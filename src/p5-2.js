import React, { PureComponent } from 'react';

class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      arr:['1']
    };
    console.log('constructor');
  }
  changeState = () => {
    let { arr } = this.state;
    this.setState({
      arr: [...arr, '2']
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>
          {this.state.arr.map((item) => {
            return item;
          })}
        </div>
      </div>
    );
  }
}

export default IndexPage;
//引用类型的数据
/**
 * 此组件使用PureComponent创建
 * 当每次点击按钮后，往数组里面增加数据，数据发生了变化，此组件会重新渲染
 * 用扩展运算符产生新数组，使this.state.arr的引用发生了变化，每次点击按钮都会输出render，界面也会变化，不管该组件是继承自Component还是PureComponent的
 */
