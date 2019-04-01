import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from '../../../shared/tools/history';

import AuthPage from '../../../auth/containers/auth-page-container';
import AdminHome from '../../../admin/components/admin-home/admin-home';
import UserHome from '../../../user/containers/user-home-container';
import HotelPage from '../../../hotel/containers/hotel-page-container';
import PrivateRoute from '../../../shared/containers/private-route-container';

const App = () => (
    <Router history={history}>
        <div className="App">
            <Route path="/" component={AuthPage} />
            <Switch>
                <Route exact path="/hotels/:id" component={HotelPage} />
                <PrivateRoute path="/admin-home" requiredRoles={['Admin']} component={AdminHome} />
                <PrivateRoute exact path="/" requiredRoles={['User']} component={UserHome} />
            </Switch>
            <ToastContainer autoClose={8000} />
        </div>
    </Router>
);

export default App;
