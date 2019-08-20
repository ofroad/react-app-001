//父组件
import React, { useState,useEffect  } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(8);
  const [num, setNum] = useState(2);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    console.log('componentDidMount...');
    console.log('componentDidUpdate...');
    return () => {
      console.log('componentWillUnmount...')
    }
  },[count]);

  console.log("count===",count)
  //console.log("setCount===",setCount)
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>num: {num} </p>
      <button onClick={() => setCount(count + 10)}>
        Click me count
      </button>
      <br />
      <button onClick={() => setNum(num + 10)}>
        Click me num
      </button>
    </div>
  );
}

export default Example;

//useEffect不传第二个参数，useEffect在首次渲染，卸载，更新时都执行
//useEffect第二个参数为空数组，useEffect只在首次渲染和卸载的时候执行
//useEffect第二个参数不为空数组，useEffect只在对应的依赖变化才执行