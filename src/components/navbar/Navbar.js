import React from 'react';

import './Navbar.scss';

function Navbar(){
  return (
    <nav className="navbar fixed-top navbar-custom navbar-expand-lg">




      {/*<button type="button" className="navbar-toggle"*/}
      {/*        data-target="#gabc-navbar-collapse-1">*/}
      {/*  <span className="navbar-toggler-icon"/>*/}
      {/*</button>*/}

      {/*<div className="navbar-header page-scroll">*/}
      {/*  */}
      {/*</div>*/}




      <div className="container-fluid">

        <a className="navbar-brand" href="index.html">MUGH</a>

        <div className="collapse navbar-collapse" id="gabc-navbar-collapse-1">
          <ul className="nav navbar-nav">
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
