import React from "react";
import pokeIcon from "./pokeIcon.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">
        <img
          src={pokeIcon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />{" "}
        Pokedex
      </span>
    </nav>
  );
};
export default NavBar;
