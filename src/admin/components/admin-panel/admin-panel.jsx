import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Tool from '../../../shared/components/tool/tool';
import PhotoItem from '../../../shared/components/photo-item/photo-item';

import devideArray from '../../../shared/tools/devideArray';

import './admin-panel.scss';

class AdminPanel extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
                address: PropTypes.string.isRequired,
                roomTypes: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        amount: PropTypes.number.isRequired,
                        capacity: PropTypes.number.isRequired,
                        cost: PropTypes.number.isRequired,
                        type: PropTypes.string.isRequired,
                    }),
                ).isRequired,
                services: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        facility: PropTypes.shape({
                            id: PropTypes.string.isRequired,
                            hint: PropTypes.string,
                            imageUrl: PropTypes.string,
                            canBePaid: PropTypes.bool.isRequired,
                        }),
                        price: PropTypes.number,
                    }),
                ).isRequired,
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
        removeHotel: PropTypes.func.isRequired,
        startEditingHotel: PropTypes.func.isRequired,
        startCreatingHotel: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels();
    }

    flatImageArray = photoTour => ({
        photos: _.flattenDeep(photoTour.map(tour => tour.photos)),
    });

    removeHotel = hotel => () => {
        this.props.removeHotel(hotel.id);
    };

    startEditingHotel = hotel => () => {
        this.props.startEditingHotel(hotel);
    };

    startCreatingHotel = () => {
        this.props.startCreatingHotel();
    };

    render() {
        return (
            <div className="admin-panel">
                <div className="admin-panel__activity">
                    <div className="admin-panel__activity-image" />
                    <button type="button" className="admin-panel__activity-link" onClick={this.startCreatingHotel}>
                        Create an awesome new hotel
                    </button>
                </div>
                {this.props.hotels.length > 0 && (
                    <section className="admin-panel__hotels">
                        <span className="admin-panel__hotels-header">Hotels</span>
                        <div className="admin-panel__hotels-containers">
                            {devideArray(this.props.hotels, 3).map((container, index) => (
                                <div key={index} className="admin-panel__hotels-containers-wrapper">
                                    {container.map(hotel => (
                                        <div key={hotel.id} className="admin-panel__hotels-containers-wrapper-item">
                                            <Tool
                                                src="/images/tools/delete.png"
                                                className="admin-panel__hotels-containers-wrapper-item-delete"
                                                handleClick={this.removeHotel(hotel)}
                                            />
                                            <Tool
                                                src="/images/tools/edit.png"
                                                className="admin-panel__hotels-containers-wrapper-item-edit"
                                                handleClick={this.startEditingHotel(hotel)}
                                            />
                                            <PhotoItem photos={this.flatImageArray(hotel.photoTour).photos} />
                                            <span className="admin-panel__hotels-containers-wrapper-item-name">
                                                {hotel.hotelName}
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

export default AdminPanel;
