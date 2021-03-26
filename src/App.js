import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import Home from './pages/Home';
import Demos from './pages/Demos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/demos' component={Demos} />
      </Switch>
    </Router>
  );
}

export default App;
