import * as types from '../constants/types';

const initialState = null;

const userBookingsReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_USER_BOOKINGS: {
        console.log(action);
        const { bookings } = action;
        return [...bookings.approvedBookings, ...bookings.unapprovedBookings];
    }
    default:
        return state;
    }
};

export default userBookingsReducer;
