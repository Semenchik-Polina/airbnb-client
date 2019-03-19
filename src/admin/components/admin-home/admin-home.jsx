import React, { PureComponent } from 'react';
import { NavLink, withRouter, Route } from 'react-router-dom';

import TabBar from '../tab-bar/tab-bar';

import './admin-home.scss';

class AdminHome extends PureComponent {
    renderAdminActivity() {
        return (
            <div className="admin-home__activity">
                <div className="admin-home__activity-image" />
                <NavLink className="admin-home__activity-link" exact to="/admin-home/create-new-hotel">
                    Create an awesome new hotel
                </NavLink>
            </div>
        );
    }

    render() {
        return (
            <div className="admin-home">
                <Route exact path="/admin-home" component={this.renderAdminActivity} />
                <Route path="/admin-home/create-new-hotel" component={TabBar} />
            </div>
        );
    }
}

export default withRouter(AdminHome);
