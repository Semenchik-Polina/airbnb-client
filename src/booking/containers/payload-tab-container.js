import { connect } from 'react-redux';

import PayloadTab from '../components/payload-tab/payload-tab';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        booking: state.bookingReducer.booking,
        details: state.bookingReducer.details,
    }),
    dispatch => ({
        makeFinalBooking: (booking, details) => dispatch(actions.makeFinalBooking(booking, details)),
    }),
)(PayloadTab);
