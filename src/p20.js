import React, {useContext} from "react";

const colorContext = React.createContext("gray");
console.log("colorContext===",colorContext)
function Bar() {
  const color11 = useContext(colorContext);
  console.log("color11===",color11)
  return <div className="yqwer">{color11}</div>;
}
function Foo() {
  return <Bar />;
}
function App() {
  return (
    <colorContext.Provider value={"www"}>
      <Foo />
    </colorContext.Provider>
  );
}


export default App

/*
useContext 减少组件层级
*/ 



