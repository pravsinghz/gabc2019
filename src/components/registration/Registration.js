import React, { Component } from 'react';

import './Registration.scss';

class Registration extends Component {

  static exampleCallback() {
    console.log('Order complete!');
  };

  componentDidMount() {
    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '59877746953',
      iframeContainerId: 'eventbrite-widget-container-59877746953',

      // Optional
      iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: Registration.exampleCallback  // Method called when an order has successfully completed
    });
  }

  render() {
    return (
      <div className="container-fluid" id="registration">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="main-content">
              <h3 className="title">Registration</h3>
              <div className="content">
                <div className="eventbrite-iframe-wrapper">
                  <div id="eventbrite-widget-container-59877746953"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
