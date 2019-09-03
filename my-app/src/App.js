import React from 'react';
import './App.scss';
import Home from './home';
import Charlie from './charlie';
import Tianna from './tianna';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/charliecatania" component={Charlie} />
          <Route path="/tiannacatania" component={Tianna} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
