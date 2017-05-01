import React from 'react';
import {NavLink} from 'react-router-dom';


export default (props) => {

  return (


          <nav className="navbar navbar-light navbarContainer" role="navigation">
            <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink className='navBarLink' to="/home">
                <img className='logo' src='./hop_island_logo.png'/>
              </NavLink>
            </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><NavLink className="navBarLink" to="/about">About</NavLink></li>
              <li><NavLink className="navBarLink" to="/hops">Hops</NavLink></li>
              <li><NavLink className="navBarLink" to="/buyers">Buyers</NavLink></li>
              <li><NavLink className="navBarLink" to="/shop">Shop</NavLink></li>
              <li><NavLink className="navBarLink" to="/contact">Contact</NavLink></li>
            </ul>

        </div>
      </div>
        </nav>


  );
};
