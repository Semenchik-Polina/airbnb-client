import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import BookingDetails from '../components/booking-details/booking-details';

import * as actions from '../actions/actions';
import * as constants from '../constants';

const getDetailsFormInitialValues = (booking) => {
    if (booking) {
        const paidFacilities = booking.hotel.facilities
            .filter(hotelFacility => hotelFacility.price)
            .map(facility => ({
                count: 1,
                id: facility.id,
                checked: false,
                isPaidPerRoom: facility.isPaidPerRoom,
            }));

        return {
            arrivalTime: constants.MIN_ARRIVAL_TIME,
            departureTime: constants.MAX_DEPARTURE_TIME,
            guests: booking.guests,
            paidFacilities,
        };
    }

    return null;
};

export default connect(
    state => ({
        initialValues: getDetailsFormInitialValues(state.bookingReducer.booking, state.bookingReducer.details),
        booking: state.bookingReducer.booking,
        freeFacilities: state.bookingReducer.booking.hotel.facilities.filter(hotelFacility => !hotelFacility.price),
        paidFacilities: state.bookingReducer.booking.hotel.facilities.filter(hotelFacility => hotelFacility.price),
        formValues: getFormValues('bookingDetailsForm')(state),
    }),
    dispatch => ({
        bookingAction: (booking, details) => {
            dispatch(actions.shiftTime(booking, details));
        },
    }),
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(BookingDetails),
);
