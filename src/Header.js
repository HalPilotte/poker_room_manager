import React from 'react';
import logo from './resources/palace_logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      url: logo,
    };
  }
  render() {
    return [
      <header>
        <img src= {this.state.url} alt="Palace Logo" />
        <h1>High Hand</h1>
      </header>,
      <hr/>
    ];
  }
};

export default Header;