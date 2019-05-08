import _ from 'lodash';

import * as types from '../constants/types';

const initialState = [];

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_ALL_HOTELS_FOR_ADMIN: {
        const { hotels } = action;
        return [...hotels];
    }
    case types.ADD_NEW_HOTEL: {
        const { hotel } = action;
        return [...state, hotel];
    }
    case types.REMOVE_HOTEL: {
        const { id } = action;
        return state.filter(hotel => hotel.id !== id);
    }
    case types.EDIT_HOTEL: {
        const hotel = action.data;

        const hotels = _.cloneDeep(state);
        hotels[_.findIndex(hotels, { id: hotel.id })] = hotel;
        return hotels;
    }
    default:
        return state;
    }
};

export default hotelReducer;
