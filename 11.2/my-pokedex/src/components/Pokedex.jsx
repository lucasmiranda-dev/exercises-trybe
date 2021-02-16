import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPokemon: 0
    }
  }

  next = () => {
    const { selectedPokemon } = this.state;
    this.setState(prevState => ({
      selectedPokemon: prevState.selectedPokemon +1
    }))
  }

  render() {
    const { pokemons } = this.props;
    const { selectedPokemon } = this.state;
    return (
      <div>
        <Pokemon pokemon={pokemons[selectedPokemon]} />
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pokedex;
