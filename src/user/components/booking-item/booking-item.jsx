import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import history from '../../../shared/tools/history';

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
                services: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        count: PropTypes.number,
                    }),
                ),
                hotel: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                    city: PropTypes.string.isRequired,
                    hotelName: PropTypes.string.isRequired,
                }),
            }),
            totalPrice: PropTypes.number.isRequired,
            dateFrom: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
            dateTo: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
            arrivalTime: PropTypes.string.isRequired,
            departureTime: PropTypes.string.isRequired,
            hotelThumbnailUrl: PropTypes.string.isRequired,
        }).isRequired,
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
                        backgroundImage: `url(${booking.hotelThumbnailUrl})`,
                    }}
                />
                <div className="booking-item__content">
                    <div className="booking-item__content-hotel-name">
                        <span>{booking.room.hotel.hotelName}</span>
                    </div>
                    <div className="booking-item__content-dates">
                        <span className="booking-item__content-dates-item">
                            {moment(booking.dateFrom).format('MMMM Do YYYY')} - {booking.arrivalTime}
                        </span>
                        <span className="booking-item__content-dates-item">
                            {moment(booking.dateTo).format('MMMM Do YYYY')} - {booking.departureTime}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingItem;
