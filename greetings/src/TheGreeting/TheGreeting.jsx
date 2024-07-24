import React, { Component } from 'react';
class TheGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: `Hola ${this.props.name}`, // Inicializar con "Hola [nombre]"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ greeting: `Hola ${this.props.secondName}` });
    }, 3000);
  }

  render() {
    const { greeting } = this.state;
    return <p>{greeting}</p>;
  }
}

export default TheGreeting;