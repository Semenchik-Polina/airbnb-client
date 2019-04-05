import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import DetailsTab from '../components/details-tab/details-tab';

import * as constants from '../constants';

export default connect(
    state => ({
        initialValues: {
            arrivalTime: constants.MIN_ARRIVAL_TIME,
            departureTime: constants.MAX_DEPARTURE_TIME,
            guests: state.bookingReducer.guests,
        },
        booking: state.bookingReducer,
    }),
    null,
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(DetailsTab),
);
