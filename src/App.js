import React, { Component } from "react";
import NavBar from "./components/navbar";
import PokemonList from "./components/pokemonList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
   this.getData();
  }
  getData(){
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1200")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        isLoaded: true,
        pokemonList: json,
      });
    });
  }
  render() {
    var { isLoaded, pokemonList } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <div style={{width: "50%", marginTop:"10px"}}>
          {!isLoaded ? (
            <div className="spinner-border"></div>
          ) : (
            <PokemonList pokemonList={pokemonList} />
          )}
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
