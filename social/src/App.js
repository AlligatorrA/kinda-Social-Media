// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./My Components/Home";
import Profile from "./My Components/Profile"
import Search from "./My Components/Search"
import Message from "./My Components/Message"


function App() {
  return (
    <div className="App">
     <Nav/>

     <Switch>  
     <Route path="/My Components/" exact={true} ><Home /></Route>
     <Route path="/My Components/Profile" ><Profile /></Route>
     <Route path="/My Components/Message"> <Message /></Route>
     <Route path="/My Componnts/Search"><Search /> </Route>
      </Switch>
    </div>
  );
}

export default App;
