import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = { count: this.props.initialValue }
    }
  
    substract = () => {
      this.setState(prevState => ({ count: prevState.count - this.props.step }))
    };
  
    add = () => {
      this.setState(prevState => ({ count: prevState.count + this.props.step }))
    };
  
    render() {
      return (
        <div>
          <h2>Contador (Clases)</h2>
          <p>Valor actual: {this.state.count}</p>
          <button onClick={this.substract}>Substract</button>
          <button onClick={this.add}>Add</button>
        </div>
      )
    }
  }
  
  export default Counter

