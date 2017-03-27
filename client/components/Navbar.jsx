import React from 'react';
import {NavLink} from 'react-router-dom';


export default (props) => {

  return (
    <nav className="nav navbar-default">
    <div className="container-fluid">
      <div className="navbar navbar-fixed-top" role="navigation">
        <div className="collapse navbar-collapse">

            <NavLink to="/about">About</NavLink>

            <NavLink to="/buyers">Buyers</NavLink>
            <NavLink to="/shop">Shop</NavLink>

            <NavLink to="/contact">Contact</NavLink>

        </div>
        </div>
    </div>
    </nav>
  );
};
