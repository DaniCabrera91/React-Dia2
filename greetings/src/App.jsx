import React from 'react';
import TheGreetingF from './TheGreetingF/TheGreetingF'
import TheGreeting from './TheGreeting/TheGreeting'



function App() {
  return (
    <div className="greeting">
      <TheGreetingF name="Euralio" secondName="Alfonsina" />
      <TheGreeting name="Euralio" secondName="Alfonsina" />
    </div>
  )
}

export default App
