import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="container-fluid" id="about">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="main-content">
              <h3 className="welcome-title">The Global Azure Bootcamp Welcomes You!</h3>
              <h3 className="title">About</h3>
              <p className="content">
                Welcome to Global Azure Bootcamp! On, Saturday, April 27<sup>th</sup>, 2019 we are out to set some
                records again! It's a one full day of deep dive sessions on Azure for Developers, Architects and
                IT Pro's delivered by the industry experts and Microsoft MVPs to get you started on Azure Cloud
                Computing topics like Machine Learning, Internet of Things, Service Fabric, Virtual Machines, Mobile
                Services and App Services.
              </p>
              <p className="welcome-content">
                <iframe title="video"
                        src="https://www.youtube.com/embed/rumQjj2ZImk?rel=0&amp;controls=0&amp;showinfo=0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;