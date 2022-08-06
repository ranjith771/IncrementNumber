import React, { useState } from 'react'
import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState(50)
  const incNum = () => {
    setCount(count - 1)
  }
  return (
    <div className="ranjith">
      <h1>{count}</h1>
      <button
        onClick={incNum}
        style={{
          backgroundColor: 'dodgerblue',
          padding: '15px 25px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: 7,
          width: 300,
          height: 40,
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default App
