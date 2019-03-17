import React, { Component } from 'React';
import { withRouter, Route, NavLink } from 'react-router-dom';
import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import PhotoTab from '../photo-tab/photo-tab';
import './tab-bar.scss';

class TabBar extends Component {
    method() {}

    render() {
        return (
            <div>
                <ul className="tabBar">
                    <li>
                        <NavLink className="tabBar__tab" exact to="/admin-home/create-new-hotel/main-info">
                            {'Main information'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="tabBar__tab" exact to="/admin-home/create-new-hotel/rooms">
                            {'Rooms'}
                        </NavLink>
                    </li>
                    <li className="tabBar__item">
                        <NavLink className="tabBar__tab" exact to="/admin-home/create-new-hotel/services">
                            {'Services'}
                        </NavLink>
                    </li>
                    <li className="tabBar__item">
                        <NavLink className="tabBar__tab" exact to="/admin-home/create-new-hotel/photos">
                            {'Photos'}
                        </NavLink>
                    </li>
                </ul>
                <Route exact path="/admin-home/create-new-hotel/main-info" component={HotelTab} />
                <Route exact path="/admin-home/create-new-hotel/rooms" component={RoomTab} />
                <Route exact path="/admin-home/create-new-hotel/services" component={ServiceTab} />
                <Route exact path="/admin-home/create-new-hotel/photos" component={PhotoTab} />
            </div>
        );
    }
}

export default withRouter(TabBar);
