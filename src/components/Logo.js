import React from 'react';
import logo from './logo.svg';

const Logo = (props) => {
  return <img src={logo} className="App-logo" alt={props.alt} />
}

Logo.defaultProps = {
  alt: "Default Alt"
}

export default Logo