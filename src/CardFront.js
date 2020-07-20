import React from 'react';
import { Button } from 'reactstrap';

function CardFront (props) {
  return (
    <Button className='pokecard' onClick={(e) => props.handleClick(e)}>
      <div>
        <img src={props.pokemon.sprites.front_default} />
        <h2>{props.pokemon.name}</h2>
      </div>
    </Button>
  )
}

export default CardFront;