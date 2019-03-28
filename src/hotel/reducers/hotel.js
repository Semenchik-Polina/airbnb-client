import { hotelTypes } from '../constants';

const initialState = null;

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case hotelTypes.FETCH_HOTEL: {
        const hotel = action.data;
        return hotel;
    }
    default:
        return state;
    }
};

export default hotelReducer;
