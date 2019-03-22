import { toast } from 'react-toastify';
import _ from 'lodash';
import { destroy } from 'redux-form';

import history from '../../shared/tools/history';

import controllers from '../controllers/controllers';

import { adminTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

const showSuccessToast = (message) => {
    toast(message);
};

function addHotelInfo(hotel) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_HOTEL_MAIN_INFO,
            hotel,
        });
    };
}

function addServices(services) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_SERVICE_INFO,
            services,
        });
    };
}

function addPhotos(photos) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_PHOTOS,
            photos,
        });
    };
}

function removePhotoItem(id) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.REMOVE_PHOTO_ITEM,
            id,
        });
    };
}

function addRoomType(roomType) {
    return (dispatch) => {
        const {
            amount, capacity, cost, ...rest
        } = roomType;
        dispatch({
            type: adminTypes.ADD_ROOM_TYPE,
            roomType: {
                amount: +amount,
                capacity: +capacity,
                cost: +cost,
                ...rest,
            },
        });
    };
}

function deleteRoomType(id) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.DELETE_ROOM_TYPE,
            id,
        });
    };
}

function editRoomType(data) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.EDIT_ROOM_TYPE,
            data,
        });
    };
}

function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotels();

            dispatch({
                type: adminTypes.FETCH_ALL_HOTELS,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function formatData(data) {
    const formData = new FormData();
    const images = _.flattenDeep(data.photos.map(item => item.photos));
    images.forEach(image => formData.append('image', image));
    const hotelInfo = JSON.stringify(data);
    formData.append('info', hotelInfo);
    return formData;
}

function createHotel(data) {
    return async (dispatch) => {
        try {
            const formData = formatData(data);
            await controllers.createHotel(formData);
            showSuccessToast('Hotel created!');
            dispatch({
                type: adminTypes.RESET_HOTEL_INFO,
            });
            dispatch(destroy('hotelForm'));
            dispatch(destroy('serviceForm'));

            history.push('/admin-home/');
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export const adminActions = {
    addHotelInfo,
    addRoomType,
    addServices,
    addPhotos,
    deleteRoomType,
    editRoomType,
    createHotel,
    removePhotoItem,
    fetchHotels,
};
