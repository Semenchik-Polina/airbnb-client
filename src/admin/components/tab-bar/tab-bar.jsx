import React, { PureComponent, Fragment } from 'React';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter, Route, NavLink } from 'react-router-dom';

import HotelTab from '../../containers/hotel-tab-container';
import RoomTab from '../../containers/room-tab-container';
import ServiceTab from '../../containers/service-tab-container';
import PhotoTab from '../../containers/photo-tab-container';
import FinishTab from '../../containers/finish-tab-container';

import './tab-bar.scss';

class TabBar extends PureComponent {
    static propTypes = {
        hotelFormSubmitSucceeded: PropTypes.bool.isRequired,
        roomFormSubmitSucceeded: PropTypes.bool.isRequired,
        serviceFormSubmitSucceeded: PropTypes.bool.isRequired,
        photoFormSubmitSucceeded: PropTypes.bool.isRequired,
    };

    render() {
        const {
            hotelFormSubmitSucceeded,
            roomFormSubmitSucceeded,
            serviceFormSubmitSucceeded,
            photoFormSubmitSucceeded,
        } = this.props;

        // const roomTabClasses = classNames('tab-bar__links-item', {
        //     'tab-bar__links-item_disabled': !hotelFormSubmitSucceeded,
        // });

        // const serviceTabClasses = classNames('tab-bar__links-item', {
        //     'tab-bar__links-item_disabled': !hotelFormSubmitSucceeded || !roomFormSubmitSucceeded,
        // });

        // const photoTabClasses = classNames('tab-bar__links-item', {
        //     'tab-bar__links-item_disabled':
        //         !hotelFormSubmitSucceeded || !roomFormSubmitSucceeded || !serviceFormSubmitSucceeded,
        // });

        // const finishTabClasses = classNames('tab-bar__links-item', {
        //     'tab-bar__links-item_disabled':
        //         !hotelFormSubmitSucceeded
        //         || !roomFormSubmitSucceeded
        //         || !serviceFormSubmitSucceeded
        //         || !photoFormSubmitSucceeded,
        // });

        const roomTabClasses = classNames('tab-bar__links-item');

        const serviceTabClasses = classNames('tab-bar__links-item');

        const photoTabClasses = classNames('tab-bar__links-item');

        const finishTabClasses = classNames('tab-bar__links-item');

        return (
            // <div className="tab-bar">
            //     <ul className="tab-bar__links">
            //         <li>
            //             <NavLink className="tab-bar__links-item" exact to="/admin-home/create-new-hotel/main-info">
            //                 Main information
            //             </NavLink>
            //         </li>
            //         <li>
            //             <NavLink className={roomTabClasses} exact to="/admin-home/create-new-hotel/rooms">
            //                 Rooms
            //             </NavLink>
            //         </li>
            //         <li>
            //             <NavLink className={serviceTabClasses} exact to="/admin-home/create-new-hotel/services">
            //                 Services
            //             </NavLink>
            //         </li>
            //         <li>
            //             <NavLink className={photoTabClasses} exact to="/admin-home/create-new-hotel/photos">
            //                 Photos
            //             </NavLink>
            //         </li>
            //         <li>
            //             <NavLink className={finishTabClasses} exact to="/admin-home/create-new-hotel/finish">
            //                 Finish
            //             </NavLink>
            //         </li>
            //     </ul>
            //     <div className="tab-bar__route">
            //         <Route exact path="/admin-home/create-new-hotel/main-info" component={HotelTab} />
            //         {hotelFormSubmitSucceeded && (
            //             <Fragment>
            //                 <Route exact path="/admin-home/create-new-hotel/rooms" component={RoomTab} />
            //                 {roomFormSubmitSucceeded && (
            //                     <Fragment>
            //                         <Route
            //                             exact
            //                             path="/admin-home/create-new-hotel/services"
            //                             render={() => <ServiceTab />}
            //                         />
            //                         <Route exact path="/admin-home/create-new-hotel/photos" component={PhotoTab} />
            //                         <Route exact path="/admin-home/create-new-hotel/finish" component={FinishTab} />
            //                     </Fragment>
            //                 )}
            //             </Fragment>
            //         )}
            //     </div>
            // </div>
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
                        <NavLink className={photoTabClasses} exact to="/admin-home/create-new-hotel/photos">
                            Photos
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
                    <Route exact path="/admin-home/create-new-hotel/rooms" component={RoomTab} />
                    <Route exact path="/admin-home/create-new-hotel/services" render={() => <ServiceTab />} />
                    <Route exact path="/admin-home/create-new-hotel/photos" component={PhotoTab} />
                    <Route exact path="/admin-home/create-new-hotel/finish" component={FinishTab} />
                </div>
            </div>
        );
    }
}

export default withRouter(TabBar);
