import React, {Component} from 'react';
import './menu.scss';

class Menu extends Component {
  render() {
    return (
      <menu className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <a className="menu__list-action">Become a host</a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-action">Help</a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-action" onClick={this.props.handleShowSignupModal}>
              Sign up
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-action" onClick={this.props.handleShowLoginModal}>Log in</a>
          </li>
        </ul>
      </menu>
    );
  }
}

export default Menu;
