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
  console.log(process.env.PUBLIC_URL)
  return (
    <React.Fragment>
      <Router basename="/">
        <NavBar />
        <main className="app-container">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePageContainer} />
            <Route path={`${process.env.PUBLIC_URL}/pokemon/:id`} component={DetailsContainer} />
            <Route path={`${process.env.PUBLIC_URL}/404`} component={NotFound} />
            <Redirect to={`${process.env.PUBLIC_URL}/404`} />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}
export default App;
