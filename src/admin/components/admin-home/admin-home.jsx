import React, { PureComponent, Fragment } from 'react';

import { Route, Redirect } from 'react-router-dom';
import AdminPanel from '../../containers/admin-panel-container';

import TabBar from '../../containers/tab-bar-container';

class AdminHome extends PureComponent {
    renderRiderect() {
        return <Redirect to="/admin-home/create-new-hotel/main-info" />;
    }

    render() {
        return (
            <Fragment>
                <Route exact path="/admin-home" component={AdminPanel} />
                <Route exact path="/admin-home/create-new-hotel" component={this.renderRiderect} />
                <Route path="/admin-home/create-new-hotel/" component={TabBar} />
            </Fragment>
        );
    }
}

export default AdminHome;
