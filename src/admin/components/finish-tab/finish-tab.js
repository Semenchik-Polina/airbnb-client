import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        hotelInfo: PropTypes.shape({
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
        }).isRequired,
    };

    handleClick = () => {
        this.props.createHotel(this.props.hotelInfo);
    };

    devideArray = (array, size) => {
        const devidedArray = [];
        for (let i = 0; i < Math.ceil(array.length / size); i += 1) {
            devidedArray[i] = array.slice(i * size, i * size + size);
        }

        return devidedArray;
    };

    renderPhotoItems = (item, index) => (
        <div className="finish-tab__tour-gallery-item" key={item.id}>
            <PhotoItem photoItem={item} key={index} />
            <span className="finish-tab__tour-gallery-item-categoty">{item.type}</span>
        </div>
    );

    render() {
        const {
            mainInfo, photoTour, roomTypes, services,
        } = this.props.hotelInfo;

        const totalCapacity = roomTypes.reduce((total, room) => total + room.capacity * room.amount, 0);
        const totalRooms = roomTypes.reduce((total, room) => total + room.amount, 0);

        return (
            <div className="finish-tab">
                <div className="finish-tab__banner">
                    <div className="finish-tab__banner-info">
                        <span className="finish-tab__banner-info-sity">Hotel in {mainInfo.sity}</span>
                        <span className="finish-tab__banner-info-name">{mainInfo.hotelName}</span>
                    </div>
                    {photoTour.length > 0 && (
                        <div className="finish-tab__banner-image-container">
                            <img
                                className="finish-tab__banner-image-container-item"
                                src={photoTour[0].photos[0].src}
                                alt="hotel"
                            />
                        </div>
                    )}
                </div>
                <div className="finish-tab__overview">
                    <span className="finish-tab__overview-item">{totalCapacity} guests </span>
                    <span className="finish-tab__overview-item">{totalRooms} rooms</span>
                </div>
                {photoTour.length > 0 && (
                    <section className="finish-tab__tour">
                        <span className="finish-tab__tour-header">Tour this hotel</span>
                        {this.devideArray(photoTour, 4).map((item, index) => (
                            <div className="finish-tab__tour-wrapper" key={index}>
                                <div className="finish-tab__tour-gallery">{item.map(this.renderPhotoItems)}</div>
                            </div>
                        ))}
                    </section>
                )}
                {services.facilities.length > 0 && (
                    <section className="finish-tab__facilities">
                        <span className="finish-tab__facilities-header">Facilities and services</span>
                        <div className="finish-tab__facilities-containers">
                            {this.devideArray(this.devideArray(services.facilities, 3), 2).map((container, index) => (
                                <div className="finish-tab__facilities-containers-wrapper" key={index}>
                                    {container.map((items, containerIndex) => (
                                        <div
                                            key={containerIndex}
                                            className="finish-tab__facilities-containers-wrapper-container"
                                        >
                                            {items.map((item, itemIndex) => (
                                                <div
                                                    key={itemIndex}
                                                    className="finish-tab__facilities-containers-wrapper-container-item"
                                                >
                                                    <img
                                                        className="finish-tab__facilities-containers-wrapper-container-item-image"
                                                        src={`/images/facilities/${_.kebabCase(item)}.png`}
                                                        alt="hotel"
                                                    />
                                                    <span className="finish-tab__facilities-containers-wrapper-container-item-facility">
                                                        {item}
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
                <Button className="finish-tab__submit" handleClick={this.handleClick} color="secondary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
