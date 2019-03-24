import { toast } from 'react-toastify';
import _ from 'lodash';

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
        history.push('/admin-home/create-new-hotel/rooms');
    };
}

function addServices(services) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_SERVICE_INFO,
            services,
        });
        history.push('/admin-home/create-new-hotel/photos');
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
        dispatch({
            type: adminTypes.ADD_ROOM_TYPE,
            roomType,
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
            console.log(data);
            const formData = formatData(data);
            if (!data.id) {
                const {
                    data: { hotel },
                } = await controllers.createHotel(formData);

                dispatch({
                    type: adminTypes.ADD_NEW_HOTEL,
                    hotel,
                });

                showSuccessToast('Hotel created!');
            } else {
                // const {
                //     data: { hotel },
                // } = await controllers.editHotel(formData);

                dispatch({
                    type: adminTypes.EDIT_HOTEL,
                    data,
                });
                showSuccessToast('Hotel edited!');
            }

            dispatch({
                type: adminTypes.RESET_HOTEL_INFO,
            });


            history.push('/admin-home/');
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function removeHotel(id) {
    return async (dispatch) => {
        try {
            // await controllers.removeHotel(id);
            showSuccessToast('Hotel removed!');
            dispatch({
                type: adminTypes.REMOVE_HOTEL,
                id,
            });
            history.push('/admin-home/');
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function startEditingHotel(hotel) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.FILL_HOTEL_INFO,
            hotel,
        });
        history.push('/admin-home/create-new-hotel');
    };
}

function startCreatingHotel() {
    return (dispatch) => {
        dispatch({
            type: adminTypes.RESET_HOTEL_INFO,
        });
        history.push('/admin-home/create-new-hotel');
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
    removeHotel,
    startEditingHotel,
    startCreatingHotel,
};
