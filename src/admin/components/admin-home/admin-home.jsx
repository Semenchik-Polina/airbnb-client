import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
    NavLink, withRouter, Route, Redirect,
} from 'react-router-dom';

import Tool from '../../../shared/components/tool/tool';
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

    flatImageArray = photos => ({
        photos: _.flattenDeep(photos.map(photoContainer => photoContainer.photos)),
    });

    removeHotel = hotel => () => {};

    editHotel = hotel => () => {};

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
                    <span className="admin-home__hotels-header">Hotels</span>
                    <div className="admin-home__hotels-container">
                        {this.props.hotels.map((hotel, index) => (
                            <div
                                key={index}
                                className="admin-home__hotels-container-item"
                            >
                                <Tool
                                    src="/images/tools/delete.png"
                                    className="admin-home__hotels-container-item-delete"
                                    handleClick={this.removeHotel(hotel)}
                                />
                                <Tool
                                    src="/images/tools/edit.png"
                                    className="admin-home__hotels-container-item-edit"
                                    handleClick={this.editHotel(hotel)}
                                />
                                <PhotoItem photoItem={this.flatImageArray(hotel.photos)} />
                                <span className="admin-home__hotels-container-item-name">
                                    {hotel.mainInfo.hotelName}
                                </span>
                            </div>
                        ))}
                    </div>
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
