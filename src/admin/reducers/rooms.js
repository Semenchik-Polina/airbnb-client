import { adminTypes } from '../constants';

const initialState = {
    roomTypes: [
        {
            id: 1,
            type: 'Single',
            amount: 7,
            capacity: 7,
            cost: 7,
        },
    ],
};

const rooms = (state = initialState, action) => {
    switch (action.type) {
    case adminTypes.ADD_ROOM_TYPE: {
        const { roomType } = action;
        // remove id later
        roomType.id = Math.random();
        return {
            roomTypes: [...state.roomTypes, roomType],
        };
    }
    case adminTypes.DELETE_ROOM_TYPE: {
        const { id } = action;
        const roomTypes = state.roomTypes.filter(roomType => roomType.id !== id);
        return {
            roomTypes: [...roomTypes],
        };
    }
    case adminTypes.EDIT_ROOM_TYPE: {
        // not implemented
        return {
            ...state,
        };
    }

    default:
        return state;
    }
};

export default rooms;
