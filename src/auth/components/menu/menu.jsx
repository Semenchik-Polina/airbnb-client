import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import './menu.scss';

class Menu extends PureComponent {
    static defaultProps = {
        user: {},
    };

    static propTypes = {
        user: PropTypes.shape({
            _id: PropTypes.string,
            email: PropTypes.string,
            role: PropTypes.string,
        }),
        showSignupModal: PropTypes.func.isRequired,
        showLoginModal: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
    };

    render() {
        const {
            showSignupModal, showLoginModal, logout, user,
        } = this.props;
        const isUserValidated = Boolean(Object.entries(user).length);

        const homeUrl = isUserValidated && (user.role === 'Admin' ? '/admin-home' : '/');
        return (
            <menu className="menu">
                <ul className="menu__list">
                    {isUserValidated && (
                        <li className="menu__list-item">
                            <NavLink exact to={homeUrl} className="menu__list-action">
                                {'Home'}
                            </NavLink>
                        </li>
                    )}
                    {isUserValidated || (
                        <li className="menu__list-item">
                            <a className="menu__list-action" onClick={showSignupModal}>
                                {'Sign up'}
                            </a>
                        </li>
                    )}
                    {isUserValidated || (
                        <li className="menu__list-item">
                            <a className="menu__list-action" onClick={showLoginModal}>
                                {'Log in'}
                            </a>
                        </li>
                    )}
                    {!isUserValidated || (
                        <li className="menu__list-item">
                            <a className="menu__list-action" onClick={logout}>
                                {'Log out'}
                            </a>
                        </li>
                    )}
                </ul>
            </menu>
        );
    }
}

export default withRouter(Menu);
