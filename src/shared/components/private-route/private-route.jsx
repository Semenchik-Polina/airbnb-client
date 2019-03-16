import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
    component: Components, isLoggedIn, role, requiredRoles, ...rest
}) => {
    if (isLoggedIn && requiredRoles.includes(role)) {
        return <Route {...rest} render={props => <Components {...props} />} />;
    }
    return <Redirect exact to="/" />;
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
    requiredRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrivateRoute;
