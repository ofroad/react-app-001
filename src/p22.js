import React, {useState,useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      alert("count: " + count);
    }, 3000);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={() => setCount(count - 1)}>减少 count</button>
    </div>
  );
}


export default App

/*
先点击增加button，后点击减少button，3秒后先alert 1，后alert 0，而不是alert两次0。这就是所谓的 capture value 的特性。
而在类组件中 3 秒后输出的就是修改后的最终值==https://codesandbox.io/s/j4q3lmo6y9
*/ 



