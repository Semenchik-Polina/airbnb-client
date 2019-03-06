import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

class Menu extends PureComponent {
    render() {
        const { showSignupModal, showLoginModal } = this.props;
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
                        <a className="menu__list-action" onClick={showSignupModal}>Sign up</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-action" onClick={showLoginModal}>Log in</a>
                    </li>
                </ul>
            </menu>
        );
    }
}

Menu.propTypes = {
    showSignupModal: PropTypes.func.isRequired,
    showLoginModal: PropTypes.func.isRequired,
};

export default Menu;
