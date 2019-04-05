import moment from 'moment';

import * as types from '../constants/types';

export function fetchBooking() {
    return (dispatch) => {
        const booking = {
            _id: '1',
            user: {
                _id: '1',
            },
            requestedAt: moment(new Date()).add(-15, 'm'),
            guests: 3,
            room: {
                _id: '1',
                type: 'Twin',
                capacity: 5,
                cost: 15,
                services: [],
            },
            totalPrice: 15,
            dateFrom: new Date(),
            dateTo: new Date(),
        };
        dispatch({ type: types.FETCH_BOOKING, booking });
        return booking;
    };
}
