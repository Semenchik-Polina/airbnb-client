import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withRouter } from 'react-router-dom';

import Loader from '../../../shared/components/loader/loader';
import HotelItem from '../../../shared/components/hotel-item/hotel-item';
import Button from '../../../shared/components/button/button';
import ModalBooking from '../../containers/modal-booking-container';

import './hotel-page.scss';

class HotelPage extends PureComponent {
    static defaultProps = {
        hotelInfo: null,
        user: null,
    };

    static propTypes = {
        user: PropTypes.shape({
            _id: PropTypes.string,
            email: PropTypes.string,
            role: PropTypes.string,
        }),
        fetchHotel: PropTypes.func.isRequired,
        isModalShown: PropTypes.bool.isRequired,
        showModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
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
    };

    componentDidMount = () => {
        this.props.fetchHotel(this.props.match.params.id);
    };

    handleBookingClick = () => {
        this.props.showModal();
    };

    handleModalClose = () => {
        this.props.hideModal();
    };

    render() {
        if (this.props.hotelInfo && this.props.hotelInfo.id === this.props.match.params.id) {
            return (
                <div className="hotel-page">
                    <HotelItem hotelInfo={this.props.hotelInfo} />
                    {this.props.user && this.props.user.role !== 'Admin' && (
                        <div className="hotel-page__booking">
                            <div className="hotel-page__booking-price">
                                <span className="hotel-page__booking-price-range">
                                    ${_.minBy(this.props.hotelInfo.roomTypes, 'cost').cost}-
                                    {_.maxBy(this.props.hotelInfo.roomTypes, 'cost').cost}
                                </span>
                                <span className="hotel-page__booking-price-time-unit">/night</span>
                            </div>
                            <Button
                                className="hotel-page__booking-button"
                                color="purple"
                                handleClick={this.handleBookingClick}
                            >
                                Booking
                            </Button>
                        </div>
                    )}
                    {this.props.isModalShown && <ModalBooking onClose={this.handleModalClose} />}
                </div>
            );
        }
        return (
            <Loader />
        );
    }
}

export default withRouter(HotelPage);
