import { adminTypes } from '../constants';

const initialState = [];

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case adminTypes.FETCH_ALL_HOTELS: {
        const hotels = action.data;
        return [...hotels];
    }
    default:
        return state;
    }
};

export default hotelReducer;
