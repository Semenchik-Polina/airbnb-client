import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AuthPage from '../../../auth/containers/auth-page-container';
import AdminHome from '../../../admin/components/admin-home/admin-home';
import PrivateRoute from '../../../shared/containers/private-route-container';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <Route path="/" component={AuthPage} />
            <PrivateRoute path="/admin-home" requiredRoles={['Admin']} component={AdminHome} />
        </div>
    </BrowserRouter>
);

export default App;
