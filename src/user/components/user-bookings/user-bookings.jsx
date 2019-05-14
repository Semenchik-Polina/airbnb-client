import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import Loader from '../../../shared/components/loader/loader';
import TripsSvg from '../trips-svg/trips-svg';
import BookingFilterPanel from '../../containers/booking-filter-panel-container';
import BookingItem from '../booking-item/booking-item';
import Tool from '../../../shared/components/tool/tool';

import './user-bookings.scss';

class UserBookings extends PureComponent {
    static defaultProps = {
        bookings: null,
    };

    static propTypes = {
        fetchUserBookings: PropTypes.func.isRequired,
        removeBooking: PropTypes.func.isRequired,
        bookings: PropTypes.arrayOf(PropTypes.shape({})),
        bookingFilters: PropTypes.shape({
            location: PropTypes.shape({
                country: PropTypes.string,
                city: PropTypes.string,
            }).isRequired,
            isCompleted: PropTypes.bool.isRequired,
        }).isRequired,
    };

    componentDidMount = () => {
        this.props.fetchUserBookings(this.props.bookingFilters);
    };

    applyFilters = () => {
        this.props.fetchUserBookings(this.props.bookingFilters);
    };

    removeBooking = booking => () => {
        this.props.removeBooking(booking.id);
    };

    render() {
        const {
            bookings,
            bookingFilters: { isCompleted, location },
        } = this.props;

        const label = `${isCompleted ? 'Past' : 'Future'} trips${
            location.country ? ` in ${location.country}, ${location.city}` : ''
        }`;

        return (
            <div className="user-bookings">
                <BookingFilterPanel applyFilters={this.applyFilters} />
                <span className="user-bookings__header">{label}</span>
                {bookings ? (
                    <div className="user-bookings__container">
                        {bookings.length > 0 ? (
                            bookings.map((booking, index) => (
                                <div key={index} className="user-bookings__container-item">
                                    {!booking.isApproved && (
                                        <Tool
                                            src="/images/tools/delete.png"
                                            className="user-bookings__container-item-edit"
                                            handleClick={this.removeBooking(booking)}
                                        />
                                    )}
                                    <BookingItem booking={booking} />
                                </div>
                            ))
                        ) : (
                            <span>No {isCompleted ? 'past' : 'future'} trips</span>
                        )}
                    </div>
                ) : (
                    <Loader />
                )}
                <TripsSvg />
            </div>
        );
    }
}

export default withRouter(UserBookings);
