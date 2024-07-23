import React, { useState } from 'react'

const CounterF = ({ initialValue, step }) => {
  const [count, setCount] = useState(initialValue)

  const substract = () => {
    setCount(prevCount => prevCount - step)
  }

  const add = () => {
    setCount(prevCount => prevCount + step)
  }

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor actual: {count}</p>
      <button onClick={substract}>Substract</button>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default CounterF