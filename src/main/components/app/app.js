import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../../../shared/tools/history';

import AuthPage from '../../../auth/containers/auth-page-container';
import AdminHome from '../../../admin/components/admin-home/admin-home';
import PrivateRoute from '../../../shared/containers/private-route-container';

const App = () => (
    <Router history={history}>
        <div className="App">
            <Route path="/" component={AuthPage} />
            <PrivateRoute path="/admin-home" requiredRoles={['Admin']} component={AdminHome} />
        </div>
    </Router>
);

export default App;
