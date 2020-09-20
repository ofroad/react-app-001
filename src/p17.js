import React from "react";

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
const labelStyles = {
  fontSize: '5em',
  display: 'block',
}

function Stopwatch() {
  const [lapse, setLapse] = React.useState(0)
  const [running, setRunning] = React.useState(false)

  React.useEffect(
    () => {
      if (running) {
        console.log("======执行操作=======")
        const startTime = Date.now() - lapse
        const intervalId = setInterval(() => {
          setLapse(Date.now() - startTime)
        }, 0)
        return () => {
          console.log("======取消操作=======")
          clearInterval(intervalId)
        }
      }
    },
    [lapse,running]
  )

  function handleRunClick() {
    setRunning(r => !r)
  }

  function handleClearClick() {
    setRunning(false)
    setLapse(0)
    console.log(lapse)
  }

  return (
    <div>{console.log("UI渲染")}
      <label style={labelStyles}>{lapse}ms</label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

function App() {
  const [show, setShow] = React.useState(true)
  return (
    <div style={{textAlign: 'center'}}>
      <label>
        <input
          checked={show}
          type="checkbox"
          onChange={e => setShow(e.target.checked)}
        />{' '}
        Show stopwatch
      </label>
      {show ? <Stopwatch /> : null}
    </div>
  )
}


export default App

//那就是在 interval 开启的情况下，直接执行 clear，会停止 interval，但是显示的 lapse 却不是 0
//因为 useEffect 是异步执行的，他要在 React 走完本次更新之后才会执行解绑以及重新绑定的函数。
//那么这就给 interval 再次触发的机会，这也就导致来，我们设置 lapse 为 0 之后，他又在 interval 中被更新成了一个计算后的值，之后才被真正的解绑。



