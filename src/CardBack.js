import React from 'react';
import { Button } from 'reactstrap';
import pokeLogo from './pokedeck.png';

function CardBack (props) {
  return (
    <Button className='card-back' onClick={(e) => props.handleClick(e)}>
      <div>
        <img className='w-100' src={pokeLogo} />
        <img src={props.pokemon.sprites.back_default} />
      </div>
    </Button>
  )
}

export default CardBack;