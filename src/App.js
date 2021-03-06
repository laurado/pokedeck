import React from 'react';
import { Container, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Switch from "react-switch";
import Pokecard from './Pokecard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      hasMore: true,
      isInfiniteScrollOn: JSON.parse(localStorage.getItem('isInfiniteScrollOn')) || false,
    }
  }

  componentDidMount() {
    let promises = []
    const nPokemon = this.state.isInfiniteScrollOn ? 12 : 151;
    for (let i = 1; i <= nPokemon; i++) {
      var newPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
      promises.push(newPokemon);
    }
    Promise.all(promises).then(pokemon => this.setState({pokemon: pokemon}))
  }

  fetchMoreData = () => {
    if (!this.state.isInfiniteScrollOn) {
      return;
    }

    if (this.state.pokemon.length >= 150) {
      this.setState({ hasMore: false });
      return;
    }
 
    let nextIndex = this.state.pokemon.length + 1;
    let promises = []
    for (let i = nextIndex; i < (nextIndex + 12); i++) {
      var newPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
      promises.push(newPokemon);
    }
    Promise.all(promises).then(pokemon => {
      let newPokemon = this.state.pokemon.concat(pokemon)
      this.setState({pokemon: newPokemon})
    })
  };

  handleInfiniteScrollToggle = () => {
    this.setState({ isInfiniteScrollOn: !this.state.isInfiniteScrollOn });
    localStorage.setItem('isInfiniteScrollOn', !this.state.isInfiniteScrollOn);
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
        <label className="d-flex pt-5">
          <span className="align-self-center pr-2">Infinite Scroll</span>
          <Switch onChange={this.handleInfiniteScrollToggle} checked={this.state.isInfiniteScrollOn} />
        </label>
        <InfiniteScroll
          dataLength={this.state.pokemon.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You caught them all!</b>
            </p>
          }
        >
          <Row>
            {cards}
          </Row>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default App;
