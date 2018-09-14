import * as React from 'react';
import './header.css';

import logo from './logo.svg';

class Header extends React.Component {
  public render() {
    return (
      <div className="Header-container">
        <header className="Header-main">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">ToDo List</h1>
        </header>       
      </div>
    );
  }
}

export default Header;