import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TabBar from '../tab-bar/tab-bar';
import './admin-home.scss';

class AdminHome extends Component {
    method() {}

    render() {
        return (
            <div className="admin-home">
                <NavLink className="admin-home__link" exact to="/">
                    {'Go Back'}
                </NavLink>
                <TabBar />
            </div>
        );
    }
}

export default AdminHome;
