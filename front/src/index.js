// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
// import Vote from './components/Vote';
// import List from './components/List';

ReactDOM.render((
  	<Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
  </Router>
  ), document.getElementById('root'))
