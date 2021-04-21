import React, { Component } from 'react';

class ButtonType extends Component {
  typePokemon() {
    const { setPokemons, setIndex } = this.props.values;
    setIndex(0);
    setPokemons(this.props.type);
  }

  render() {
    return (
      <button className="btn-types" onClick={this.typePokemon.bind(this)}>
        {this.props.type || 'All'}
      </button>
    );
  }
}

export default ButtonType;
