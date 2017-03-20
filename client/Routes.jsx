import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';


const Home = () => {
  return (
  <div>
  <h1>HOME</h1>
  </div>
  );
};

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home}/>
    </Router>
  );
}
