import React, { Component } from 'react';

import agendaList from '../../data/Agenda.json';

import SpeakerLineItem from './SpeakerLineItem';

import './Speakers.scss';


class Speakers extends Component {
  render() {

    let speakersList = [];

    agendaList.forEach(({ speakers = [] }) => {
      speakersList = speakersList.concat(speakers);
    });


    return (
      <div className="container-fluid" id="speakers">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="main-content">
              <h3 className="title">Speakers</h3>
              <div className="content">
                <ul className="speakers-list">
                  {speakersList.map((item, index) => <SpeakerLineItem key={index} speaker={item}/>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Speakers;
