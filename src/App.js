import "./App.css";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import DetailsContainer from "./containers/DetailsContainer";
import ListContainer from "./containers/ListContainer";
import MasterDetailsLayout from "./components/layouts/MasterDetails";
import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/navList/NotFound";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <main className="app-container">
        <MasterDetailsLayout>
          <ListContainer />
          
          <Switch>
            <Route path="/pokemon/:id" component={DetailsContainer} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          </MasterDetailsLayout>
        </main>
      </Router>
    </React.Fragment>
  );
}
export default App;
