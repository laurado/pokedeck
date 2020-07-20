import React from 'react';
import { Button } from 'reactstrap';
import pokeLogo from './pokedeck.png';

function CardBack (props) {
  return (
    <Button className='pokecard' onClick={(e) => props.handleClick(e)}>
      <div>
        <img className='w-100' src={pokeLogo} />
        <img src={props.pokemon.sprites.back_default} />
        <h2>{props.pokemon.name}</h2>
      </div>
    </Button>
  )
}

export default CardBack;