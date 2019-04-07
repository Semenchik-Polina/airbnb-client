import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

import { NavLink, withRouter } from 'react-router-dom';
import AirbnbSvg from '../airbnb-svg/airbnb-svg';

import './menu.scss';

class Menu extends PureComponent {
    static defaultProps = {
        user: null,
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
        isLight: PropTypes.bool.isRequired,
    };

    render() {
        const {
            showSignupModal, showLoginModal, logout, user, isLight,
        } = this.props;
        const isUserValidated = !!user;

        const homeUrl = isUserValidated && (user.role === 'Admin' ? '/admin-home' : '/hotels');
        const menuClasses = classNames('menu', { menu_light: isLight });

        return (
            <menu className={menuClasses}>
                <div>
                    <NavLink exact to="/" className="menu__logo">
                        <AirbnbSvg color={isLight ? 'red' : 'white'} />
                    </NavLink>
                </div>
                <div>
                    <ul className="menu__list">
                        <li className="menu__list-item" />
                        {isUserValidated && (
                            <li className="menu__list-item">
                                <NavLink exact to={homeUrl} className="menu__list-action">
                                    {user.role === 'Admin' ? 'Admin panel' : 'Hotels'}
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
                        {isUserValidated && user.role === 'User' && (
                            <li className="menu__list-item">
                                <NavLink exact to={`/${user._id}/bookings`} className="menu__list-action">
                                    {'My trips'}
                                </NavLink>
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
                </div>
            </menu>
        );
    }
}

export default withRouter(Menu);
