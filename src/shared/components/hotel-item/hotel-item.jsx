import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhotoItem from '../photo-item/photo-item';

import devideArray from '../../tools/devideArray';

import './hotel-item.scss';

class HotelItem extends PureComponent {
    static propTypes = {
        hotelInfo: PropTypes.shape({
            id: PropTypes.string,
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
                    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
        }).isRequired,
    };

    renderPhotoItems = (item, index) => (
        <div className="hotel-item__tour-gallery-item" key={item.id}>
            <PhotoItem photoItem={item} key={index} />
            <span className="hotel-item__tour-gallery-item-categoty">{item.type}</span>
        </div>
    );

    render() {
        const {
            photoTour, roomTypes, services, ...mainInfo
        } = this.props.hotelInfo;

        const totalCapacity = roomTypes.reduce((total, room) => total + room.capacity * room.amount, 0);
        const totalRooms = roomTypes.reduce((total, room) => total + room.amount, 0);

        const facilities = services.filter(service => !service.facility.canBePaid);

        return (
            <div className="hotel-item">
                <div className="hotel-item__banner">
                    <div className="hotel-item__banner-info">
                        <span className="hotel-item__banner-info-sity">Hotel in {mainInfo.city}</span>
                        <span className="hotel-item__banner-info-name">{mainInfo.hotelName}</span>
                    </div>
                    <div
                        className="hotel-item__banner-image"
                        style={{
                            backgroundImage: `url(${photoTour[0].photos[0].src})`,
                        }}
                    />
                </div>
                <div className="hotel-item__overview">
                    <span className="hotel-item__overview-item">{totalCapacity} guests </span>
                    <span className="hotel-item__overview-item">{totalRooms} rooms</span>
                </div>
                {photoTour.length > 0 && (
                    <section className="hotel-item__tour">
                        <span className="hotel-item__tour-header">Tour this hotel</span>
                        {devideArray(photoTour, 4).map((item, index) => (
                            <div className="hotel-item__tour-wrapper" key={index}>
                                <div className="hotel-item__tour-gallery">{item.map(this.renderPhotoItems)}</div>
                            </div>
                        ))}
                    </section>
                )}
                {facilities.length > 0 && (
                    <section className="hotel-item__facilities">
                        <span className="hotel-item__facilities-header">Facilities and services</span>
                        <div className="hotel-item__facilities-containers">
                            {devideArray(devideArray(facilities, 3), 2).map((container, index) => (
                                <div className="hotel-item__facilities-containers-wrapper" key={index}>
                                    {container.map((items, containerIndex) => (
                                        <div
                                            key={containerIndex}
                                            className="hotel-item__facilities-containers-wrapper-container"
                                        >
                                            {items.map((item, itemIndex) => (
                                                <div
                                                    key={itemIndex}
                                                    className="hotel-item__facilities-containers-wrapper-container-item"
                                                >
                                                    <img
                                                        className="hotel-item__facilities-containers-wrapper-container-item-image"
                                                        src={item.facility.imageUrl}
                                                        alt="hotel"
                                                    />
                                                    <span className="hotel-item__facilities-containers-wrapper-container-item-facility">
                                                        {item.facility.name}
                                                    </span>
                                                </div>
                                            ))}
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

export default HotelItem;
