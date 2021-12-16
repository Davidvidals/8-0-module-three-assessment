import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies"
import People from "./components/People"
import Locations from "./components/Locations"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import React from "react";
import Nav from "./components/Nav";


function App() {
  return (
    
      <div className='App'>
        <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path ='/movies' >
            <Movies/>
          </Route>
          <Route path ='/people'>
            <People/>
          </Route>
          <Route path ='/locations'>
            <Locations/>
          </Route>
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;