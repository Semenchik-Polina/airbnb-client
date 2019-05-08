import _ from 'lodash';
import uuidv1 from 'uuid/v1';

import * as types from '../constants/types';

const initialState = {
    name: '',
    country: '',
    city: '',
    address: '',
    rooms: [],
    facilities: null,
    editableId: null,
};

const hotelInfoReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.ADD_HOTEL_MAIN_INFO: {
        const { hotel } = action;

        return {
            ...state,
            ...hotel,
        };
    }
    case types.ADD_SERVICE_INFO: {
        const { services } = action;
        return {
            ...state,
            facilities: services,
        };
    }
    case types.ADD_ROOM_TYPE: {
        const { room } = action;
        let newRooms;
        const { id } = room;
        if (id) {
            newRooms = _.cloneDeep(state.rooms);
            newRooms[_.findIndex(state.rooms, { id })] = room;
        } else {
            room.id = uuidv1();
            newRooms = [...state.rooms, room];
        }

        return {
            ...state,
            rooms: newRooms,
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
        const rooms = state.rooms.filter(room => room.id !== id);
        return {
            ...state,
            rooms: [...rooms],
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
