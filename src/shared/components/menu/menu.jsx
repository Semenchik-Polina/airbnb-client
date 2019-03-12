import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import './menu.scss';

class Menu extends PureComponent {
    static propTypes = {
        showSignupModal: PropTypes.func.isRequired,
        showLoginModal: PropTypes.func.isRequired,
    };

    render() {
        const { showSignupModal, showLoginModal } = this.props;
        return (
            <menu className="menu">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a className="menu__list-action">Become a host</a>
                    </li>
                    <li className="menu__list-item">
                        <NavLink exact to="/admin-home" className="menu__list-action">Help</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-action" onClick={showSignupModal}>
                            {'Sign up'}
                        </a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-action" onClick={showLoginModal}>
                            {'Log in'}
                        </a>
                    </li>
                </ul>
            </menu>
        );
    }
}

export default withRouter(Menu);
