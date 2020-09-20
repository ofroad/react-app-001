import React, {useState,useRef} from "react";

function App() {
  let [name, setName] = useState("Nate");
  let nameRef = useRef();
  const submitButton = () => {
    console.log("nameRef===",nameRef)
    setName(nameRef.current.value);
  };
  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}


export default App

/*
useRef 保存引用值
所有对 ref 的赋值或取值，拿到的都只有一个最终状态
*/ 



