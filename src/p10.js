import React, {useState, useEffect} from "react";

const EffectComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(1);
    const resizeHandle = () => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeHandle);
        return () => {
          console.log("=====removeEventListener=======")
          window.removeEventListener("resize", resizeHandle)
        }
    })
    return (
        <>
            <h1>{count}</h1>
            <h1>{width}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </>
    );
}
export default EffectComponent




