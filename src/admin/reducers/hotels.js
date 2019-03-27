import _ from 'lodash';

import { adminTypes } from '../constants';

const initialState = [];

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
    case adminTypes.FETCH_ALL_HOTELS_FOR_ADMIN: {
        const hotels = action.data;
        return [...hotels];
    }
    case adminTypes.ADD_NEW_HOTEL: {
        const { hotel } = action;
        return [...state, hotel];
    }
    case adminTypes.REMOVE_HOTEL: {
        const { id } = action;
        return state.filter(hotel => hotel.id !== id);
    }
    case adminTypes.EDIT_HOTEL: {
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
