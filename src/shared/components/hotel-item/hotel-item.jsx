import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhotoItem from '../photo-item/photo-item';

import devideArray from '../../tools/devideArray';

import './hotel-item.scss';

class HotelItem extends PureComponent {
    static propTypes = {
        hotelInfo: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            rooms: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    count: PropTypes.number.isRequired,
                    capacity: PropTypes.number.isRequired,
                    cost: PropTypes.number.isRequired,
                    type: PropTypes.string.isRequired,
                    photos: PropTypes.arrayOf(
                        PropTypes.shape({
                            src: PropTypes.string.isRequired,
                        }),
                    ).isRequired,
                }),
            ).isRequired,
            facilities: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    hint: PropTypes.string,
                    imageUrl: PropTypes.string,
                    canBePaid: PropTypes.bool,
                }),
            ).isRequired,
        }).isRequired,
    };

    renderPhotoItems = (item, index) => (
        <div className="hotel-item__tour-gallery-item" key={item.id}>
            <PhotoItem photos={item.photos} key={index} />
            <span className="hotel-item__tour-gallery-item-categoty">{item.type}</span>
        </div>
    );

    render() {
        const { rooms, facilities, ...mainInfo } = this.props.hotelInfo;

        const totalCapacity = rooms.reduce((total, room) => total + room.capacity * room.count, 0);
        const totalRooms = rooms.reduce((total, room) => total + room.count, 0);

        const freeFacilities = facilities.filter(service => !service.canBePaid);

        return (
            <div className="hotel-item">
                <div className="hotel-item__banner">
                    <div className="hotel-item__banner-info">
                        <span className="hotel-item__banner-info-sity">Hotel in {mainInfo.city}</span>
                        <span className="hotel-item__banner-info-name">{mainInfo.name}</span>
                    </div>
                    <div
                        className="hotel-item__banner-image"
                        style={{
                            backgroundImage: `url(${rooms[0].photos[0].src})`,
                        }}
                    />
                </div>
                <div className="hotel-item__overview">
                    <span className="hotel-item__overview-item">{totalCapacity} guests </span>
                    <span className="hotel-item__overview-item">{totalRooms} rooms</span>
                </div>
                {/* {photoTour.length > 0 && (
                    <section className="hotel-item__tour">
                        <span className="hotel-item__tour-header">Tour this hotel</span>
                        {devideArray(photoTour, 4).map((item, index) => (
                            <div className="hotel-item__tour-wrapper" key={index}>
                                <div className="hotel-item__tour-gallery">{item.map(this.renderPhotoItems)}</div>
                            </div>
                        ))}
                    </section>
                )} */}
                {freeFacilities.length > 0 && (
                    <section className="hotel-item__facilities">
                        <span className="hotel-item__facilities-header">Facilities and facilities</span>
                        <div className="hotel-item__facilities-containers">
                            {devideArray(devideArray(freeFacilities, 3), 2).map((container, index) => (
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
                                                        src={item.imageUrl}
                                                        alt="hotel"
                                                    />
                                                    <span className="hotel-item__facilities-containers-wrapper-container-item-facility">
                                                        {item.name}
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
