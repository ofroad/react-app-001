//子组件
import React, { Component } from 'react';

class Example extends Component {

  render() {
    console.log('example render');
    const { person } = this.props;
    return(
      <div>
        {person.name}
        <p>{this.props.children}</p>
      </div>
    );
  }
}


export default Example;
//this.props.children类似如可以在父组件里面给子组件传递的html

