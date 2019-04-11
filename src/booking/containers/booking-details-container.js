import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import _ from 'lodash';

import BookingDetails from '../components/booking-details/booking-details';

import * as actions from '../actions/actions';
import * as constants from '../constants';

const getDetailsFormInitialValues = (booking) => {
    if (booking) {
        const paidFacilities = booking.room.hotel.services
            .filter(hotelFacility => hotelFacility.price)
            .map(facility => ({
                count: 1,
                id: facility.id,
                checked: false,
                isPaidPerRoom: facility.facility.isPaidPerRoom,
            }));

        return booking.isApproved
            ? {
                arrivalTime: booking.arrivalTime,
                departureTime: booking.departureTime,
                guests: booking.guests,
                paidFacilities: paidFacilities.map((facility) => {
                    const matchingFacility = _.find(booking.services, { id: facility.id });
                    if (matchingFacility) {
                        return { ...facility, ...matchingFacility, checked: true };
                    }
                    return facility;
                }),
            }
            : {
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
        freeFacilities: state.bookingReducer.booking.room.hotel.services.filter(
            hotelFacility => !hotelFacility.price,
        ),
        paidFacilities: state.bookingReducer.booking.room.hotel.services.filter(hotelFacility => hotelFacility.price),
        formValues: getFormValues('bookingDetailsForm')(state),
    }),
    dispatch => ({
        bookingAction: (booking, details) => {
            if (booking.isApproved) {
                dispatch(actions.changeCheckInCheckOutTime(booking, details));
            } else {
                dispatch(actions.makeFinalBooking(booking, details));
            }
        },
    }),
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(BookingDetails),
);
