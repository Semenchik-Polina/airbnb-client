import controllers from '../controllers/controllers';
import { adminTypes } from './types';

function createHotel(data) {
    return async (dispatch) => {
        try {
            // await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function addRooms(data) {
    return async (dispatch) => {
        try {
            // await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function addServices(data) {
    return async (dispatch) => {
        try {
            // await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function addRoomType(roomType) {
    return async (dispatch) => {
        try {
            // await controllers.createHotel(data);
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
            // await controllers.createHotel(data);
            console.log('delete');
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
            // await controllers.createHotel(data);
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
