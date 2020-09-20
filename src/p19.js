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

  React.useLayoutEffect(
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

/*
解决方法2----useLayoutEffect
因为 useLayoutEffect 是同步的
*/ 



