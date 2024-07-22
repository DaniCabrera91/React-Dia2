import { useState } from 'react'
import './App.css'
import Counter from './components/counter/TheCounter'
import CounterF from './components/CounterF/TheCounterF'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter initialValue={0} step={1} /> 
      <CounterF initialValue={5} step={2} />  

    </div>
  )
}

export default App
