import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Router>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

class Home extends React.Component {
  render() {
    return (
      <h1>Home</h1>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <h1>About</h1>
    );
  }
}

export default App;
