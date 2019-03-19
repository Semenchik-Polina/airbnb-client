import React from 'React';
import { withRouter, Route, NavLink } from 'react-router-dom';

import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import PhotoTab from '../photo-tab/photo-tab';

import './tab-bar.scss';

const TabBar = () => (
    <div className="tab-bar">
        <ul className="tab-bar__links">
            <li>
                <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/main-info">
                    {'Main information'}
                </NavLink>
            </li>
            <li>
                <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/rooms">
                    {'Rooms'}
                </NavLink>
            </li>
            <li>
                <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/services">
                    {'Services'}
                </NavLink>
            </li>
            <li>
                <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/photos">
                    {'Photos'}
                </NavLink>
            </li>
        </ul>
        <div className="tab-bar__route">
            <Route exact path="/admin-home/create-new-hotel/main-info" component={HotelTab} />
            <Route exact path="/admin-home/create-new-hotel/rooms" component={RoomTab} />
            <Route exact path="/admin-home/create-new-hotel/services" component={ServiceTab} />
            <Route exact path="/admin-home/create-new-hotel/photos" component={PhotoTab} />
        </div>
    </div>
);

export default withRouter(TabBar);
