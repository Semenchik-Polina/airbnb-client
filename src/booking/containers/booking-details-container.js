import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import _ from 'lodash';

import BookingDetails from '../components/booking-details/booking-details';

import * as actions from '../actions/actions';
import * as constants from '../constants';

const getDetailsFormInitialValues = (booking, details) => {
    if (booking) {
        const hotelFacilities = booking.room.hotel.services;
        const paidFacilities = hotelFacilities
            .filter(hotelFacility => hotelFacility.price)
            .map(facility => ({
                count: 1,
                id: facility.id,
                checked: false,
                isPaidPerRoom: facility.facility.isPaidPerRoom,
            }));
        const initialValues = {
            arrivalTime: constants.MIN_ARRIVAL_TIME,
            departureTime: constants.MAX_DEPARTURE_TIME,
            guests: booking.guests,
            paidFacilities,
        };

        if (details) {
            initialValues.arrivalTime = details.arrivalTime;
            initialValues.departureTime = details.departureTime;
            initialValues.guests = details.guests;

            initialValues.paidFacilities = paidFacilities.map((facility) => {
                const matchingFacility = _.find(details.paidFacilities, { id: facility.id });
                if (matchingFacility) {
                    return { ...facility, ...matchingFacility, checked: true };
                }
                return facility;
            });
        }

        return initialValues;
    }

    return null;
};

export default connect(
    state => ({
        initialValues: getDetailsFormInitialValues(state.bookingReducer.booking, state.bookingReducer.details),
        booking: state.bookingReducer.booking,
        freeFacilities: state.bookingReducer.booking.room.hotel.services.filter(hotelFacility => !hotelFacility.price),
        paidFacilities: state.bookingReducer.booking.room.hotel.services.filter(hotelFacility => hotelFacility.price),
        formValues: getFormValues('bookingDetailsForm')(state),
    }),
    dispatch => ({
        makeFinalBooking: (booking, details) => dispatch(actions.makeFinalBooking(booking, details)),
    }),
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(BookingDetails),
);
