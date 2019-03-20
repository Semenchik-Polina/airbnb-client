import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { adminTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data ? err.response.data.error.message : `🦄 ${err}`;
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

function createHotel(data) {
    return async () => {
        try {
            await controllers.createHotel(data);
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
};
