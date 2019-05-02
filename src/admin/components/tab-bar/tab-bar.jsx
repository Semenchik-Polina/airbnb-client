import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    withRouter, Route, NavLink, Redirect,
} from 'react-router-dom';
import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import FinishTab from '../../containers/finish-tab-container';

import './tab-bar.scss';

class TabBar extends PureComponent {
    static propTypes = {
        isMainInfoFilled: PropTypes.bool.isRequired,
        isRoomFormFilled: PropTypes.bool.isRequired,
        isServiceFormFilled: PropTypes.bool.isRequired,
    };

    redirectToMainForm = () => <Redirect exact to="/admin-home/create-new-hotel/main-info" />;

    // an error occurs because of reduxForm in container, so i have to place tab in a method
    renderServiceTab = () => <ServiceTab />;

    render() {
        const { isMainInfoFilled, isRoomFormFilled, isServiceFormFilled } = this.props;

        const roomTabClasses = classNames('tab-bar__links-item', {
            'tab-bar__links-item_disabled': !isMainInfoFilled,
        });

        const serviceTabClasses = classNames('tab-bar__links-item', {
            'tab-bar__links-item_disabled': !isRoomFormFilled,
        });

        const finishTabClasses = classNames('tab-bar__links-item', {
            'tab-bar__links-item_disabled': !isServiceFormFilled,
        });

        return (
            <div className="tab-bar">
                <ul className="tab-bar__links">
                    <li>
                        <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/main-info">
                            Main information
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={roomTabClasses} exact to="/admin-home/create-new-hotel/rooms">
                            Rooms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={serviceTabClasses} exact to="/admin-home/create-new-hotel/services">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={finishTabClasses} exact to="/admin-home/create-new-hotel/finish">
                            Finish
                        </NavLink>
                    </li>
                </ul>
                <div className="tab-bar__route">
                    <Route exact path="/admin-home/create-new-hotel/main-info" component={HotelTab} />
                    <Route
                        exact
                        path="/admin-home/create-new-hotel/rooms"
                        component={isMainInfoFilled ? RoomTab : this.redirectToMainForm}
                    />
                    <Route
                        exact
                        path="/admin-home/create-new-hotel/services"
                        render={isRoomFormFilled ? this.renderServiceTab : this.redirectToMainForm}
                    />
                    <Route
                        exact
                        path="/admin-home/create-new-hotel/finish"
                        component={isServiceFormFilled ? FinishTab : this.redirectToMainForm}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(TabBar);
