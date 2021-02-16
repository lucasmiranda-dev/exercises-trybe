import React from 'react';
import Proptypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p>
            {' '}
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    type: Proptypes.string,
    averageWeight: Proptypes.object,
    image: Proptypes.object,
    moreInfo: Proptypes.object,
  }).isRequired,
};

export default Pokemon;
