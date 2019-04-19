import React, { Component } from 'react';
import { About, Agenda, Footer, Header, Navbar, Registration, Speakers, Venue } from '../../components';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<Navbar/>*/}
        <Header/>
        <About/>
        <Agenda/>
        <Speakers/>
        <Registration/>
        <hr/>
        <Venue/>
        <hr/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;
