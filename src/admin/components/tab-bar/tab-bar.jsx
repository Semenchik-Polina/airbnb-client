import React, { Component } from 'React';
import {
    withRouter, BrowserRouter, Route, NavLink,
} from 'react-router-dom';
import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import PhotoTab from '../photo-tab/photo-tab';
import './tab-bar.scss';

class TabBar extends Component {
    method() {}

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
                        <li className="tabBar__item">
                            <NavLink className="tabBar__tab" to="/admin-home/photos">
                                {'Photos'}
                            </NavLink>
                        </li>
                    </ul>
                    <Route exact path="/admin-home/main-info" component={HotelTab} />
                    <Route exact path="/admin-home/rooms" component={RoomTab} />
                    <Route exact path="/admin-home/services" component={ServiceTab} />
                    <Route exact path="/admin-home/photos" component={PhotoTab} />
                </div>
            </BrowserRouter>
        );
    }
}

export default withRouter(TabBar);
