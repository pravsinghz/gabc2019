import React, { Component } from 'react';
import Icon from '../icon/Icon';

import './Footer.scss';
import iconsList from './Icons';

class Footer extends Component {

  static renderIconLineItem(icon, index) {
    return (
      <li className="list-inline-item" key={index}>
        <Icon url={icon.url} name={icon.name}/>
      </li>
    );
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <ul className="list-inline text-center">
                {iconsList.map(Footer.renderIconLineItem)}
              </ul>
              <p className="copyright text-muted">Copyright &copy; Microsoft User Group Hyderabad 2018</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
