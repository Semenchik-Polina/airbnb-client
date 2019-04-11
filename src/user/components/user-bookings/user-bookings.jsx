import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import TripsSvg from '../trips-svg/trips-svg';
import BookingFilterPanel from '../../containers/booking-filter-panel-container';
import BookingItem from '../booking-item/booking-item';

import './user-bookings.scss';

class UserBookings extends PureComponent {
    static defaultProps = {
        bookings: null,
    };

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }),
        }).isRequired,
        _id: PropTypes.string.isRequired,
        fetchUserBookings: PropTypes.func.isRequired,
        bookings: PropTypes.arrayOf(PropTypes.shape({})),

        bookingFilters: PropTypes.shape({
            location: PropTypes.shape({
                country: PropTypes.string,
                city: PropTypes.string,
            }).isRequired,
            isFutureBookingsFetched: PropTypes.bool.isRequired,
        }).isRequired,
    };

    componentDidMount = () => {
        if (this.props.match.params.id === this.props._id) {
            this.props.fetchUserBookings(this.props._id, this.props.bookingFilters);
        }
    };

    applyFilters = () => {};

    render() {
        const {
            bookings,
            bookingFilters: { isFutureBookingsFetched, location },
        } = this.props;

        const label = `${isFutureBookingsFetched ? 'Future' : 'Past'} trips${
            location.country ? ` in ${location.country}, ${location.city}` : ''
        }`;

        return (
            <div className="user-bookings">
                <BookingFilterPanel />
                <span className="user-bookings__header">{label}</span>
                {bookings ? (
                    <div className="user-bookings__container">
                        {bookings.length > 0 ? (
                            bookings.map((booking, index) => <BookingItem booking={booking} key={index} />)
                        ) : (
                            <span>No future trips</span>
                        )}
                        <TripsSvg />
                    </div>
                ) : (
                    <BeatLoader sizeUnit="px" size={20} color="#2B9E86" loading />
                )}
            </div>
        );
    }
}

export default withRouter(UserBookings);
