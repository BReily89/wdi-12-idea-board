import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LoginPage from './components/login/LoginPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div> 
            <Link to="/">Home</Link>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <Link to="idea">Idea</Link>
          </div>
          <Switch>  
            <Route exact path = "/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/idea" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
  
    );
  }
}

export default App;
