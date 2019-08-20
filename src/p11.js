import React, {useState, useEffect} from "react";
const EffectComponent = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("定义事件接口")
        return () => {
            console.log("注销事件接口")
        }
    },[])
    return (
        <>  
            {console.log("UI渲染")}
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}> + </button>
        </>
    );
}
export default EffectComponent
//数组为空的时候，useEffect就相当于componentDidMoubt和componentWillUnmount这两个生命周期，只在首次渲染和卸载的时候执行



