import React from 'react';
import classNames from 'classnames';

function Icon(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
        <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className={classNames('fa', props.name, 'fa-stack-1x fa-inverse')}/>
        </span>
    </a>
  );
}

export default Icon;
