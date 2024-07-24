// TheHome.js
import React from 'react'
const TheHome = ({ dishes }) => {
  return (
    <div className="Section-home">
      <h2>Lista de Platos</h2>
      <ul className= "dish-cards">
        {dishes.map((dish) => (
          <li className="dish-card" key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Precio: ${dish.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TheHome