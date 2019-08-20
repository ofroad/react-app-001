import React, {useState, useEffect} from "react";

function Example({ someProp }) {
  console.log("========Example======")
  useEffect(
    () => {
      function doSomething() {
        console.log(someProp)
      }
      doSomething()
    },
    [someProp] 
  )

  return <div>example</div>
}

export default function() {
  const [value, setValue] = useState(1)
  return (
    <>
      <Example someProp={value} />
      <button onClick={() => setValue(2)}>button</button>
    </>
  )
}

//第一次点击后，再点击props没有变化,Example组件没有重新渲染



