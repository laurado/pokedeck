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
        <img className='card-front-img' src={props.pokemon.sprites.front_default} />
        <div className='stats'>
          <h3 className='mt-1'>{props.pokemon.name}</h3>
          <p className='mb-0'>id: {props.pokemon.id}</p>
          <p className='mb-0'>height: {props.pokemon.height}</p>
          <p className='mb-0'>weight: {props.pokemon.weight}</p>
        </div>
      </div>
    </Button>
  )
}

export default CardFront;