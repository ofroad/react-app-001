import React, { Component } from 'react';


class IndexPage extends Component{
  constructor() {
    super();
    this.state = {
      arr:['1']
    };
    console.log('constructor');
  }
  changeState = () => {
    let { arr } = this.state;
    arr.push('2');
    console.log(arr);
    // ["1", "2"]
    // ["1", "2", "2"]
    // ["1", "2", "2", "2"] 
    // ....
    this.setState({
      arr
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
 * 此组件使用Component创建
 * 当每次点击按钮后，往数组里面增加数据，数据发生了变化，此组件会重新渲染
 *
 */
