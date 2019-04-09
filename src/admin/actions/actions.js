import { toast } from 'react-toastify';
import _ from 'lodash';

import history from '../../shared/tools/history';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

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
            type: types.ADD_HOTEL_MAIN_INFO,
            hotel,
        });
        history.push('/admin-home/create-new-hotel/rooms');
    };
}

export function addServices(services, supposedFacilities) {
    return (dispatch) => {
        // console.log(services, supposedFacilities);
        const paidFacilities = services.paidFacilities
            .filter(facility => facility.selectedOption)
            .map((facility) => {
                const rawFacility = _.find(supposedFacilities, { _id: facility.id });
                // if (rawFacility) {
                return {
                    facility: {
                        ...rawFacility,
                    },
                    price: facility.selectedOption.isPaid ? facility.price : 0,
                    hotelId: '1',
                    _id: Math.random(),
                };
                // }
            });
        const facilities = services.facilities
            .filter(facility => facility.selectedOption)
            .map((facility) => {
                const rawFacility = _.find(supposedFacilities, { _id: facility.id });
                // if (rawFacility) {
                return {
                    facility: {
                        ...rawFacility,
                    },
                    _id: Math.random(),
                };
                // }
            });
            console.log(paidFacilities, facilities);
        dispatch({
            type: types.ADD_SERVICE_INFO,
            services: [...paidFacilities, ...facilities],
        });
        // history.push('/admin-home/create-new-hotel/photos');
    };
}

export function addPhotos(photoTour) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_PHOTOS,
            photoTour,
        });
    };
}

export function removePhotoItem(id) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_PHOTO_ITEM,
            id,
        });
    };
}

export function addRoomType(roomType) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_ROOM_TYPE,
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
            type: types.DELETE_ROOM_TYPE,
            id,
        });
    };
}

export function editRoomType(data) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_ROOM_TYPE,
            data,
        });
    };
}

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotels();

            dispatch({
                type: types.FETCH_ALL_HOTELS_FOR_ADMIN,
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

            const {
                data: { hotel },
            } = await controllers.createHotel(formData);

            dispatch({
                type: types.ADD_NEW_HOTEL,
                hotel,
            });

            showSuccessToast('Hotel created!');

            dispatch({
                type: types.RESET_HOTEL_INFO,
            });

            history.push('/admin-home');
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function editHotel(data) {
    return async (dispatch) => {
        try {
            // const formData = formatData(data);

            // const {
            //     data: { hotel },
            // } = await controllers.editHotel(formData);

            dispatch({
                type: types.EDIT_HOTEL,
                data,
            });
            showSuccessToast('Hotel edited!');

            dispatch({
                type: types.RESET_HOTEL_INFO,
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
                type: types.REMOVE_HOTEL,
                id,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function startEditingHotel(hotel) {
    return (dispatch) => {
        dispatch({
            type: types.FILL_HOTEL_INFO,
            hotel,
        });
        history.push('/admin-home/create-new-hotel');
    };
}

export function startCreatingHotel() {
    return (dispatch) => {
        dispatch({
            type: types.RESET_HOTEL_INFO,
        });
        history.push('/admin-home/create-new-hotel');
    };
}

export function setEditableId(id) {
    return (dispatch) => {
        dispatch({
            type: types.SET_EDITABLE_ID,
            id,
        });
    };
}

export function unsetEditableId() {
    return (dispatch) => {
        dispatch({
            type: types.UNSET_EDITABLE_ID,
        });
    };
}

export function fetchSupposedFacilities() {
    return async (dispatch) => {
        try {
            const {
                data: { facilities },
            } = await controllers.fetchSupposedFacilities();

            dispatch({
                type: types.FETCH_SUPPOSED_HOTEL_FACILITIES,
                data: facilities,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
