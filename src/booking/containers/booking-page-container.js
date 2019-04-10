import { connect } from 'react-redux';

import BookingPage from '../components/booking-page/booking-page';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        booking: state.bookingReducer.booking,
        isDetailesFormFilled: !!state.bookingReducer.details,
    }),
    dispatch => ({
        fetchBooking: id => dispatch(actions.fetchBooking(id)),
    }),
)(BookingPage);
