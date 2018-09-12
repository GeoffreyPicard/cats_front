// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import List from './components/List/List';

ReactDOM.render((
  	<Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
      </div>
  </Router>
  ), document.getElementById('root'))
