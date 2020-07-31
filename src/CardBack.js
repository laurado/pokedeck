import React from 'react';
import { Button } from 'reactstrap';
import pokeLogo from './pokedeck.png';

function CardBack (props) {
  return (
    <Button
      className='card-back'
      onClick={(e) => props.handleClick(e)}
      aria-label='flip card to front'
    >
      <div>
        <img
          className='w-100'
          src={pokeLogo}
          alt='pokemon-font fontmeme.com'
        />
        <img
          src={props.pokemon.sprites.back_default}
          alt={props.pokemon.name}
        />
      </div>
    </Button>
  )
}

export default CardBack;