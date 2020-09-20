import React, { Component } from 'react';



class Child extends Component {
  constructor(props) {
    console.log('p3 Child constructor');
    super(props);
    this.state={
      zcount:10
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    /*
    一个静态方法，所以不能在这个函数里面使用this，这个函数有两个参数props和state，
    分别指接收到的新参数和当前的state对象，这个函数会返回一个对象用来更新当前的state对象，
    如果不需要更新可以返回null
     */
    console.log('p3 Child getDerivedStateFromProps');
    console.log("nextProps===",nextProps);
    console.log("prevState===",prevState);
    
    return {
      zcount: nextProps.count * 2,
    };
    
   //return null;
  }

  componentDidMount() {
    console.log('p3 Child componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，
     true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true
     */
    console.log('p3 Child shouldComponentUpdate');
    console.log("nextProps===",nextProps);
    console.log("nextState===",nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /**
     有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，
     会作为第三个参数传给componentDidUpdate，如果你不想要返回值，请返回null，不写的话控制台会有警告
     */
    console.log('p3 Child getSnapshotBeforeUpdate');
    console.log("prevProps===",prevProps);
    console.log("prevState===",prevState);
    return 'aa';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('p3 Child componentDidUpdate');
    console.log("prevProps===",prevProps);
    console.log("prevState===",prevState);
    console.log("snapshot===",snapshot);
  }

  render() {
    console.log('p3 Child render');
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
