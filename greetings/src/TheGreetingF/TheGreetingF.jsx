
import React, { useState, useEffect } from 'react'
function TheGreeting(props) {
  const { name, secondName } = props
  const [greeting, setGreeting] = useState(`Hola ${name}`)

  useEffect(() => {
    setTimeout(() => {
      setGreeting(`Hola ${secondName}`)
    }, 3000)
  }, [])

  return (
    <p>{greeting}</p>
  )
}

export default TheGreeting