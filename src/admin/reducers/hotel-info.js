import _ from 'lodash';
import uuidv1 from 'uuid/v1';

import * as types from '../constants/types';

const initialState = {
    mainInfo: {},
    roomTypes: [],
    services: null,
    photoTour: [],
    editableId: null,
};

const hotelInfoReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.ADD_HOTEL_MAIN_INFO: {
        const { hotel } = action;

        return {
            ...state,
            mainInfo: { ...hotel },
        };
    }
    case types.ADD_SERVICE_INFO: {
        const { services } = action;
        return {
            ...state,
            services,
        };
    }
    case types.ADD_ROOM_TYPE: {
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
    case types.ADD_PHOTOS: {
        const { photoTour } = action;
        const { type } = photoTour;

        const newPhotos = _.cloneDeep(state.photoTour);
        const existingItem = _.find(newPhotos, { type });
        if (existingItem) {
            existingItem.photos = [...existingItem.photos, ...photoTour.photos];
        } else {
            photoTour.id = uuidv1();
            newPhotos.push(photoTour);
        }

        return {
            ...state,
            photoTour: newPhotos,
        };
    }
    case types.REMOVE_PHOTO_ITEM: {
        const { id } = action;
        const items = state.photoTour.filter(item => item.id !== id);

        return {
            ...state,
            photoTour: items,
        };
    }
    case types.DELETE_ROOM_TYPE: {
        const { id } = action;
        const roomTypes = state.roomTypes.filter(roomType => roomType.id !== id);
        return {
            ...state,
            roomTypes: [...roomTypes],
        };
    }
    case types.FILL_HOTEL_INFO: {
        const { hotel } = action;
        return {
            ...hotel,
        };
    }
    case types.RESET_HOTEL_INFO: {
        return initialState;
    }
    case types.SET_EDITABLE_ID: {
        const { id } = action;
        return {
            ...state,
            editableId: id,
        };
    }
    case types.UNSET_EDITABLE_ID: {
        return {
            ...state,
            editableId: null,
        };
    }
    default:
        return state;
    }
};

export default hotelInfoReducer;
