import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Pokecard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFlipped: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <CardBack
          pokemon={this.props.pokemon}
          handleClick={this.handleClick}
        />
        <CardFront
          pokemon={this.props.pokemon}
          handleClick={this.handleClick}
        />
      </ReactCardFlip>
    )
  }
}

export default Pokecard;