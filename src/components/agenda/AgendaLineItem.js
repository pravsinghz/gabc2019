import React, { Component } from 'react';

import './Agenda.scss';

class AgendaLineItem extends Component {

  constructor(props) {
    super(props);
    AgendaLineItem.renderSpeakers = AgendaLineItem.renderSpeakers.bind(this);
  }

  static renderSessionTypeTwo(session) {
    const { sessionTime, sessionTitle } = session;

    return (
      <React.Fragment>
        <time className="time-slot1">{sessionTime}</time>
        <div className="session">{sessionTitle}</div>
      </React.Fragment>
    );
  }

  static renderSessionTypeOne(session) {
    const { sessionTime, sessionTitle, speakers = [] } = session;

    return (
      <React.Fragment>
        <time className="time-slot2">{sessionTime}</time>
        <div className="session">{sessionTitle}<br/> -&nbsp;
          {speakers.map(AgendaLineItem.renderSpeakers)}
        </div>
      </React.Fragment>
    );
  }

  static renderSpeakers(speaker, index) {
    const { name } = speaker;
    // const link = `speakers.html#${name.replace(' ', '').toLowerCase()}`;

    // return (
    //   <a key={uuidv4()} href={link} target="_self">{name}&nbsp;</a>
    // );

    return (
      <span key={index} href="#">{name}&nbsp;</span>
    );
  }

  render() {
    const { session } = this.props;

    return (
      <li>
        {session.sessionType === 1 ? AgendaLineItem.renderSessionTypeOne(session) : AgendaLineItem.renderSessionTypeTwo(session)}
      </li>
    );
  }
}

export default AgendaLineItem;
