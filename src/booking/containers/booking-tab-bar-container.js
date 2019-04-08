import { connect } from 'react-redux';

import BookingTabBar from '../components/booking-tab-bar/booking-tab-bar';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        booking: state.bookingReducer.booking,
        isDetailesFormFilled: !!state.bookingReducer.details,
    }),
    dispatch => ({
        fetchBooking: id => dispatch(actions.fetchBooking(id)),
    }),
)(BookingTabBar);
