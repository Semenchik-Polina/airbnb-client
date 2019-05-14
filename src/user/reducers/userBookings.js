import * as types from '../constants/types';

const initialState = null;

const userBookingsReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_USER_BOOKINGS: {
        const { bookings } = action;

        return [...bookings.approvedBookings, ...bookings.unapprovedBookings, ...bookings.expiredBookings];
    }
    case types.REMOVE_BOOKING: {
        const { id } = action;

        return state.filter(item => item.id !== id);
    }
    default:
        return state;
    }
};

export default userBookingsReducer;
