import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { adminTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
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
        const { amount, capacity, cost, ...rest } = roomType;
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

function fetchHotel() {
    return () => ({
        hotelMainInfo: {
            country: 'Belarus',
            hotelName: 'Forest-and-Heaven Themed Apartment Close to the Heart of the CBD',
            sity: 'Minsk',
            streetHouse: 'F',
        },
        photos: [
            {
                id: 33,
                photos: [{ preview: 'blob:http://localhost:1234/d029d306-ae28-4afb-adb5-6a710c20d77c', type: 'hotel' }],
            },
        ],
        roomTypes: [{ amount: 4, capacity: 4, cost: 4, type: 'Twin', id: 0.5962465506667141 }],
        serviceInfo: {
            breakfast: 'Yes',
            internet: 'Yes, for free',
            parking: 'Yes, for free',
            facilities: ['Hair dryer', 'Kitchen', 'Wi-Fi', 'TV'],
        },
    });
}

function createHotel(data) {
    return async () => {
        try {
            // await controllers.createHotel(data);
            console.log(data);
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
    fetchHotel,
};
