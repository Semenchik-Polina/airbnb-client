import React, { PureComponent } from 'react';
import {
    NavLink, withRouter, Route, Redirect,
} from 'react-router-dom';

import TabBar from '../../containers/tab-bar-container';

import './admin-home.scss';

class AdminHome extends PureComponent {
    renderAdminActivity() {
        return (
            <div className="admin-home__activity">
                <div className="admin-home__activity-image" />
                <NavLink className="admin-home__activity-link" exact to="/admin-home/create-new-hotel/main-info">
                    Create an awesome new hotel
                </NavLink>
            </div>
        );
    }

    renderRiderect() {
        return <Redirect to="/admin-home/create-new-hotel/main-info" />;
    }

    render() {
        return (
            <div className="admin-home">
                <Route exact path="/admin-home" component={this.renderAdminActivity} />
                <Route exact path="/admin-home/create-new-hotel" component={this.renderRiderect} />
                <Route path="/admin-home/create-new-hotel/" component={TabBar} />
            </div>
        );
    }
}

export default withRouter(AdminHome);
