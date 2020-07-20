import React from 'react';
import { Container, Row } from 'reactstrap';
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
    let promises = []
    for (let i = 1; i < 10; i++) {
      var newPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
      promises.push(newPokemon);
    }
    Promise.all(promises).then(pokemon => this.setState({pokemon: pokemon}))
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
      <Container className="App">
        <Row>
          {cards}
        </Row>
      </Container>
    );
  }
}

export default App;
