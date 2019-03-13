import React, { Component } from 'React';
import PropTypes from 'prop-types';
import {
    withRouter, BrowserRouter as Router, Route, NavLink,
} from 'react-router-dom';

import HotelForm from '../../containers/hotel-form-container';
import RoomForm from '../../containers/room-form-container';
import ServiceTab from '../../containers/service-tab-container';
import './tab-bar.scss';

class TabBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="tabBar">
                        <li>
                            <NavLink className="tabBar__tab" to="/admin-home/main-info">
                                {'Main information'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="tabBar__tab" to="/admin-home/rooms">
                                {'Rooms'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="tabBar__tab" to="/admin-home/services">
                                {'Services'}
                            </NavLink>
                        </li>
                    </ul>

                    <Route path="/admin-home/main-info" component={HotelForm}/>
                    <Route path="/admin-home/rooms" component={RoomForm} />
                    <Route path="/admin-home/services" component={ServiceTab} />
                </div>
            </Router>
        );
    }
}

export default withRouter(TabBar);
