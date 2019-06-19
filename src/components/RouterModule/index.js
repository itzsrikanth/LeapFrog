import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.scss';

import DBClient from '../DBClient';

export default function RouterModule() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/test1">Test1</Link>
        <Link to="/mark1">Mark1</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" >
            <Route path="/" component={DBClient} />
            <Route path="/test1" component={Test1} />
            <Route path="/mark1" component={Mark1} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

class About extends React.Component {
  render() {
    return (
      <h1>ABout</h1>
    );
  }
}

class Test1 extends React.Component {
  render() {
    return (
      <h1>Test 1</h1>
    );
  }
}

class Mark1 extends React.Component {
  render() {
    return (
      <h1>Mark 1</h1>
    );
  }
}