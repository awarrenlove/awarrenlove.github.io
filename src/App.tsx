import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Router>
        <header className="w-full">
          <Navigation />
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/tech">Technologies</Route>
            <Route path="/contact">Contact</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
