import * as types from '../constants/types';

const initialState = {
    booking: null,
    details: null,
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_BOOKING: {
        const { booking } = action;
        booking.requestedAt = new Date(booking.requestedAt);
        booking.dateFrom = new Date(booking.dateFrom);
        booking.dateTo = new Date(booking.dateTo);

        return {
            ...state,
            booking,
            details: null,
        };
    }
    case types.ADD_BOOKING_DETAILS: {
        const { details } = action;
        return {
            ...state,
            details,
        };
    }
    default:
        return state;
    }
};

export default bookingReducer;
