import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PhotoItem from '../../../shared/components/photo-item/photo-item';

import history from '../../../shared/tools/history';
import devideArray from '../../../shared/tools/devideArray';

import './user-home.scss';

class UserHome extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                mainInfo: PropTypes.shape({
                    country: PropTypes.string.isRequired,
                    city: PropTypes.string.isRequired,
                    hotelName: PropTypes.string.isRequired,
                    address: PropTypes.string.isRequired,
                }).isRequired,
                roomTypes: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        amount: PropTypes.number.isRequired,
                        capacity: PropTypes.number.isRequired,
                        cost: PropTypes.number.isRequired,
                        type: PropTypes.string.isRequired,
                    }),
                ).isRequired,
                services: PropTypes.shape({
                    internet: PropTypes.string.isRequired,
                    parking: PropTypes.string.isRequired,
                    breakfast: PropTypes.string.isRequired,
                    facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
                }).isRequired,
                photoTour: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        type: PropTypes.string.isRequired,
                        photos: PropTypes.arrayOf(
                            PropTypes.shape({
                                src: PropTypes.string.isRequired,
                            }),
                        ).isRequired,
                    }),
                ).isRequired,
            }),
        ).isRequired,

        fetchHotels: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels();
    }

    flatImageArray = photoTour => ({
        photos: _.flattenDeep(photoTour.map(tour => tour.photos)),
    });

    render() {
        return (
            <div className="user-home">
                {this.props.hotels.length > 0 && (
                    <section className="user-home__hotels">
                        <span className="user-home__hotels-header">Hotels</span>
                        <div className="user-home__hotels-containers">
                            {devideArray(this.props.hotels, 3).map((container, index) => (
                                <div key={index} className="user-home__hotels-containers-wrapper">
                                    {container.map(hotel => (
                                        <div key={hotel.id} className="user-home__hotels-containers-wrapper-item">
                                            <PhotoItem photoItem={this.flatImageArray(hotel.photoTour)} />
                                            <span className="user-home__hotels-containers-wrapper-item-name">
                                                {hotel.mainInfo.hotelName}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        );
    }
}

export default UserHome;
