import React, { Component } from "react";
class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemonURL: "https://pokeapi.co/api/v2/pokemon/1/",
      selectedPokemonName: "",
     
    };
  }
  toggleClass = (pokemon) => {
    this.setState({ selectedPokemonURL: pokemon.url, selectedPokemonName:pokemon.name });
  };
  render() {
    return (
      <ul style={{ width: "50%", marginTop: "10px" }} className="list-group">
      {this.props.pokemonList["results"].map((pokemon) => (
        <li
          className={
            this.state.selectedPokemonURL === pokemon.url
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={pokemon.url}
          onClick={() => this.toggleClass(pokemon)}
        >
          {pokemon.url.split("/")[6]} {pokemon.name}
        </li>
      ))}
    </ul>
    );
  }
}

export default PokemonList;
