import { sharedTypes } from '../../shared/constants';

const initialState = [];

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case sharedTypes.FETCH_ALL_HOTELS: {
        const hotels = action.data;
        return [...hotels];
    }
    default:
        return state;
    }
};

export default hotelReducer;
