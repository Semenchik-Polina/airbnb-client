import history from '../../shared/tools/history';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

export function fetchBooking(id) {
    return async (dispatch) => {
        const {
            data: { booking },
        } = await controllers.fetchBooking(id);

        dispatch({ type: types.FETCH_BOOKING, booking });
    };
}

export function makeFinalBooking(booking, details) {
    return () => {
        const paidFacilities = details.paidFacilities
            .filter(facility => facility.checked)
            .map((facility) => {
                const bookingFacility = { id: facility.id };
                if (!facility.isPaidPerRoom) {
                    bookingFacility.count = +facility.count;
                }

                return bookingFacility;
            });
        const finalBooking = {
            ...booking,
            paidFacilities,
            arrivalTime: details.arrivalTime,
            departureTime: details.departureTime,
            guests: +details.guests,
            isApproved: true,
        };

        // api - send finalBooking to server
        history.push(`/${finalBooking.user._id}/bookings`);
    };
}

export function changeCheckInCheckOutTime(booking, details) {
    return () => {
        const finalBooking = {
            ...booking,
            arrivalTime: details.arrivalTime,
            departureTime: details.departureTime,
        };

        // api - send booking to server
        history.push(`/${finalBooking.user._id}/bookings`);
    };
}
