import React from 'react';
import Pokecard from './Pokecard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
      fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemon: [data] })
      });
  }

  render() {
    let cards = this.state.pokemon.map(pokemon => {
      return (
        <Pokecard
          key={pokemon.id}
          pokemon={pokemon}
        />
      )
    })

    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default App;
