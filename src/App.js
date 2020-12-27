import "./App.css";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import DetailsContainer from "./containers/DetailsContainer";
import HomePageContainer from "./containers/HomePageContainer";
import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/navList/NotFound";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <main className="app-container">
          <Switch>
            <Route path="/pokedex" component={HomePageContainer} />
            <Route path="/pokemon/:id" component={DetailsContainer} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}
export default App;
