import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    NavLink, withRouter, Route, Redirect,
} from 'react-router-dom';

import _ from 'lodash';

import TabBar from '../../containers/tab-bar-container';
import PhotoItem from '../photo-item/photo-item';

import './admin-home.scss';

class AdminHome extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        fetchHotels: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels();
    }

    renderHotel = (hotel) => {
        const item = { photos: _.flattenDeep(hotel.photos.map(photoContainer => photoContainer.photos)) };
        return item;
    };

    renderAdminActivity = () => (
        <div className="admin-home">
            <div className="admin-home__activity">
                <div className="admin-home__activity-image" />
                <NavLink className="admin-home__activity-link" exact to="/admin-home/create-new-hotel/main-info">
                    Create an awesome new hotel
                </NavLink>
            </div>
            {this.props.hotels.length > 0 && (
                <section className="admin-home__hotels">
                    {this.props.hotels.map((hotel, index) => (
                        <div key={index} className="finish-tab__tour-gallery-item">
                            <PhotoItem photoItem={this.renderHotel(hotel)} />
                            <span className="finish-tab__tour-gallery-item-categoty">
                                {hotel.mainInfo.hotelName}
                            </span>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );

    renderRiderect() {
        return <Redirect to="/admin-home/create-new-hotel/main-info" />;
    }

    render() {
        return (
            <div className="admin-home">
                <Route exact path="/admin-home" component={this.renderAdminActivity} />
                <Route exact path="/admin-home/create-new-hotel" component={this.renderRiderect} />
                <Route path="/admin-home/create-new-hotel/" component={TabBar} />
            </div>
        );
    }
}

export default withRouter(AdminHome);
