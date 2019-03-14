import React, { Component } from 'React';
import {
    withRouter, BrowserRouter, Route, NavLink,
} from 'react-router-dom';
import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import './tab-bar.scss';

class TabBar extends Component {
    render() {
        return (
            <BrowserRouter>
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
                        <li className="tabBar__item">
                            <NavLink className="tabBar__tab" to="/admin-home/services">
                                {'Services'}
                            </NavLink>
                        </li>
                    </ul>

                    <Route path="/admin-home/main-info" component={HotelTab} />
                    <Route path="/admin-home/rooms" component={RoomTab} />
                    <Route path="/admin-home/services" component={ServiceTab} />
                </div>
            </BrowserRouter>
        );
    }
}

export default withRouter(TabBar);
