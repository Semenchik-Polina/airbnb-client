import React, { Component } from 'react';

import TabBar from '../tab-bar/tab-bar';
import './admin-home.scss';

class AdminHome extends Component {
    render() {
        return (
            <div>
                <div>Admin`s home!</div>
                <TabBar />
            </div>
        );
    }
}

export default AdminHome;
