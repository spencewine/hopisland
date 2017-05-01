import React from 'react';
import store from './store';
import {Route, Switch, BrowserRouter as Router, BrowserHistory} from 'react-router-dom';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import ContactContainer from './containers/ContactContainer.jsx';
import Shop from './components/Shop.jsx';
import Buyers from './components/Buyers.jsx';
import Hops from './components/Hops.jsx';

import Navbar from './components/Navbar.jsx';


const Routes = () => {
  return (
    <Router history={BrowserHistory}>
      <div>
        <Navbar />
        <Route exact path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/hops' component={Hops}/>
        <Route path='/buyers' component={Buyers}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/contact' component={ContactContainer}/>

      </div>
    </Router>
  );
};

export default Routes;
