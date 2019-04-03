import * as types from '../../shared/constants/types';

const initialState = [];

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_ALL_HOTELS: {
        const hotels = action.data;
        return [...hotels];
    }
    default:
        return state;
    }
};

export default hotelReducer;
