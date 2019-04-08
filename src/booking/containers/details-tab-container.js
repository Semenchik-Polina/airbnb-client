import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import DetailsTab from '../components/details-tab/details-tab';

import * as actions from '../actions/actions';
import * as constants from '../constants';

export default connect(
    (state) => {
        const initialValues = state.bookingReducer.details || {
            arrivalTime: constants.MIN_ARRIVAL_TIME,
            departureTime: constants.MAX_DEPARTURE_TIME,
            guests: state.bookingReducer.guests,
        };

        return {
            initialValues,
            booking: state.bookingReducer.booking,
        };
    },
    dispatch => ({
        addBookingDetails: (details, id) => dispatch(actions.addBookingDetails(details, id)),
    }),
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(DetailsTab),
);
