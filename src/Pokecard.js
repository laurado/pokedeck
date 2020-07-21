import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Col } from 'reactstrap';
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
      <Col
        xs='12'
        sm='6'
        md='4'
        lg='3'
        className='py-3'
      >
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <CardBack
            pokemon={this.props.pokemon}
            handleClick={this.handleClick}
          />
          <CardFront
            pokemon={this.props.pokemon}
            handleClick={this.handleClick}
          />
        </ReactCardFlip>
      </Col>
    )
  }
}

export default Pokecard;