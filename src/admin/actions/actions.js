import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { adminTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

function createHotel(data) {
    return async () => {
        try {
            await controllers.createHotel(data);
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function addRooms(data) {
    return async () => {
        try {
            await controllers.addRooms(data);
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function addServices(data) {
    return async () => {
        try {
            await controllers.addServices(data);
        } catch (err) {
            showErrorToast(err);
        }
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

export const adminActions = {
    createHotel,
    addRooms,
    addRoomType,
    addServices,
    deleteRoomType,
    editRoomType,
};
