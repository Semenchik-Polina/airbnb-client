import { hotelPageTypes } from '../constants';

const initialState = null;

const hotelPageReducer = (state = initialState, action) => {
    switch (action.type) {
    case hotelPageTypes.FETCH_HOTEL: {
        const hotel = action.data;
        return hotel;
    }
    default:
        return state;
    }
};

export default hotelPageReducer;
