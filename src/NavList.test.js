// NavList.test.js

import { render, unmountComponentAtNode } from "react-dom";

import NavList from "./components/navList/NavList";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
const data = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  {
    name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/",
  }
];

it("renders list of items", () => {
  act(() => {
    render(
      <Router>
        <NavList data={data} />
      </Router>,
      container
    );
  });
    expect(container.querySelector("li").textContent).toBe("bulbasaur - 1","ivysaur - 2");
});
