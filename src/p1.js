import React, { Component } from 'react';

class p1 extends Component {
  constructor() {
    super();
    this.state = {
      nickname: ""
    };
  }
  handleChange = e => {
    this.setState({
      nickname: e.target.value
    });
  }
  dck = e => {

  }
  componentWillMount(){
	  console.log("=========p1 componentWillMount=============");
	  //console.log(this)
  }
  componentDidMount(){
	  console.log("=========p1 componentDidMount=============");
	  //console.log(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log("=========p1 componentWillReceiveProps=============");
  }
  shouldComponentUpdate(nextProps) {
    console.log("=========p1 shouldComponentUpdate=============");
    return true;
  }
  componentWillUpdate(){
	  console.log("=========p1 componentWillUpdate=============");
	  //console.log(this)
  }
  componentDidUpdate(){
	  console.log("=========p1 componentDidUpdate=============");
	  //console.log(this)
  }
  render() {
	console.log("=========p1 render=============");
	//console.log(this)
    return (
      <div className="App">
      <p>{this.props.name}</p>
      <p onClick={this.dck}>p1 page====父组件向子组件传递数据</p>
	  <div>react数据流动是单向的，父组件向子组件通信最为常见。父组件通过props向子组件传递需要的信息。</div>
	  <input type="text" onChange={this.handleChange} />
	  <br /><br /><br />
      </div>
    );
  }
  
  componentWillUnmount(){
	  console.log("=========p1 componentWillUnmount=============");
	  //console.log(this)
  }
}

export default p1;
