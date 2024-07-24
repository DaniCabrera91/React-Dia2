import React from 'react'
import TheHomeF from './TheHomeF/TheHomeF'
import TheHeaderF from './TheHeaderF/TheHeaderF'
import TheHome from './TheHome/TheHome'
import TheHeader from './TheHeader/TheHeader'
const dishes = [
  {
    id: 1,
    name: 'Plato 1',
    description: 'Este es el plato 1',
    price: 10,
  },
  {
    id: 2,
    name: 'Plato 2',
    description: 'Este es el plato 2',
    price: 20,
  },
  {
    id: 3,
    name: 'Plato 3',
    description: 'Este es el plato 3',
    price: 15,
  },
]

const App = () => {
  return (
    <div className="App">
      <TheHeaderF />
      <TheHomeF dishes={dishes} />
      <TheHeader />
      <TheHome dishes={dishes} />
    </div>
  )
}

export default App