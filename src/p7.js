//父组件
import React, { useState,useEffect  } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(8);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  },[count]);

  console.log("count===",count)
  console.log("setCount===",setCount)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 10)}>
        Click me
      </button>
    </div>
  );
}

export default Example;

