import * as types from '../constants/types';

const initialState = {
    isModalShown: false,
    occupiedDates: [],
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.SHOW_BOOKING_MODAL: {
        return {
            ...state,
            isModalShown: true,
        };
    }
    case types.HIDE_BOOKING_MODAL: {
        return {
            ...state,
            isModalShown: false,
        };
    }
    case types.FETCH_OCCUPIED_DATES: {
        const { occupiedDates } = action;
        return {
            ...state,
            occupiedDates,
        };
    }
    default:
        return state;
    }
};

export default modalReducer;
