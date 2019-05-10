import * as types from '../constants/types';

const initialState = null;

const roomTypesReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_SUPPOSED_ROOM_TYPES: {
        const { roomTypes } = action;

        return [...roomTypes];
    }
    default:
        return state;
    }
};

export default roomTypesReducer;
