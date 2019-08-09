//父组件
import React, { PureComponent } from 'react';
import Example from './p6-1';
class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      person: {
        name: 'sxt'
      }
    };
    console.log('constructor');
  }
  changeState = () => {
    let { person } = this.state;
    person.name = 'sxt2';
    this.setState({
      person
    })
  };
  render() {
    console.log('IndexPage render');
    const { person } = this.state;
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <Example person={person} ><span>133</span></Example>
      </div>
    );
  }
}


export default IndexPage;

/**
 * PureComponent不仅会影响本身，而且会影响子组件，所以PureComponent最佳情况是展示组件
 */
/*
1.我们让IndexPage组件里面包含一个子组件Example来展示PureComponent是如何影响子组件的

2.父组件继承PureComponent，子组件继承Component时：下面的结果初始化时输出为constructor，IndexPage render，example render，但是当我们点击按钮时，界面没有变化，
因为这个this.state.person对象的引用没有改变，只是改变了它里面的属性值所以尽管子组件是继承Component的也没有办法渲染，因为父组件是PureComponent，父组件根本没有渲染，
所以子组件也不会渲染

3.父组件继承PureComponent，子组件继承PureComponent时：因为渲染在父组件的时候就没有进行，相当于被拦截了，所以子组件是PureComponent还是Component根本不会影响结果，界面依旧没有变化

4.父组件继承Component，子组件继承PureComponent时：结果和我们预期的一样，即初始化是会输出constructor，IndexPage render，example render，但是点击的时候只会出现IndexPage render，
因为父组件是Component，所以父组件会渲染，但是当父组件把值传给子组件的时候，因为子组件是PureComponent，所以它会对prop进行浅比较，发现这个person对象的引用没有发生变化，所以不会重新渲染，
而界面显示是由子组件显示的，所以界面也不会变化

5.父组件继承Component，子组件继承Component时：初始化是会输出constructor，IndexPage render，example render，当我们第一次点击按钮以后，界面发生变化，后面就不再改变，
因为我们一直把它设置为sxt2，但是每点击一次都会输出IndexPage render，example render，因为每次不管父组件还是子组件都会渲染

6.所以正如下面第四条说的，如果state和prop一直变化的话，还是建议使用Component，并且PureComponent的最好作为展示组件

作者：shuxiaotai
链接：https://www.jianshu.com/p/c41bbbc20e65
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
 */
