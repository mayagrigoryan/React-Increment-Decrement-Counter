import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1)
  }

  function dec() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <div className='buttons'>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </>
  )
}

export default App
