import React, { Component } from 'react'
class TheHome extends Component {
  render() {
    const { dishes } = this.props;
    return (
      <div className="Section-home">
        <h1>Home</h1>
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
}

export default TheHome