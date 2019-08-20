import React, {useState, useCallback} from "react";

const CallbackComponent = () => {
    let [count, setCount] = useState(1);
    let [num, setNum] = useState(1);
    
    const memoized = useCallback( () => {
        console.log("=======memoized 执行=======")
        return num;
    },[num])
    console.log("记忆：",memoized());
    console.log("原始：",num);
    return (
        <>
            <button onClick={() => {setCount(count + 1)}}> count+ </button>
            <br />
            <button onClick={() => {setNum(num + 1)}}> num+ </button>
        </>
    )
}

export default CallbackComponent




