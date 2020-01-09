import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import UserPage from './components/UserPage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/:username' component={UserPage}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
