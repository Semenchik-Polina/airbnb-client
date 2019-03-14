import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TabBar from '../tab-bar/tab-bar';
import './admin-home.scss';

class AdminHome extends Component {
    method() {}

    render() {
        return (
            <div>
                <div>Admin`s home!</div>
                <NavLink exact to="/">
                    {'Go Home'}
                </NavLink>
                <TabBar />
            </div>
        );
    }
}

export default AdminHome;
