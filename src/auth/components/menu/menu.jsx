import React, {Component} from 'react';
import './menu.scss';

class Menu extends Component {
  handleShowMessageClick = () => {
    this.props.handleShowMessageClick();
  };

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
            <a className="menu__list-action" onClick={this.handleShowMessageClick}>
              Sign up
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-action">Log in</a>
          </li>
        </ul>
      </menu>
    );
  }
}

export default Menu;
