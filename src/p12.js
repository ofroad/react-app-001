import React, {useState, useEffect} from "react";

const EffectComponent = () => {
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log("count状态更新");
        return () => {
            console.log("count useEffect卸载")
        }
    },[count]);

    useEffect(() => {
        console.log("num状态更新");
        return () => {
            console.log("num useEffect卸载")
        }
    },[num]);

    return (
        <>{console.log("UI渲染")}
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>+</button>
        </>
    );
}
export default EffectComponent

//数组为空的时候，useEffect就相当于componentDidMoubt和componentWillUnmount这两个生命周期，只在首次渲染和卸载的时候执行
//React Hook 允许函数式组件中定义多个useEffect(和useState类似)，多个useEffect互相不受干扰。


