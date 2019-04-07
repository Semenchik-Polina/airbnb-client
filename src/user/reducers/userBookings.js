import * as types from '../constants/types';

const initialState = null;

const userBookingsReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_USER_BOOKINGS: {
        const { data } = action;
        return [...data];
    }
    default:
        return state;
    }
};

export default userBookingsReducer;
