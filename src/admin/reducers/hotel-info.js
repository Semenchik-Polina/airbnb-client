import _ from 'lodash';
import uuidv1 from 'uuid/v1';

import { adminTypes } from '../constants';

const initialState = {
    mainInfo: {},
    roomTypes: [],
    services: {},
    photos: [],
};

const hotelInfoReducer = (state = initialState, action) => {
    switch (action.type) {
    case adminTypes.ADD_HOTEL_MAIN_INFO: {
        const { hotel } = action;

        return {
            ...state,
            mainInfo: { ...hotel },
        };
    }
    case adminTypes.ADD_SERVICE_INFO: {
        const { services } = action;

        return {
            ...state,
            services: { ...services },
        };
    }
    case adminTypes.ADD_ROOM_TYPE: {
        const { roomType } = action;
        let newTypes;
        const { id } = roomType;
        if (id) {
            newTypes = _.cloneDeep(state.roomTypes);
            newTypes[_.findIndex(state.roomTypes, { id })] = roomType;
        } else {
            roomType.id = uuidv1();
            newTypes = [...state.roomTypes, roomType];
        }

        return {
            ...state,
            roomTypes: newTypes,
        };
    }
    case adminTypes.ADD_PHOTOS: {
        const { photos } = action;
        const { type } = photos;

        const newPhotos = _.cloneDeep(state.photos);
        const existingItem = _.find(newPhotos, { type });
        if (existingItem) {
            existingItem.photos = [...existingItem.photos, ...photos.photos];
        } else {
            photos.id = uuidv1();
            newPhotos.push(photos);
        }

        return {
            ...state,
            photos: newPhotos,
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
    case adminTypes.RESET_HOTEL_INFO: {
        return initialState;
    }
    default:
        return state;
    }
};

export default hotelInfoReducer;
