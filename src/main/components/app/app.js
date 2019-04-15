import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from '../../../shared/tools/history';

import Banner from '../banner/banner';
import Header from '../../../auth/containers/header-container';
import AdminHome from '../../../admin/components/admin-home/admin-home';
import UserHome from '../../../user/containers/user-home-container';
import HotelPage from '../../../hotel/containers/hotel-page-container';
import BookingPage from '../../../booking/containers/booking-page-container';
import PrivateRoute from '../../../shared/containers/private-route-container';
import UserBookings from '../../../user/containers/user-bookings-container';

import { ROLES } from '../../../shared/constants/roles';

const App = () => (
    <Router history={history}>
        <div className="App">
            <Route path="/" component={Header} />
            <Switch>
                <Route exact path="/" component={Banner} />
                <Route exact path="/hotels/:id" component={HotelPage} />
                <PrivateRoute path="/admin-home" requiredRoles={[ROLES.ADMIN]} component={AdminHome} />
                <PrivateRoute path="/books/:id" requiredRoles={[ROLES.USER]} component={BookingPage} />
                <PrivateRoute exact path="/hotels" requiredRoles={[ROLES.USER]} component={UserHome} />
                <PrivateRoute exact path="/:id" requiredRoles={[ROLES.USER]} component={UserHome} />
                <PrivateRoute exact path="/:id/bookings" requiredRoles={[ROLES.USER]} component={UserBookings} />
            </Switch>
            <ToastContainer autoClose={8000} />
        </div>
    </Router>
);

export default App;
