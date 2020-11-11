import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pokedex;
