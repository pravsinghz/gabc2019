import React, { Component } from 'react';

import agendaList from '../../data/Agenda.json';

import './Agenda.scss';
import AgendaLineItem from './AgendaLineItem';

class Agenda extends Component {

  render() {
    return (
      <div className="container-fluid" id="agenda">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="main-content">
              <h3 className="title">Agenda</h3>
              <div className="content">
                <ul>
                  {agendaList.map(item => <AgendaLineItem session={item}/>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Agenda;
