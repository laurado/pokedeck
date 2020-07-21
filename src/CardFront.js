import React from 'react';
import { Button } from 'reactstrap';

function CardFront (props) {
  return (
    <Button
      className='card-front'
      onClick={(e) => props.handleClick(e)}
      ariaLabel='flip card to back'
    >
      <div>
        <img 
          className='card-front-img'
          src={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
        <h2>{props.pokemon.name}</h2>
      </div>
    </Button>
  )
}

export default CardFront;