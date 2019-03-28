import { bookingModalTypes } from '../constants';

const initialState = {
    isModalShown: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case bookingModalTypes.SHOW_BOOKING_MODAL: {
        return {
            ...state,
            isModalShown: true,
        };
    }
    case bookingModalTypes.HIDE_BOOKING_MODAL: {
        return {
            ...state,
            isModalShown: false,
        };
    }
    default:
        return state;
    }
};

export default modalReducer;
