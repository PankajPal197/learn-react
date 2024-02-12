import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(2)

  const addCounter  = () => {
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
  }

  return (
    <>
    <h1>Counter:{counter} </h1>
    <button
    onClick={addCounter}
    >Add Counter</button>

    </>
  )
}

export default App
