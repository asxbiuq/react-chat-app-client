import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class LeftMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="chatGroup" className="menu-item" href="/chatGroup">chatGroup</a>
        <a id="dialogue" className="menu-item" href="/dialogue">dialogue</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default LeftMenu