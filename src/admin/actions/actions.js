import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { adminTypes } from './types';

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
    return async (dispatch) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    };
}

function deleteRoomType(id) {
    return async (dispatch) => {
        try {
            dispatch({
                type: adminTypes.DELETE_ROOM_TYPE,
                id,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

function editRoomType(data) {
    return async (dispatch) => {
        try {
            dispatch({
                type: adminTypes.EDIT_ROOM_TYPE,
                data,
            });
        } catch (err) {
            console.log(err);
        }
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
