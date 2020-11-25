import React from "react";
import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search" component={Peliculas} />

          <Route path="/pelicula/:id" component={MovieDetails} />
          <Redirect from="/pelicula/:id" to="/movie/:id" />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
