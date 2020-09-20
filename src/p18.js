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

const TICK = 'TICK'
const CLEAR = 'CLEAR'
const TOGGLE = 'TOGGLE'

function stateReducer(state, action) {
  switch (action.type) {
    case TOGGLE:
      return {...state, running: !state.running}
    case TICK:
      if (state.running) {
        return {...state, lapse: action.lapse}
      }
      return state
    case CLEAR:
      return {running: false, lapse: 0}
    default:
      return state
  }
}

function Stopwatch() {
  // const [lapse, setLapse] = React.useState(0)
  // const [running, setRunning] = React.useState(false)

  const [state, dispatch] = React.useReducer(stateReducer, {
    lapse: 0,
    running: false,
  })

  React.useEffect(
    () => {
      if (state.running) {
        const startTime = Date.now() - state.lapse
        const intervalId = setInterval(() => {
          dispatch({
            type: TICK,
            lapse: Date.now() - startTime,
          })
        }, 0)
        return () => clearInterval(intervalId)
      }
    },
    [state.lapse, state.running],
  )

  function handleRunClick() {
    dispatch({
      type: TOGGLE,
    })
  }

  function handleClearClick() {
    // setRunning(false)
    // setLapse(0)
    dispatch({
      type: CLEAR,
    })
  }

  return (
    <div>
      <label style={labelStyles}>{state.lapse}ms</label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {state.running ? 'Stop' : 'Start'}
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

//解决方法1------useReducer


