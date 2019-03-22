import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        hotelInfo: PropTypes.shape().isRequired,
    };

    handleClick = () => {
        this.props.createHotel(this.props.hotelInfo);
    };

    renderPhotoItems = (item, index) => (
        <div className="finish-tab__tour-gallery-item" key={item.id}>
            <PhotoItem photoItem={item} key={index} />
            <span className="finish-tab__tour-gallery-item-categoty">{item.type}</span>
        </div>
    );

    renderTourSection = photos => (
        <section className="finish-tab__tour">
            <span className="finish-tab__tour-header">Tour this hotel</span>
            <div className="finish-tab__tour-gallery">{photos.map(this.renderPhotoItems)}</div>
        </section>
    );

    renderFacilitySection = facilities => (
        <section className="finish-tab__facilities">
            <span className="finish-tab__facilities-header">Facilities and services</span>
            <div className="finish-tab__facilities-container">
                {facilities.map((item, index) => (
                    <div key={index} className="finish-tab__facilities-container-item">
                        <img
                            className="finish-tab__facilities-container-item-image"
                            src={`/images/facilities/${_.kebabCase(item)}.png`}
                            alt="hotel"
                        />
                        <span className="finish-tab__facilities-container-item-facility">{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );

    render() {
        const {
            hotelMainInfo, photos, roomTypes, serviceInfo,
        } = this.props.hotelInfo;

        const totalCapacity = roomTypes.reduce((total, room) => total + room.capacity * room.amount, 0);
        const totalRooms = roomTypes.reduce((total, room) => total + room.amount, 0);

        return (
            <div className="finish-tab">
                <div className="finish-tab__banner">
                    <div className="finish-tab__banner-info">
                        <span className="finish-tab__banner-info-sity">Hotel in {hotelMainInfo.sity}</span>
                        <span className="finish-tab__banner-info-name">{hotelMainInfo.hotelName}</span>
                    </div>
                    {photos.length > 0 && (
                        <div className="finish-tab__banner-image-container">
                            <img
                                className="finish-tab__banner-image-container-item"
                                src={photos[0].photos[0].preview}
                                alt="hotel"
                            />
                        </div>
                    )}
                </div>
                <div className="finish-tab__overview">
                    <span className="finish-tab__overview-item">{totalCapacity} guests </span>
                    <span className="finish-tab__overview-item">{totalRooms} rooms</span>
                </div>
                {photos.length > 0 && this.renderTourSection(photos)}
                {serviceInfo.facilities && this.renderFacilitySection(serviceInfo.facilities)}
                <Button className="finish-tab__submit" handleClick={this.handleClick} color="secondary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
