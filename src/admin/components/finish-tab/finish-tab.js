import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';

import facilities from '../../../../public/images/facilities';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        hotelInfo: PropTypes.shape().isRequired,
        // fetchHotel: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.createHotel(this.props.hotelInfo);
    };

    renderPhotoItems = (item, index) => (
        <div className="finish-tab__gallery-item" key={item.id}>
            <PhotoItem photoItem={item} key={index} />
            <span className="photo-tab__photo-container-type">{item.type}</span>
        </div>
    );

    render() {
        const {
            hotelMainInfo, photos, roomTypes, serviceInfo,
        } = this.props.hotelInfo;

        const totalCapacity = roomTypes.reduce((total, room) => total + room.capacity * room.amount, 0);
        const totalRooms = roomTypes.reduce((total, room) => total + room.amount, 0);

        return (
            <div className="finish-tab">
                <div className="finish-tab__wrapper">
                    <div className="finish-tab__main-info">
                        <span className="finish-tab__main-info-sity">Hotel in {hotelMainInfo.sity}</span>
                        <span className="finish-tab__main-info-name">{hotelMainInfo.hotelName}</span>
                    </div>
                    {/* <img className="finish-tab__photo-container-item" src={facilities['iron']} alt="hotel" /> */}
                    {photos.length > 0 && (
                        <div className="finish-tab__photo-container">
                            <img
                                className="finish-tab__photo-container-item"
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
                <span className="finish-tab__tour">Tour this hotel</span>
                <div className="finish-tab__gallery">{photos.map(this.renderPhotoItems)}</div>
                {serviceInfo.facilities && (
                    <Fragment>
                        <span className="finish-tab__tour">Facilities and services</span>
                        <div className="finish-tab__facilities">
                            {serviceInfo.facilities.map((item, index) => (
                                <div key={index} className="finish-tab__facilities-container">
                                    <img
                                        className="finish-tab__facilities-container-image"
                                        src={facilities[_.camelCase(item)]}
                                        alt="hotel"
                                    />
                                    <span className="finish-tab__facilities-container-name">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                )}

                <Button className="finish-tab__submit" handleClick={this.handleClick} color="secondary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
