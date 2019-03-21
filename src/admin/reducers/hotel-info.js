import { adminTypes } from '../constants';

const initialState = {
    hotelMainInfo: {},
    roomTypes: [],
    serviceInfo: {},
    photos: [],
};

const hotelInfoReducer = (state = initialState, action) => {
    switch (action.type) {
    case adminTypes.ADD_HOTEL_MAIN_INFO: {
        const { hotel } = action;

        return {
            ...state,
            hotelMainInfo: { ...hotel },
        };
    }
    case adminTypes.ADD_SERVICE_INFO: {
        const { services } = action;

        return {
            ...state,
            serviceInfo: { ...services },
        };
    }
    case adminTypes.ADD_ROOM_TYPE: {
        const { roomType } = action;
        // remove id later
        roomType.id = Math.random();
        return {
            ...state,
            roomTypes: [...state.roomTypes, roomType],
        };
    }
    case adminTypes.ADD_PHOTOS: {
        const { photos } = action;
        photos.id = Math.random();
        // remove id later
        return {
            ...state,
            photos: [...state.photos, photos],
        };
    }
    case adminTypes.REMOVE_PHOTO_ITEM: {
        const { id } = action;
        const items = state.photos.filter(item => item.id !== id);

        return {
            ...state,
            photos: items,
        };
    }
    case adminTypes.DELETE_ROOM_TYPE: {
        const { id } = action;
        const roomTypes = state.roomTypes.filter(roomType => roomType.id !== id);
        return {
            ...state,
            roomTypes: [...roomTypes],
        };
    }
    default:
        return state;
    }
};

export default hotelInfoReducer;
