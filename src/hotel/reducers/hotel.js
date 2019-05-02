import * as types from '../constants/types';

const initialState = null;

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_HOTEL: {
        const { hotel } = action;

        return hotel;
    }
    default:
        return state;
    }
};

export default hotelReducer;
