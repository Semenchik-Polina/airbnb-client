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

export function addHotelInfo(hotel) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_HOTEL_MAIN_INFO,
            hotel,
        });
        history.push('/admin-home/create-new-hotel/rooms');
    };
}

export function addServices(services) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_SERVICE_INFO,
            services,
        });
        history.push('/admin-home/create-new-hotel/photos');
    };
}

export function addPhotos(photoTour) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_PHOTOS,
            photoTour,
        });
    };
}

export function removePhotoItem(id) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.REMOVE_PHOTO_ITEM,
            id,
        });
    };
}

export function addRoomType(roomType) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.ADD_ROOM_TYPE,
            roomType: {
                ...roomType,
                capacity: +roomType.capacity,
                amount: +roomType.amount,
                cost: +roomType.cost,
            },
        });
    };
}

export function deleteRoomType(id) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.DELETE_ROOM_TYPE,
            id,
        });
    };
}

export function editRoomType(data) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.EDIT_ROOM_TYPE,
            data,
        });
    };
}

export function fetchHotels() {
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

export function formatData(data) {
    const formData = new FormData();
    const images = _.flattenDeep(data.photoTour.map(item => item.photos));
    images.forEach(image => formData.append('image', image));

    const hotelInfo = JSON.stringify(data);
    formData.append('info', hotelInfo);

    return formData;
}

export function createHotel(data) {
    return async (dispatch) => {
        try {
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

            history.push('/admin-home');
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function removeHotel(id) {
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

export function startEditingHotel(hotel) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.FILL_HOTEL_INFO,
            hotel,
        });
        history.push('/admin-home/create-new-hotel');
    };
}

export function startCreatingHotel() {
    return (dispatch) => {
        dispatch({
            type: adminTypes.RESET_HOTEL_INFO,
        });
        history.push('/admin-home/create-new-hotel');
    };
}

export function setEditableId(id) {
    return (dispatch) => {
        dispatch({
            type: adminTypes.SET_EDITABLE_ID,
            id,
        });
    };
}

export function unsetEditableId() {
    return (dispatch) => {
        dispatch({
            type: adminTypes.UNSET_EDITABLE_ID,
        });
    };
}

