import React, { Component } from "react";
class PokemonList extends Component {
  render() {
    return (
      <div className="list-group">
        {this.props.pokemonList["results"].map((pokemon) => (
          <ol
            href={pokemon.url}
            className="list-group-item list-group-item-action"
            key={pokemon.url}
          >
            {pokemon.url.split("/")[6]} {pokemon.name}
          </ol>
        ))}
      </div>
    );
  }
}

export default PokemonList;
