import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Booking from '../../../shared/models/booking';
import history from '../../../shared/tools/history';

import './booking-item.scss';

class BookingItem extends PureComponent {
    static propTypes = {
        booking: PropTypes.instanceOf(Booking).isRequired,
    };

    redirectToBookingDetails = () => {
        history.push(`/books/${this.props.booking.id}/details`);
    };

    render() {
        const { booking } = this.props;
        return (
            <div className="booking-item" onClick={this.redirectToBookingDetails}>
                <div className="booking-item__price">${booking.totalPrice}</div>
                <div
                    className="booking-item__image"
                    style={{
                        backgroundImage: `url(${booking.photo})`,
                    }}
                />
                <div className="booking-item__content">
                    <div className="booking-item__content-hotel-name">
                        <span>{booking.hotel.name}</span>
                    </div>
                    <div className="booking-item__content-dates">
                        <span className="booking-item__content-dates-item">
                            {moment(booking.dateFrom).format('MMMM Do YYYY')} - {booking.arrivalTime || 'no time'}
                        </span>
                        <span className="booking-item__content-dates-item">
                            {moment(booking.dateTo).format('MMMM Do YYYY')} - {booking.departureTime || 'no time'}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingItem;
