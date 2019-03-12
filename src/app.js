import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AuthPage from './auth/components/auth-page/auth-page';
// import AdminHome from './admin/components/admin-home/admin-home';
import AdminHome from './admin/containers/admin-home-container';
import './reset.css';
import './main.scss';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/admin-home" component={AdminHome} />
        </div>
    </BrowserRouter>
);

export default App;
