import * as types from '../constants/types';

const dateRangeInitialState = {
    from: null,
    to: null,
};

const guestInitialState = 0;

const locationInitialState = {
    city: '',
    country: '',
};

const initialState = {
    dateRange: {
        ...dateRangeInitialState,
    },
    guests: guestInitialState,
    location: {
        ...locationInitialState,
    },
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.SET_DATE_RANGE: {
        const { range } = action;
        return {
            ...state,
            dateRange: {
                ...range,
            },
        };
    }
    case types.INCREMENT_GUEST_COUNT: {
        return {
            ...state,
            guests: state.guests + 1,
        };
    }
    case types.DECREMENT_GUEST_COUNT: {
        return {
            ...state,
            guests: state.guests - 1,
        };
    }
    case types.SET_LOCATION: {
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
    case types.CLEAR_DATE_FILTER: {
        return {
            ...state,
            dateRange: {
                ...dateRangeInitialState,
            },
        };
    }
    case types.CLEAR_GUEST_FILTER: {
        return {
            ...state,
            guests: guestInitialState,
        };
    }
    case types.CLEAR_LOCATION_FILTER: {
        return {
            ...state,
            location: {
                ...locationInitialState,
            },
        };
    }
    default:
        return state;
    }
};

export default filterReducer;
