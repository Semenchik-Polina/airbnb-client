import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './booking-item.scss';

class BookingItem extends PureComponent {
    static propTypes = {
        booking: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            requestedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]),
            guests: PropTypes.number,
            room: PropTypes.shape({
                id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                services: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    count: PropTypes.number,
                })),
            }),
            hotel: PropTypes.shape({
                id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
            }),
            totalPrice: PropTypes.number.isRequired,
            dateFrom: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
            dateTo: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
            arrivalTime: PropTypes.string.isRequired,
            departureTime: PropTypes.string.isRequired,
        }).isRequired,
    };

    render() {
        const { booking } = this.props;
        return (
            <div className="booking-item">
                <div>
                    <span>{booking.room.hotel.hotelName}</span>
                </div>
                <div>{moment(booking.dateFrom).format('MMMM Do YYYY')} - {booking.arrivalTime}</div>
                <div>{moment(booking.dateTo).format('MMMM Do YYYY')} - {booking.departureTime}</div>
            </div>
        );
    }
}

export default BookingItem;
