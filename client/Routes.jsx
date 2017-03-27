import React from 'react';
import store from './store';
import {Route, Switch, BrowserRouter as Router, BrowserHistory} from 'react-router-dom';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';

import Shop from './components/Shop.jsx';
import Buyers from './components/Buyers.jsx';


import Navbar from './components/Navbar.jsx';


const Routes = () => {
  return (
    <Router history={BrowserHistory}>
      <div>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>

        <Route path='/buyers' component={Buyers}/>
        <Route path='/shop' component={Shop}/>

        <Route path='/contact' component={Contact}/>

      </div>
    </Router>
  );
};

export default Routes;
