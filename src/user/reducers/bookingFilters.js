import * as types from '../constants/types';

const initialState = {
    isCompleted: false,
    location: {
        country: '',
        city: '',
    },
};

const bookingFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.SWITCH_BOOKING_RELEVANCE: {
        return {
            ...state,
            isCompleted: !state.isCompleted,
        };
    }
    case types.SET_BOOKING_LOCATION: {
        const {
            location: { country, city },
        } = action;
        return {
            ...state,
            location: {
                country,
                city,
            },
        };
    }
    case types.CLEAR_BOOKING_LOCATION_FILTER: {
        return {
            ...state,
            location: {
                country: '',
                city: '',
            },
        };
    }
    default:
        return state;
    }
};

export default bookingFiltersReducer;
