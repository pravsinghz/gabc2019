import React from 'react';

import './Navbar.scss';

function Navbar(){
  return (
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">

      <div className="container-fluid">

        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target="#gabc-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">MUGH</a>
        </div>

        <div className="collapse navbar-collapse" id="gabc-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#speakers">Speakers</a>
            </li>
            <li>
              <a href="#registration">Registration</a>
            </li>
            <li>
              <a href="#venue">Venue</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;