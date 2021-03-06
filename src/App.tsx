import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <header className="w-full">
          <Navigation />
        </header>
        <div className="container mt-4">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tech">
              <Technologies />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
