import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment, { Moment } from 'moment';

import './booking-item.scss';

class BookingItem extends PureComponent {
    static propTypes = {
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            // requestedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]),
            guests: PropTypes.number,
            room: PropTypes.shape({
                _id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                services: PropTypes.arrayOf(PropTypes.string),
            }),
            hotel: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
            }),
            totalPrice: PropTypes.number,
            dateFrom: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]),
            dateTo: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]),
            arrivalTime: PropTypes.string.isRequired,
            departureTime: PropTypes.string.isRequired,
        }).isRequired,
    };

    render() {
        const { booking } = this.props;

        return (
            <div className="booking-item">
                <div>
                    <span>{booking.hotel.hotelName}</span>
                </div>
                <div>{moment(booking.dateFrom).format('MMMM Do YYYY')}</div>
                <div>{booking.arrivalTime}</div>
                <div>{moment(booking.dateTo).format('MMMM Do YYYY')}</div>
                <div>{booking.departureTime}</div>
            </div>
        );
    }
}

export default BookingItem;
