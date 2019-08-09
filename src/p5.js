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
  componentDidMount() {
    console.log("process.env.REACT_APP_NAME===",process.env.REACT_APP_NAME);
    console.log("process.env.ttag===",process.env.ttag);
    console.log("process.env.NODE_ENV===",process.env.NODE_ENV);
  }
}

export default IndexPage;
//引用类型的数据
/**
 * 此组件使用PureComponent创建
 * 当每次点击按钮后，往数组里面增加数据，数据发生了变化，但是此组件不会重新渲染
 * 因为在PureComponent中浅比较这个数组的引用没有变化所以没有渲染
 */
//上面的情况同样适用于对象的情况
//若是数组和对象等引用类型，则要引用不同，才会渲染
