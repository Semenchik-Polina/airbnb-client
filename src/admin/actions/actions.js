import { toast } from 'react-toastify';
import _ from 'lodash';

import history from '../../shared/tools/history';
import Hotel from '../../shared/models/hotel';
import Room from '../../shared/models/room';

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

// hotelId
// id
export function addServices(services, supposedFacilities) {
    return (dispatch) => {
        const paidFacilities = services.paidFacilities
            .filter(facility => facility.selectedOption)
            .map((facility) => {
                const rawFacility = _.find(supposedFacilities, { id: facility.id });
                return {
                    ...rawFacility,
                    price: facility.selectedOption.isPaid ? facility.price : 0,
                };
            });

        const facilities = services.facilities.map((facility) => {
            const rawFacility = _.find(supposedFacilities, { id: facility });
            return {
                ...rawFacility,
            };
        });

        dispatch({
            type: types.ADD_SERVICE_INFO,
            services: [...paidFacilities, ...facilities],
        });
        history.push('/admin-home/create-new-hotel/finish');
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

export function addRoom(room) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_ROOM,
            room: new Room(room),
        });
    };
}

export function deleteRoom(id) {
    return (dispatch) => {
        dispatch({
            type: types.DELETE_ROOM,
            id,
        });
    };
}

export function editRoom(data) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_ROOM,
            data,
        });
    };
}

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const {
                data: { hotels },
            } = await controllers.fetchHotels();
            dispatch({
                type: types.FETCH_ALL_HOTELS_FOR_ADMIN,
                hotels: hotels.map(hotel => new Hotel(hotel)),
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function formatData(data) {
    const formData = new FormData();
    const images = _.flattenDeep(data.rooms.map(room => room.photos));

    images.forEach(image => formData.append('image', image));

    return formData;
}

export function createHotel(data) {
    return async (dispatch) => {
        try {
            const formData = formatData(data);

            const {
                data: { images },
            } = await controllers.saveImages(formData);

            const newHotel = {
                ...data,
                facilities: data.facilities.map((facility) => {
                    if (facility.price === 0) {
                        delete facility.price;
                    }
                    return facility;
                }),
                rooms: data.rooms
                    .reverse()
                    .map(room => ({
                        ...room,
                        photos: room.photos.reverse().map(() => images.pop()),
                    }))
                    .reverse(),
            };

            const {
                data: { hotel },
            } = await controllers.createHotel(newHotel);

            dispatch({
                type: types.ADD_NEW_HOTEL,
                hotel: new Hotel(hotel),
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

// not working yet
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
            await controllers.deleteHotel(id);
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

export function startEditingHotel(id) {
    return async (dispatch) => {
        const {
            data: { hotel },
        } = await controllers.fetchHotel(id);

        dispatch({
            type: types.FILL_HOTEL_INFO,
            hotel: new Hotel(hotel),
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

export function fetchRoomTypes() {
    return async (dispatch) => {
        try {
            const {
                data: { roomTypes },
            } = await controllers.fetchSupposedRoomTypes();

            dispatch({
                type: types.FETCH_SUPPOSED_ROOM_TYPES,
                roomTypes,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
