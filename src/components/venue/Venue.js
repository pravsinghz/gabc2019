import React, { Component } from 'react';

import './Venue.scss';

class Venue extends Component {
  render() {
    return (
      <div className="container-fluid" id="venue">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="main-content">
              <h3 className="title">Venue</h3>
              <p className="content">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3601.4670819545545!2d78.34096359326162!3d17.429031465358758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x460cce4bb8b40e6e!2sMicrosoft+India+Development+Center!5e0!3m2!1sen!2sus!4v1456271412817"
                  style={{border: 0}} allowFullScreen />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Venue;
