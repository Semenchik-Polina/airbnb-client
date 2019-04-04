import * as types from '../constants/types';

const initialState = null;

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_BOOKING: {
        const { booking } = action;
        return booking;
    }
    default:
        return state;
    }
};

export default bookingReducer;
